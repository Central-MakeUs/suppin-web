import { WebViewBridge } from "@/components/webview-bridge";
import { bridgeEventEmitter } from "@/lib/event-emitter";
import { WebViewMessage } from "@/types/webview";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebViewBridge source={{ uri: "https://suppin-web.vercel.app/" }} />
    </SafeAreaView>
  );
};

export default App;
