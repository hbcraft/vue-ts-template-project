interface ResponseCode {
  code: number | RegExp;
  type: 'success' | 'error' | 'info';
  isServerMessage?: boolean;
  message?: string;
}
