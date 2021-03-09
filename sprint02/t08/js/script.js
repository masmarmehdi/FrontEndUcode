function checkBrackets(str){
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == ')'){
            str[i-1] == '(';
        }
        else if(str[i] == '('){
            return str.replace(i+1, ')');
        }
    }
    return str;
}
checkBrackets();