export type WebViewMessage = {
  type: string;
  payload: string;
};

export interface WebViewConsoleMessage extends WebViewMessage {
  type: "Console";
  payload: string;
}
