class DatabaseConnectionError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    Error.captureStackTrace(this, this.constructor);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default DatabaseConnectionError;
