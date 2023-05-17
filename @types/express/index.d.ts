export {};

interface UserPayload {
  email: string;
  id: string;
}

declare global {
  namespace Express {
    export interface Request {
      user?: UserPayload;
    }
  }
}
