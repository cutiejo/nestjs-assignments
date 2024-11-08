import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/factorial')
export class FactorialController {
    @Get(':number')
    getFactorial(@Param('number') number: string): { factorial: number } {
        const num = parseInt(number);
        const factorial = this.calculateFactorial(num);
        return { factorial };
    }

    private calculateFactorial(num: number): number {
        if (num < 0) return -1;
        return num === 0 ? 1 : num * this.calculateFactorial(num - 1);
    }
}
