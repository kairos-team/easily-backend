import { Response } from "express";

export default class ApiResponseHandler {
  static success(res: Response, data: any, status = 200) {
    return res.status(status).json({
      status: "success",
      data
    })
  }

  static error(
    res: Response,
    error: any,
    message = "Internal server error",
    status = 500
  ) {
    console.error(error);

    return res.status(status).json({
      status: "error",
      message,
      details: error instanceof Error ? error.message : error
    })
  }
}