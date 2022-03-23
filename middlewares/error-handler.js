const errorHandler = (err, req, res, next) => {
  console.log("err");
  if (err instanceof Error) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // console.error(err);
  

   res.status(400).send({
    errors: [{ message: "Something Went Wrong" }],
  });
};

export default errorHandler;
