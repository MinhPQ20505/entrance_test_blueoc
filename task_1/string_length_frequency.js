

function string_length_frequency(strings) {
    // Input
    const input = strings;
    
    //store results
    const result = [];
    
    // Count the frequency of each string length
    const lengthFrequency = {};
    for (let str of input) {
        const length = str.length;
        lengthFrequency[length] = (lengthFrequency[length] || 0) + 1;
    }
    
    // Find the most frequent length
    let maxFrequency = 0;
    let mostFrequentLength = 0;
    for (let length in lengthFrequency) {
        if (lengthFrequency[length] > maxFrequency) {
            maxFrequency = lengthFrequency[length];
            mostFrequentLength = parseInt(length);
        }
    }
    
    // Collect all strings with the most frequent length
    for (let str of input) {
        if (str.length === mostFrequentLength) {
            result.push(str);
        }
    }
    
    return result;
}

// Test case
const input = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
const output = string_length_frequency(input);
console.log(output); // Output: ['ab', 'cd', 'gh']