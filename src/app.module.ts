import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { PrimeController } from './prime/prime.controller';
import { FactorialController } from './factorial/factorial.controller';

@Module({
  imports: [],
  controllers: [AppController, FibonacciController, PrimeController, FactorialController],
  providers: [AppService],
})
export class AppModule {}
