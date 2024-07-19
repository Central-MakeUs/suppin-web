export const INJECTED_JAVASCRIPT = `
        (function() {
          function sendToRN(type, args) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              type: 'Console',
              payload: JSON.stringify({ type, args })
            }));
          }
          console.log = (...args) => sendToRN('log', args);
          console.warn = (...args) => sendToRN('warn', args);
          console.error = (...args) => sendToRN('error', args);
        })();
      `;
