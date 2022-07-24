// Making An Asyn Wrapper Function To Refactor Our Code And Prevent Writing Same Code Again And Again....
import { Request, Response, NextFunction } from "express";

const asyncWrapper = (func: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncWrapper;
