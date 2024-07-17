import { INJECTED_JAVASCRIPT } from "@/lib/log";
import React, { useRef } from "react";
import { View } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";

const Index = () => {
  const webViewRef = useRef<WebView>(null);

  const messageHandler = (event: WebViewMessageEvent) => {
    const data = event.nativeEvent.data;
    try {
      const parsedData = JSON.parse(data);
      if (parsedData.type === "Console") {
        const { type, args } = parsedData.data as {
          type: "log" | "warn" | "error";
          args: string;
        };
        console[type]("WebView:", ...args);
      }
    } catch (error) {
      console.error("웹뷰 메시지를 파싱하는데 실패하였습니다: ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        source={{ uri: "http://0.0.0.0:3000/" }}
        onMessage={messageHandler}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
    </View>
  );
};

export default Index;
