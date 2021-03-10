describe("checkBrackets",function(){
    it(")",function(){
      assert.equal(checkBrackets(')'), 1);
    })
    it("1)()(())2(()", function() {
      assert.equal(checkBrackets('1)()(())2(()'), 2);
    });
    it("NaN", function() {
      assert.equal(checkBrackets(NaN), -1);
    });
    it("h()((((h'",function(){
      assert.equal(checkBrackets('h()((((h'), 4);
    })
    it("((((((22))(2)(2(22(((14())))))hh",function(){
      assert.equal(checkBrackets('((((((22))(2)(2(22(((14())))))hh'), 4);
    })
    it("9092(!(#@(#@#@$%$%))))())))))))*)*((((((())))()((())",function(){
      assert.equal(checkBrackets('9092(!(#@(#@#@$%$%))))())))))))*)*((((((())))()((())'), 13);
    })
    it("))PHP((()(D)PressF()((())",function(){
      assert.equal(checkBrackets('))PHP((()(D)PressF()((())'), 5);
    })
    it("))kdsaakjhP((()(D)efrwgrvw(((PressF()((())",function(){
      assert.equal(checkBrackets('))PHP((()(D)PressF()((())'), 5);
    })
    it("PressF()((Oracle UCODE)(((##))@(())",function(){
      assert.equal(checkBrackets('))PHP((()(D)PressF()((Oracle)(((##))@(())'), 6);
    })
    it("hellowsusposdvdk daoieo    )) _) _) _\ndvvhhb",function(){
      assert.equal(checkBrackets('"hellowsusposdvdk daoieo    )) _) _) _\ndvvhhb"'), 4);
    })
    it("hh9832830fdfbgvfsbafdb((@%^#%)4()$e4940()",function(){
      assert.equal(checkBrackets('hh9832830fdfbgvfsbafdb((@%^#%)4()$e4940()'), 10);
    })
    it("hh98328qegfDvsdds304()$e4940()",function(){
      assert.equal(checkBrackets('hh'), 1);
    })
    it("hh9832830fdfbgvfsbafdb((@%^#%)4()$e4940()",function(){
      assert.equal(checkBrackets('hh9832830fdfbgvfsbafdb((@%^#%)4()$e4940()'), 111);
    })
    it("hh98328qegfDvsdds304()$e4940()",function(){
      assert.equal(checkBrackets('hh98328qegfDvsdds304()$e4940()'), 1);
    })
    it("))))",function(){
      assert.equal(checkBrackets('))))'), 1);
    })
});
                       