import { WebViewBridge } from "@/components/webview-bridge";
import { bridgeEventEmitter } from "@/lib/event-emitter";
import { WebViewMessage } from "@/types/webview";
import React, { useCallback, useEffect } from "react";
import { Button, SafeAreaView } from "react-native";

const App = () => {
  useEffect(() => {
    const handleMessageFromWebView = (message: WebViewMessage) => {
      console.log("Received message from WebView:", message);
      try {
        const parsedPayload = JSON.parse(message.payload);
      } catch (error) {
        console.error("Error parsing payload:", error);
      }
    };

    bridgeEventEmitter.on("messageFromWebView", handleMessageFromWebView);

    return () => {
      bridgeEventEmitter.off("messageFromWebView", handleMessageFromWebView);
    };
  }, []);

  const sendMessageToWebView = useCallback(() => {
    const message: WebViewMessage = {
      type: "GREETING",
      payload: JSON.stringify({ text: "!!!!!! APP to Webview" }),
    };
    bridgeEventEmitter.emitTyped("sendMessageToWebView", message);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebViewBridge source={{ uri: "http://192.168.0.8:3000/" }} />
      <Button
        title="웹뷰로 메시지 보내기 테스트 버튼"
        onPress={sendMessageToWebView}
      />
    </SafeAreaView>
  );
};

export default App;
