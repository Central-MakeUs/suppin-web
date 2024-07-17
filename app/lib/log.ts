export const INJECTED_JAVASCRIPT = `
(function() {
  var consoleLog = (type, args) => {
    window.ReactNativeWebView.postMessage(JSON.stringify({type: 'Console', data: {type, args}}));
  };

  var originalConsole = console;
  console = {
    log: (...args) => {
      consoleLog('log', args);
      originalConsole.log(...args);
    },
    warn: (...args) => {
      consoleLog('warn', args);
      originalConsole.warn(...args);
    },
    error: (...args) => {
      consoleLog('error', args);
      originalConsole.error(...args);
    }
  };

  window.onerror = function(message, source, lineno, colno, error) {
    consoleLog('error', [message, source, lineno, colno, error]);
    return true;
  };
})();
`;
