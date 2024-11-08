import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { PrimeController } from './prime/prime.controller';

@Module({
  imports: [],
  controllers: [AppController, FibonacciController, PrimeController],
  providers: [AppService],
})
export class AppModule {}
