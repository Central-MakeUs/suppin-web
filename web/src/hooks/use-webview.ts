import { bridgeEventEmitter } from '@/lib/event-emitter';
import { BridgeMessage } from '@/types/webview';
import { useCallback, useEffect } from 'react';

export const useBridge = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Received raw event:', event);

      try {
        let message: BridgeMessage;

        if (typeof event.data === 'string') {
          message = JSON.parse(event.data);
        } else if (typeof event.data === 'object') {
          message = event.data;
        } else {
          throw new Error('Unsupported message format');
        }

        console.log('Parsed message:', message);

        const payload =
          typeof message.payload === 'string'
            ? JSON.parse(message.payload)
            : message.payload;

        bridgeEventEmitter.emit(message.type, payload);
      } catch (error) {
        console.error('Error processing message from native:', error);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const sendMessage = useCallback((type: string, payload: string) => {
    const message: BridgeMessage = {
      type,
      payload: JSON.stringify(payload),
    };
    bridgeEventEmitter.sendToNative(message);
  }, []);

  return { sendMessage };
};
