import { bridgeEventEmitter } from '@/lib/event-emitter';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { WebviewWrapper } from './root.styles';

export default function Root() {
  useEffect(() => {
    const handleNativeMessage = (payload: string) => {
      console.log('Received message from native:', payload);
    };

    bridgeEventEmitter.on('nativeMessage', handleNativeMessage);

    return () => {
      bridgeEventEmitter.off('nativeMessage', handleNativeMessage);
    };
  }, []);

  return (
    <WebviewWrapper>
      <Outlet />
    </WebviewWrapper>
  );
}
