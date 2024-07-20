import { useBridge } from '@/hooks/use-webview';
import { bridgeEventEmitter } from '@/lib/event-emitter';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  const { sendMessage } = useBridge();

  useEffect(() => {
    const handleNativeMessage = (payload: string) => {
      console.log('Received message from native:', payload);
    };

    bridgeEventEmitter.on('nativeMessage', handleNativeMessage);

    return () => {
      bridgeEventEmitter.off('nativeMessage', handleNativeMessage);
    };
  }, []);

  const handleSendMessage = () => {
    sendMessage(
      'webViewMessage',
      JSON.stringify({ text: 'Hello from WebView' })
    );
  };

  return (
    <>
      <Outlet />
      <button onClick={handleSendMessage}>웹뷰 테스트 버튼</button>
    </>
  );
}
