function dailyTemperatures(temperatures: number[]): number[] {

    const result: number[] = new Array(temperatures.length).fill(0);

    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        const temp = temperatures[i];

        while (stack.length > 0 && temp > temperatures[stack[stack.length - 1]]) {
            const prevDay = stack.pop()!;
            result[prevDay] = i - prevDay;
        }
        stack.push(i);
    }

    return result;
}



