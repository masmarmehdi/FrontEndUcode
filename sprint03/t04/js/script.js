let houseMixin = HouseBuilder.prototype = {
    wordReplace(str1,str2){
        this.description =  this.description.replace(str1,str2);
    },
    wordInsertAfter(str1, str2) {
        let len = this.description.indexOf(str1) + str1.length;
        this.description = `${this.description.slice(0, len)} ${str2}${this.description.slice(len)}`;
    },
    wordDelete(str){
        let lengthBeforeWord = this.description.indexOf(str);
        let lengthAfterWord = str.length + this.description.indexOf(str);
        this.description =`${this.description.slice(0, lengthBeforeWord)}${this.description.slice(lengthAfterWord)}`;
    },
    wordEncrypt() {
        let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let index = function(x){
            return input.indexOf(x);
        }
        let translate = function(x){
            if(index(x) > -1){
                return output[index(x)];
            }else{
                return x;
            }
        }
        this.description = `${this.description.split('').map(translate).join('')}`;
    },
    wordDecrypt() {
        let input = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let index = function(x){
            return input.indexOf(x);
        }
        let translate = function(x){
            if(index(x) > -1){
                return output[index(x)];
            }else{
                return x;
            }
        }
        this.description = `${this.description.split('').map(translate).join('')}`;
    }
}


