/**
 * A simple TypeScript example that demonstrates basic syntax and types
 */

// Function to greet with type annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Main function that runs the example
function main(): void {
    // Basic variable with type inference
    const world = "World";
    
    // Call the greet function and print the result
    console.log(greet(world));
    
    // Array example with explicit type
    const numbers: number[] = [1, 2, 3, 4, 5];
    console.log("Numbers:", numbers);
    
    // Object type example
    interface Person {
        name: string;
        age: number;
    }
    
    const person: Person = {
        name: "John",
        age: 30
    };
    console.log("Person:", person);
}

// Run the main function
main();