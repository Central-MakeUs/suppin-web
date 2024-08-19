import { WebViewBridge } from "@/components/webview-bridge";
import { bridgeEventEmitter } from "@/lib/event-emitter";
import { registerForPushNotificationsAsync } from "@/lib/noti";
import { WebViewMessage } from "@/types/webview";
import * as Notifications from "expo-notifications";
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

  registerForPushNotificationsAsync();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  Notifications.addNotificationReceivedListener((notification) => {
    console.log("Notification received:", notification);
  });

  Notifications.addNotificationResponseReceivedListener((response) => {
    console.log("Notification response received:", response);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebViewBridge source={{ uri: "https://suppin-web.vercel.app/" }} />
    </SafeAreaView>
  );
};

export default App;
