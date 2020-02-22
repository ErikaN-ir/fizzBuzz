describe("My fizzBuzz function", function() {
    beforeEach(function() {
        number = new fizzBuzz();
    });

    describe("Check number", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });
    });
});