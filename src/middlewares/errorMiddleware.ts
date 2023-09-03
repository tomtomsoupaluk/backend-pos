import { Request, Response, NextFunction } from "express";

// Error handling middleware
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  // Default error response
  const errorResponse = {
    success: false,
    message: "Internal server error",
    error: err,
    data: {},
  };

  let errorCode = 500;

  // Customize the error response based on the error type
  if (err) {
    // Handle specific error types
    if (err.name === "ValidationError") {
      errorResponse.message = err.message;
      errorCode = 400;
    } else if (err.name === "UnauthorizedError") {
      errorResponse.message = "Unauthorized";
      errorCode = 401;
    } else if (err.name === "ForbiddenError") {
      errorResponse.message = "Forbidden";
      errorCode = 403;
    } else if (err.name === "NotFoundError") {
      errorResponse.message = err.message;
      errorCode = 404;
    } else if (err.name === "BadRequestError") {
      errorResponse.message = err.message;
      errorCode = 400;
    } else if (err.name === "MulterError") {
      errorResponse.message = err.message;
      errorCode = 400;
    } else if (err.name === "TokenExpiredError") {
      errorResponse.message = err.message;
      errorCode = 401;
    } else if (err.name === "JsonWebTokenError") {
      errorResponse.message = err.message;
      errorCode = 401;
    } else if (err.name === "SequelizeUniqueConstraintError") {
      errorResponse.message = err.message;
      errorCode = 400;
    }
  }

  // Send the error response
  res.status(errorCode).send(errorResponse);
};
