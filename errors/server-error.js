class ServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default ServerError;
