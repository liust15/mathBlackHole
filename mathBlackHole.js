//得到最大值
function getMax(num) {
    let max = 0;
    let temp = num.sort(function (a, b) {
        return b - a;
    });
    max = temp.join("");
    return parseInt(max);
}
//得到最小值
function getMin(num) {
    let min = 0;
    let temp = num.sort(function (a, b) {
        return a - b;
    });
    min = temp.join("");
    return parseInt(min);
}
function mathBlackHole(num, temp2) {
    let shuzu = num.toString().split('')
    let temp = getMax(shuzu) - getMin(shuzu);
    if (temp==temp2) {
        console.log("数学黑洞为"+temp)
    } else {
        console.log(temp);
        mathBlackHole(temp, temp);
    }
}
let num = "983"
mathBlackHole(num, 0)

