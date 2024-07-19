import { bridgeEventEmitter } from "@/lib/event-emitter";
import { WebViewConsoleMessage, WebViewMessage } from "@/types/webview";
import { useCallback, useEffect, useRef } from "react";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export const useWebViewBridge = () => {
  const webviewRef = useRef<WebView>(null);

  const sendMessageToWebView = useCallback((message: WebViewMessage) => {
    webviewRef.current?.injectJavaScript(`
      try {
        window.dispatchEvent(new MessageEvent('message', { data: ${JSON.stringify(
          message
        )} }));
      } catch (error) {
        console.error('Error sending message to WebView:', error);
      }
    `);
  }, []);

  useEffect(() => {
    const handleMessageToWebView = (message: WebViewMessage) => {
      sendMessageToWebView(message);
    };

    bridgeEventEmitter.on("sendMessageToWebView", handleMessageToWebView);

    return () => {
      bridgeEventEmitter.off("sendMessageToWebView", handleMessageToWebView);
    };
  }, [sendMessageToWebView]);

  const onMessage = useCallback((event: WebViewMessageEvent) => {
    try {
      const message: WebViewMessage = JSON.parse(event.nativeEvent.data);

      if (message.type === "Console") {
        const consoleMessage = message as WebViewConsoleMessage;
        const { type, args } = JSON.parse(consoleMessage.payload);
        console[type as "log" | "warn" | "error"]("WebView:", ...args);
      } else {
        bridgeEventEmitter.emitTyped("messageFromWebView", message);
      }
    } catch (error) {
      console.error("Error parsing message from WebView:", error);
    }
  }, []);

  return { webviewRef, onMessage };
};
