import { test, expect, describe, it } from "vitest";
import { isValidatePassword, gradeCalculator } from "../src/main.js";

describe("Password Validation", () => {

    it("should return true when the length of the input is greater than or equal to 8", () => {
      //Arrange
        const password = "12345678A";
      //Act 
        const result = isValidatePassword(password);
      //Assert
        expect(result).toBe(true);
    });

    it("should return false when the length of the input is less than 8", () => {
      //Arrange
        const password = "1234567";
      //Act
        const result = isValidatePassword(password);
      //Assert
        expect(result).toBe(false);
    });

    it("should return false when there is no input", () => {
      //Arrange
        const password = "";
      //Act
        const result = isValidatePassword(password);
      //Assert
        expect(result).toBe(false);
    });

    it("should return true when the input contains uppercase letters", () => {
      //Arrange
        const password = "12345678A";
      //Act
        const result = isValidatePassword(password);
      //Assert
        expect(result).toBe(true);
    });

    it("should return false when the input does not have uppercase letters", () => {
      //Arrange
        const password = "12345678";
      //Act
        const result = isValidatePassword(password);
      //Assert
        expect(result).toBe(false);
    });

});

describe("gradeCalculator", () => {
    it ("should return 1.00 when the total grade is between 98 and 100", () => {
      //arrange
      const prelim = 25;
      const midterm =25;
      const finals = 25;
      const lab = 25;

      const grade = prelim + midterm + finals + lab;
    
      //act
      const result = gradeCalculator(prelim, midterm, finals, lab);

      //assert
      expect(result).toBe("1.00");
    });

    it ("should return 5.00 when the total grade is below 70", () => {
      //arrange
      const prelim = 15;
      const midterm =15;
      const finals = 15;
      const lab = 15;

      const grade = prelim + midterm + finals + lab;
    
      //act
      const result = gradeCalculator(prelim, midterm, finals, lab);

      //assert
      expect(result).toBe("5.00");
    });

    it ("should return 3.00 when the total grade is between 75 and 77", () => {
      //arrange
      const prelim = 15;
      const midterm = 10;
      const finals = 25;
      const lab = 25;

      const grade = prelim + midterm + finals + lab;
    
      //act
      const result = gradeCalculator(prelim, midterm, finals, lab);

      //assert
      expect(result).toBe("3.00");
    });

    it ("should return INC when one grade is undefined", () => {
      //arrange
      const prelim = 25;
      const midterm = undefined;
      const finals = 25;
      const lab = 25;

      const grade = prelim + midterm + finals + lab;
    
      //act
      const result = gradeCalculator(prelim, midterm, finals, lab);

      //assert
      expect(result).toBe("INC");
    });

});