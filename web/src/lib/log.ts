import { bridgeEventEmitter } from '@/lib/event-emitter';

type ConsoleMethod = 'log' | 'warn' | 'error';

const overrideConsole = () => {
  const originalConsole = { ...console };

  const createOverride = (method: ConsoleMethod) => {
    return (...args: unknown[]) => {
      originalConsole[method](...args);
      bridgeEventEmitter.sendToNative({
        type: 'Console',
        payload: JSON.stringify({ type: method, args }),
      });
    };
  };

  console.log = createOverride('log');
  console.warn = createOverride('warn');
  console.error = createOverride('error');
};

export default overrideConsole;
