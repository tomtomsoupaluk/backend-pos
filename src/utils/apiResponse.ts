import { Response } from "express";

interface SuccessResponse {
  success: boolean;
  status: number;
  message: string;
  data: any;
}

interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
  data: any;
}

export const successResponse = (
  res: Response,
  message: string,
  data: any
): void => {
  const response: SuccessResponse = {
    success: true,
    status: 200,
    message,
    data,
  };
  res.status(200).send(response);
};

export const errorResponse = (
  res: Response,
  message: string,
  status: number,
  data: any
): void => {
  const response: ErrorResponse = {
    success: false,
    status,
    message,
    data,
  };
  res.status(status).send(response);
};
