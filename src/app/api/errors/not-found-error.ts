import { CustomError } from "./custom-error";
export class NotFoundError extends CustomError {
  status: number = 404;
  constructor(public message: string = "Not found") {
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
