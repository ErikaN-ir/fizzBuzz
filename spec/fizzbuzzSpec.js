describe("My fizzBuzz function", function() {
    beforeEach(function() {
        number = new fizzBuzz();
    });

    describe("Check number", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("should return Fizz when called as fizzBuzz(6)", function() {
            var result = fizzBuzz(6)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called as fizzBuzz(20)", function() {
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });

        it("should return 47 when called as fizzBuzz(47)", function() {
            var result = fizzBuzz(47)
            expect(result).toBe(47);
        });

        it("should return Error when called as fizzBuzz('other')", function() {
            var result = fizzBuzz("other")
            expect(result).toBe("Error");
        });

    });


});