describe("checkBrackets",function(){
    it("1)()(())2(()", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("NaN", function() {
      assert.equal(checkBrackets(NaN), -1);
    });
});
