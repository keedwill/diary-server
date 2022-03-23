class NotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default NotFound;
