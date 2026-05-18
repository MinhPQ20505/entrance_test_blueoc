function sum_of_top_two_integers(numbers) {
    // Input 
    const input = numbers;
    
    // Array for top 1 and 2 integers
    const topTwo = [];
    
    // Sort array and push top 2 integers
    const sorted = input.sort((a, b) => b - a);
    topTwo.push(sorted[0], sorted[1]);
    
    const result = topTwo[0] + topTwo[1];
    
    return result;
}

// Test case
const input = [1, 4, 2, 3, 5];
const output = sum_of_top_two_integers(input);
console.log(output);
