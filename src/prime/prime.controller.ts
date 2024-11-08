import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/prime')
export class PrimeController {
    @Get(':number')
    isPrime(@Param('number') number: string): { isPrime: boolean } {
        const num = parseInt(number);
        const isPrime = this.checkPrime(num);
        return { isPrime };
    }

    private checkPrime(num: number): boolean {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
}
