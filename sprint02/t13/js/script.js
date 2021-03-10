function Calculator() {
    this.result = 0
    return this;
}

Calculator.prototype.init = function(eq) {
    this.result = eq;
    return this;
}

Calculator.prototype.add = function(eq) {
    this.result += eq;
    return this;
}

Calculator.prototype.mul = function(eq) {
    this.result *= eq;
    return this;
}

Calculator.prototype.div = function(eq) {
    this.result /= eq;
    return this;
}

Calculator.prototype.sub = function(eeq) {
    this.result -= eq;
    return this;
}

Calculator.prototype.alert = function(eeq) {
    time = setTimeout(alert, 5000, this.result)
}
