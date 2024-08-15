import { bridgeEventEmitter } from '@/lib/event-emitter';
import { useUserInfo } from '@/services/queries/user.queries';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { WebviewWrapper } from './root.styles';

export default function Root() {
  const router = useNavigate();

  const { userInfo } = useUserInfo();

  useEffect(() => {
    const handleNativeMessage = (payload: string) => {
      console.log('Received message from native:', payload);
    };

    bridgeEventEmitter.on('nativeMessage', handleNativeMessage);

    return () => {
      bridgeEventEmitter.off('nativeMessage', handleNativeMessage);
    };
  }, []);

  if (!userInfo.isFetching && !userInfo.data?.email) {
    router('/auth');
  }

  return (
    <WebviewWrapper>
      <Outlet />
    </WebviewWrapper>
  );
}
