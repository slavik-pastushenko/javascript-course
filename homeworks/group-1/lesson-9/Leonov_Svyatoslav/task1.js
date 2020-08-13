function ipChecker(str){
    arr = str.split('.');
    if(arr.length == 4){
        function is0or255_1(ipPart){
            return Number(ipPart) >= 0 && Number(ipPart) <= 255;
        }
        return is0or255_1(arr[0]) && is0or255_1(arr[1]) && is0or255_1(arr[2]) && is0or255_1(arr[3]);
    } else {
        return false;
    }
}
console.log(ipChecker("123.122.267.255"));
// solution without reg exps

function ipChecker1(str){
    arr = str.split('.');
    if(arr.length == 4){
        function is0or255_2(ipPart){
            return /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])$/.test(Number(ipPart));
        }
        return is0or255_2(arr[0]) && is0or255_2(arr[1]) && is0or255_2(arr[2]) && is0or255_2(arr[3]);
    } else {
        return false;
    }
}

console.log(ipChecker1("123.122.267.255"));