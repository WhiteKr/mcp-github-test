import { Person } from '../types/person';

/**
 * Greets a person by name
 * @param name The name of the person to greet
 * @returns A greeting message
 */
function greet(name: string): string {
    if (!name) {
        throw new Error('Name cannot be empty');
    }
    return `Hello, ${name}!`;
}

/**
 * Simulates fetching a person's data from an API
 * @param id The ID of the person to fetch
 * @returns A promise that resolves to a Person object
 */
async function fetchPerson(id: number): Promise<Person> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (id <= 0) {
        throw new Error('Invalid person ID');
    }
    
    return {
        name: "John",
        age: 30
    };
}

/**
 * Main function that runs the example
 */
async function main(): Promise<void> {
    try {
        // Basic variable with type inference
        const world = "World";
        console.log(greet(world));
        
        // Array example with explicit type
        const numbers: number[] = [1, 2, 3, 4, 5];
        console.log("Numbers:", numbers);
        
        // Async/await example with error handling
        console.log("Fetching person data...");
        const person = await fetchPerson(1);
        console.log("Person:", person);
        
        // Error handling example
        try {
            const invalidPerson = await fetchPerson(0);
            console.log("This won't be reached");
        } catch (error) {
            console.error("Error fetching invalid person:", error instanceof Error ? error.message : error);
        }
    } catch (error) {
        console.error("An error occurred:", error instanceof Error ? error.message : error);
    }
}

// Run the main function and handle any unhandled promise rejections
main().catch(error => {
    console.error("Unhandled error:", error instanceof Error ? error.message : error);
    process.exit(1);
});