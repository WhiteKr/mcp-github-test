import { Person } from '../types/person';

// Mock the setTimeout to speed up tests
jest.useFakeTimers();

// Import functions to test
const example = require('./hello-world');

describe('Hello World Example', () => {
    describe('greet', () => {
        it('should return correct greeting message', () => {
            const result = example.greet('World');
            expect(result).toBe('Hello, World!');
        });

        it('should throw error for empty name', () => {
            expect(() => example.greet('')).toThrow('Name cannot be empty');
        });
    });

    describe('fetchPerson', () => {
        it('should return a person object for valid ID', async () => {
            const promise = example.fetchPerson(1);
            jest.runAllTimers();
            
            const person = await promise;
            expect(person).toMatchObject({
                name: expect.any(String),
                age: expect.any(Number)
            });
        });

        it('should throw error for invalid ID', async () => {
            const promise = example.fetchPerson(0);
            jest.runAllTimers();
            
            await expect(promise).rejects.toThrow('Invalid person ID');
        });
    });
});