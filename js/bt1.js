/**
 * Khối 1: input
 * a, b, c
 * 
 * Khối 2: Xử lí
 * B1: khai báo biến vào lấy giá trị sau khi nhấn button
 * B2: so sánh các số 
 * - nếu a < b && a < c && b < c 
 *      sắp xếp: a, b, c
 * - nếu a < b && a < c && b > c
 *      sắp xếp: a, c, b
 * - nếu a > b && a < c 
 *      sắp xếp: b, a, c
 * - nếu a > b && a > c && b < c
 *      sắp xếp: b, c, a 
 * - nếu a < b && a > c 
 *      sắp  xếp: c, a, b
 * - nếu a > b && a > c && b > c
 *      sắp xếp: c, b, a
 * - ngược lại (else)
 *      nhập lại số hợp lệ
 * 
 * Khối 3: output
 * Sắp sếp theo thứ tự tăng dần
 */

function funsort(){
    var a = parseInt(document.getElementById("inputNum1").value);
    var b = parseInt(document.getElementById("inputNum2").value);
    var c = parseInt(document.getElementById("inputNum3").value);

    if (a <= b && a <= c && b <= c) {
        document.getElementById("txtSoft").innerHTML = "sắp xếp theo thứ tự tăng dần: " + a +", " + b + ", " + c;
    } else if (a <= b && a <= c && b >= c) {
        document.getElementById("txtSoft").innerHTML = "sắp xếp theo thứ tự tăng dần: " + a +", " + c + ", " + b;
    } else if (a >= b && a <= c && b <= c) {
        document.getElementById("txtSoft").innerHTML = "sắp xếp theo thứ tự tăng dần: " + b +", " + a + ", " + c;
    } else if (a >= b && a >= c && b <= c) {
        document.getElementById("txtSoft").innerHTML = "sắp xếp theo thứ tự tăng dần: " + b +", " + c + ", " + a;
    } else if (a <= b && a >= c && b >= c) {
        document.getElementById("txtSoft").innerHTML = "sắp xếp theo thứ tự tăng dần: " + c +", " + a + ", " + b;
    } else if (a >= b && a >= c && b >= c) {
        document.getElementById("txtSoft").innerHTML = "sắp xếp theo thứ tự tăng dần: " + c +", " + b + ", " + a;
    } else {
        document.getElementById("txtSoft").innerHTML = "vui lòng nhập đủ 3 số!";
    }
}
document.getElementById("btnSoft").onclick = funsort;