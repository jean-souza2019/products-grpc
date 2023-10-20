import { Observable } from 'rxjs';
import { Product } from '../entities/product.entity';

export interface IProductServiceGrpc {
  CreateProduct: (
    data: ICreateProductRequest,
  ) => Observable<ICreateProductResponse>;
  FindProducts: (IFindProductRequest) => Observable<IFindAllProductsResponse>;
}

export interface ICreateProductRequest {
  name: string;
  description: string;
  price: number;
}

export interface IFindProductRequest {}

export interface ICreateProductResponse {
  product: Product;
}

export interface IFindAllProductsResponse {
  products: Product[];
}
