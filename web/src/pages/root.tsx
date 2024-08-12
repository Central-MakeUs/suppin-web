import { bridgeEventEmitter } from '@/lib/event-emitter';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { WebviewWrapper } from './root.styles';

export default function Root() {
  const router = useNavigate();

  useEffect(() => {
    const handleNativeMessage = (payload: string) => {
      console.log('Received message from native:', payload);
    };

    bridgeEventEmitter.on('nativeMessage', handleNativeMessage);

    return () => {
      bridgeEventEmitter.off('nativeMessage', handleNativeMessage);
    };
  }, []);

  const accessToken = window.localStorage.getItem('token');

  useEffect(() => {
    if (!accessToken) {
      router('/auth');
    }
  }, [accessToken]);

  return (
    <WebviewWrapper>
      <Outlet />
    </WebviewWrapper>
  );
}
