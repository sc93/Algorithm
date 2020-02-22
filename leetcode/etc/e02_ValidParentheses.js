
var isValid = function(s) {
    if(s.length == 0) return true;
    console.log(s.length%2)
    if(s.length%2) return false;
    var arr = [];
    var reg = /\{|\}|\[|\]|\(|\)/
    for(var ss of s) {
        if(!reg.test(ss)) return false;
        arr.push(ss);
    } 
    var closeReg = /\}|\]|\)/
    var tmp_arr = [];
    var obj = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    while(arr.length != 0) {
        var str = arr.pop();
        if(closeReg.test(str)) {
            tmp_arr.push(str);
        } else {
            if(obj[str] !== tmp_arr.pop()) {
                return false;
            }
        }
    }
    
    return true;
};
// console.log(isValid('()[]{}'))
// console.log(isValid('()[]{} '))
console.log(isValid(']'))