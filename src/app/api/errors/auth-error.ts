import { CustomError } from "./custom-error";
export class AuthError extends CustomError {
  status: number = 401;
  constructor(public message: string = "Unauthrized access") {
    super(message);
  }

  renderError(): {
    message: string;
    status: number;
    field?: string | undefined;
  }[] {
    return [{ message: this.message, status: this.status, field: this.name }];
  }
}
