import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCTS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'go:50051',
          package: 'github.com.codeedu.codepix',
          protoPath: join(__dirname, 'proto', 'product.proto'),
        },
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
