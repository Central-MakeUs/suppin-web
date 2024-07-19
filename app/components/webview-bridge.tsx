import { useWebViewBridge } from "@/hooks/use-webview";
import { INJECTED_JAVASCRIPT } from "@/lib/log";
import React from "react";
import WebView from "react-native-webview";

interface WebViewBridgeProps {
  source: { uri: string };
}

export const WebViewBridge: React.FC<WebViewBridgeProps> = ({ source }) => {
  const { webviewRef, onMessage } = useWebViewBridge();

  return (
    <WebView
      ref={webviewRef}
      source={source}
      onMessage={onMessage}
      injectedJavaScript={INJECTED_JAVASCRIPT}
    />
  );
};
