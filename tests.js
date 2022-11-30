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
describe ('isEven', function(){
    it('should be defined as a function', function() {
        expect(typeof isEven).toBe('function')
    })
    it('returns a boolean no matter the input', function(){
        expect(typeof isEven()).toBe('boolean')
    })
    it('returns true when executed with isEven(2)', function(){
        expect(isEven(2)).toBe(true)
    })
    it('returns true when executed with isEven(-4)', function(){
        expect(isEven(-4)).toBe(true)
    })
    it('returns false when executed with isEven(3)', function(){
        expect(isEven(3)).toBe(false)
    })
    it('returns false when called with isEven("banana")', function(){
        expect(isEven("banana")).toBe(false)
    })
    it('returns true when called with isEven("8")',function(){
        expect(isEven("8")).toBe(true)
    })
    it('returns false when called with isEven(Infinity)', function(){
        expect(isEven(Infinity)).toBe(false)
    })
    it('return false when called with a boolean input like isEven(true) or isEven(false)', function(){
        expect(isEven(true)).toBe(false)
    })
    it('returns false when called without an argument like isEven()', function(){
        expect(isEven()).toBe(false)
    })
    describe ('isVowel', function(){
        it('should be defined as a function', function(){
            expect(typeof isVowel).toBe('function')
        })
        it('isVowel always returns a boolean', function(){
            expect(typeof isVowel()).toBe('boolean')
        })
        it('isVowel("a") returns true', function(){
            expect(isVowel("a")).toBe(true)
        })
        it('isVowel("A") returns true', function(){
            expect(isVowel("A")).toBe(true)
        })
        it('isVowel("y") returns false', function(){

        })
    })
    })