import { WebViewMessage } from "@/types/webview";
import EventEmitter from "eventemitter3";

class BridgeEventEmitter extends EventEmitter {
  emitTyped<T extends WebViewMessage>(event: string, message: T) {
    this.emit(event, message);
  }
}

export const bridgeEventEmitter = new BridgeEventEmitter();
