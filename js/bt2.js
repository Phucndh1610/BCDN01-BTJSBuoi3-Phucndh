/**
 * Khối 1: input
 * bố, mẹ, anh trai, em gái
 * 
 * Khối 2; xử lí
 * B1: khai báo biến vào lấy giá trị sau khi nhấn button
 * B2: lấy dữ liệu và in lời chào
 * - nếu input Bố 
 *      Say hi to Bố
 * - nếu input Mẹ 
 *      Say hi to Mẹ
 * - nếu input Anh trai 
 *      Say hi to Anh trai
 * - nếu input Em gái 
 *      Say hi to Em gái
 * 
 * Khối 3: output
 * Say hi tới ai 
 */

document.getElementById("btnHi").onclick = function () {
    var people = document.getElementById("selectPeople").value;
    switch (people) {
        case "B": {
            document.getElementById("txtHi").innerHTML = "Xin Chào Bố";
            break;
        }
        case "M": {
            document.getElementById("txtHi").innerHTML = "Xin chào Mẹ";
            break;
        }
        case "A": {
            document.getElementById("txtHi").innerHTML = "Xin chào Anh Trai";
            break;
        }
        case "E": {
            document.getElementById("txtHi").innerHTML = "Xin chào Em Gái";
            break;
        }
        default: {
            document.getElementById("txtHi").innerHTML = "Xin Chao Người Lạ";
        }
    }
}