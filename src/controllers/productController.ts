import { Request, Response, NextFunction } from "express";
import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
} from "../services/productService";

import { successResponse } from "../utils/apiResponse";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getAllProductsService();
    return successResponse(res, "Products fetched successfully", products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    return successResponse(res, "Product fetched successfully", product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await createProductService(req.body);
    return successResponse(res, "Product created successfully", product);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await updateProductService(id, req.body);
    return successResponse(res, "Product updated successfully", product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const product = await deleteProductService(id);
    return successResponse(res, "Product deleted successfully", product);
  } catch (error) {
    next(error);
  }
};
