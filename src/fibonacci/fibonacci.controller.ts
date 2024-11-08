import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/fibonacci')
export class FibonacciController {
    @Get(':n')
    getFibonacci(@Param('n') n: string): { sequence: number[] } {
        const num = parseInt(n);
        const sequence = this.generateFibonacci(num);
        return { sequence };
    }

    private generateFibonacci(n: number): number[] {
        const sequence = [];
        let a = 0, b = 1;
        for (let i = 0; i < n; i++) {
            sequence.push(a);
            [a, b] = [b, a + b];
        }
        return sequence;
    }
}
