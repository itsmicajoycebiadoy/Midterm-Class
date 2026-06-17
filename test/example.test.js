import { test, expect, describe, it } from "vitest";
import { login } from "../src/example.js";

describe("Login", () => {
    

    it("should return success message if the email and password is correct", () => {
        const result = login("juandelacruz@email.com", "Str0ngp@ssword");
        expect(result).toMatch("Login Successful");
    });

    it("should throw an error if email do not have @", () => {
        expect(() => login("juandelacruzemail.com", "Str0ngp@ssword")).toThrow(
            "Invalid email"
        );
    });

    it("should throw an error if email do not have domain", () => {
        expect(() => login("juandelacruz@", "Str0ngp@ssword")).toThrow(
            "Invalid email"
        );
    });

    it("should throw an error if email is empty", () => {
        expect(() => login("", "Str0ngp@ssword")).toThrow(
            "Invalid email"
        );
    });

    it("should throw an error if email is null", () => {
        expect(() => login(null, "Str0ngp@ssword")).toThrow(
            "Invalid email"
        );
    });

    it("should throw an error if password is less than 8 characters", () => {
        expect(() => login("juandelacruz@email.com", "Short1!")).toThrow(
            "Weak Password"
        );
    });

    it("should throw an error if the password is empty", () => {
        expect(() => login("juandelacruz@email.com", "")).toThrow(
            "Weak Password"
        );
    });

    it("should throw an error if the password is null", () => {
        expect(() => login("juandelacruz@email.com", null)).toThrow(
            "Weak Password"
        );
    });

    it("should return warning message when email is incorrect", () => {
        const result = login("wrongemail@email.com", "Str0ngp@ssword");
        expect(result).toMatch("Incorrect email or password");
    });

    it("should return warning message when password is incorrect", () => {
        const result = login("juandelacruz@email.com", "Str0ngp@ssworD");
        expect(result).toEqual("Incorrect email or password");
    });

    it("should return warning message when both email and password are incorrect", () => {
        const result = login("wrongemail@email.com", "Str0ngp@ssworD");
        expect(result).toEqual("Incorrect email or password");
    });
});