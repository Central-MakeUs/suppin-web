import { useWebViewBridge } from "@/hooks/use-webview";
import { INJECTED_JAVASCRIPT } from "@/lib/log";
import React, { useEffect, useState } from "react";
import { BackHandler } from "react-native";
import WebView from "react-native-webview";

interface WebViewBridgeProps {
  source: { uri: string };
}

export const WebViewBridge = ({ source }: WebViewBridgeProps) => {
  const { webviewRef, onMessage } = useWebViewBridge();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webviewRef.current) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    };

    BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, [canGoBack]);

  return (
    <WebView
      ref={webviewRef}
      source={source}
      onMessage={onMessage}
      injectedJavaScript={INJECTED_JAVASCRIPT}
      onNavigationStateChange={(navState) => {
        setCanGoBack(navState.canGoBack);
      }}
    />
  );
};
