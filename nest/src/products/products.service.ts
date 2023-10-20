import {
  Inject,
  Injectable,
  InternalServerErrorException,
  OnModuleInit,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ClientGrpc } from '@nestjs/microservices';
import { IProductServiceGrpc } from './interfaces/product';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProductsService implements OnModuleInit {
  private productServiceGrpc: IProductServiceGrpc;
  constructor(@Inject('PRODUCTS_PACKAGE') private clientGrpc: ClientGrpc) {}

  onModuleInit() {
    this.productServiceGrpc = this.clientGrpc.getService('ProductService');
  }

  async create(createProductDto: CreateProductDto) {
    return await lastValueFrom(
      this.productServiceGrpc.CreateProduct(createProductDto),
    );
  }

  async findAll() {
    try {
      return await lastValueFrom(this.productServiceGrpc.FindProducts({}));
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
