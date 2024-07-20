import { BridgeMessage } from '@/types/webview';
import EventEmitter from 'eventemitter3';

class BridgeEventEmitter extends EventEmitter {
  sendToNative(message: BridgeMessage) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
    } else {
      console.warn('ReactNativeWebView is not available');
    }
  }
}

export const bridgeEventEmitter = new BridgeEventEmitter();
