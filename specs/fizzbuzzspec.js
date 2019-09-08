describe("fizzbuzz", function(){
    describe("number used",function(){
        it("should exist", function(){
            expect(fizzbuzz).toBeDefined();
        });
        it("should return FizzBuzz if the number is divisible by 3 and 5", function(){
            var result = fizzbuzz(15)
            expect(result).toBe( "FizzBuzz");
        });
        it("should return Fizz if the number is divisible by 3", function(){
            var result = fizzbuzz(6)
            expect(result).toBe( "Fizz");
        })
        it("should return Buzz if the number is divisible by 5", function(){
            var result = fizzbuzz(50)
            expect(result).toBe( "Buzz");
        });
        it("should return number if not divisible by 3 or 5", function() {
            var result = fizzbuzz(1)
            expect(result).toBe(1)
        });
        
    });
});
