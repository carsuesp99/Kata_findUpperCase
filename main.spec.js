const { it, expect } = require("@jest/globals");
const UpperCaseFinder = require('./main');

describe("find the upperCase index", function(){
    it("should return empty if input is empty", function(){
        const upperCaseFinder = new UpperCaseFinder();
        const result = upperCaseFinder.findUpperCaseChars("");
        expect(result).toEqual([]);
    })

    it("should return index of upperCase", function(){
        const upperCaseFinder = new UpperCaseFinder();
        expect(upperCaseFinder.findUpperCaseChars("Kata")).toEqual([0]);
        expect(upperCaseFinder.findUpperCaseChars("kAta")).toEqual([1]);
        expect(upperCaseFinder.findUpperCaseChars("KAta")).toEqual([0,1]);
        expect(upperCaseFinder.findUpperCaseChars("KatA")).toEqual([0,3]);
    })
})
