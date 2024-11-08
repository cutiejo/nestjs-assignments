import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciController } from './fibonacci/fibonacci.controller';

@Module({
  imports: [],
  controllers: [AppController, FibonacciController],
  providers: [AppService],
})
export class AppModule {}
