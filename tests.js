// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function(){
    it(' should be defined as a function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return string "Hello, Pat!" when executed', function(){
        expect(sayHello()).toBe( "Hello, Pat!");
    });
});
describe ('isFive', function(){
    it('should be defined as a function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('Function only return a Boolean no matter input', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return 5 true', function(){
        expect(isFive(5)).toBe(true)
    })
    it ('should return "5" as true', function(){
        expect(isFive("5")).toBe(true)
    })
});
describe ('isEven', function() {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe('function')
    })
    it('returns a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean')
    })
    it('returns true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true)
    })
    it('returns true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true)
    })
    it('returns false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false)
    })
    it('returns false when called with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false)
    })
    it('returns true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true)
    })
    it('returns false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false)
    })
    it('return false when called with a boolean input like isEven(true) or isEven(false)', function () {
        expect(isEven(true)).toBe(false)
    })
    it('returns false when called without an argument like isEven()', function () {
        expect(isEven()).toBe(false)
    })
})
describe ('isVowel', function() {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe('function')
    })
    it('isVowel always returns a boolean', function () {
        expect(typeof isVowel()).toBe('boolean')
    })
    it('isVowel("a") returns true', function () {
        expect(isVowel("a")).toBe(true)
    })
    it('isVowel("A") returns true', function () {
        expect(isVowel("A")).toBe(true)
    })
    it('isVowel("y") returns false', function () {
        expect(isVowel("y")).toBe(false)
    })
    it('isVowel(4) returns false', function () {
        expect(isVowel(4)).toBe(false)
    })
    it('isVowel(true) or isVowel(false) both return false', function () {
        expect(isVowel(true)).toBe(false)
    })
    it('isVowel("banana") returns false', function () {
        expect(isVowel("banana")).toBe(false)
    })
    it('isVowel() returns false', function () {
        expect(isVowel()).toBe(false)
    })
    it('isVowel(e) returns true', function () {
        expect(isVowel("e")).toBe(true)
    })
})
describe('add', function(){
            it('should be described as a function', function(){
                expect(typeof add).toBe('function')
            })
            it('add(2, 3) returns 5', function(){
                expect(add(2, 3)).toBe(5)
            })
            it('add(-3, -9) returns -12', function(){
                expect(add(-3, -9)).toBe(-12)
            })
            it('add("5", 6) returns 11', function(){
                expect(add("5", 6)).toBe(11)
            })
            it('add("-4", "10") returns 6', function(){
                expect(add("-4", "10")).toBe(6)
            })
            it('add("banana", "split") returns NaN', function(){
                expect( add("banana", "split")).toBeNaN()
            })
            it('add(2, "apples") returns NaN', function(){
                expect( add(2, "apples")).toBeNaN()
            })
            it('add() returns NaN', function(){
                expect(add()).toBeNaN()
            })
    })