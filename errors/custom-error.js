class CustomError extends Error {
  constructor(message) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
  //   abstract statusCode: number;
  //   constructor( message:string) {
  //     super(message);
  //     Object.setPrototypeOf(this, CustomError.prototype);
  //   }

  //   abstract serializeErrors(): { message: string; field?: string }[];
}

export default CustomError;
