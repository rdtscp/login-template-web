interface IBackendResponse {
  error: boolean;
  warning: boolean;
  content: any;
}

interface IDevice {
  authToken:  string;
  createdAt:  number;
  id:         number;
  ip:         string;
  lastUsed:   number;
  userAgent:  string;
}

export { IBackendResponse, IDevice };