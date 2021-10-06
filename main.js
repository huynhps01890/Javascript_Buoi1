/**
 * Bài 1 : Tính tiền lương nhân viên
 * Khối 1:
 * + Lương 1 ngày (luong)
 * + Số ngày công (songaycong)
 * Khối 2: 
 * +B1: Tạo biến 
 * +B2: Lấy giá trị từ UI người dùng nhập vào và gán giá trị cho biến
 * +B3: Tính lương
 * resultLuong = luong * songaycong;
 * +B4: Hiển thị ra kết quả
 * Khối 3:
 * + Tính tổng lương (resultLuong)
 */

function calSalary(){
    // Lấy giá trị
    var luong = document.getElementById("txtSalary").value;
    var songaycong = document.getElementById("txtSoNgayCong").value;
    console.log(luong,songaycong);
    // Tính lương
    var resultLuong = luong * songaycong;
    console.log(resultLuong);
    // Show kết quả
    document.getElementById("txtTinhLuong").innerHTML = "Kết quả : " + resultLuong + "đ"
}

document.getElementById("btnTinhLuong").onclick = calSalary;


/**
 * Bài 2: Tính trung bình
 * Khối 1:
 * + 5 số người dùng nhập vào (num1,num2,num3,num4,num5)
 * Khối 2:
 * +B1: Khai báo biến
 * +B2: Lấy giá trị từ UI người dùng nhập vào và gán giá trị cho biến
 * +B3: Tính kết quả trung bình
 * average = (num1+num2+num3+num4+num5) / 5
 * Khối 3:
 * + Kết quả trung bình của 5 số (average)
 */

function average5Num(){
    // Lấy gia trị
    var num1 = document.getElementById("txtNum1").value;
    var num2 = document.getElementById("txtNum2").value;
    var num3 = document.getElementById("txtNum3").value;
    var num4 = document.getElementById("txtNum4").value;
    var num5 = document.getElementById("txtNum5").value;
    console.log(num1,num2,num3,num4,num5);
    // Tính tổng và trung bình
    var average = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5))/5;
    console.log(average);
    // Show 
    document.getElementById("txtAverage").innerHTML = "KẾT QUẢ : " + average
}

document.getElementById("btnAverage").onclick = average5Num;


/**
 * Bài 3: Quy đổi tiền
 * Khối 1:
 * + Số $ người dùng nhập vào (sotien)
 * + Gía trị 1 đồng $ là 23500 (giatri)
 * Khối 2:
 * +B1: Khai báo biến
 * +B2: Lấy giá trị từ UI người dùng nhập vào và gán giá trị cho biến
 * +B3: Tính kết quả 
 * resultMoney = sotien * giatri;
 * Khối 3:
 * + Kết quả quy đổi tiền (resultMoney)
 */

function changeMoney(){
    const giatri = 23500;
    var sotien = document.getElementById("txtSoTien").value;
    console.log(giatri,sotien);
    // Tính kết quả
    var resultMoney = giatri * sotien;
    console.log(resultMoney);
    // Show
    document.getElementById("txtTinhTien").innerHTML = "Kết quả là : " + new Intl.NumberFormat('vn-VN').format(resultMoney) + "VNĐ";
}

document.getElementById("btnTinhTien").onclick = changeMoney;


/**
 * Bài 4 : Tính diện tích chu vi hình chữ nhật
 * Khối 1:
 * + Chiều dài (length)
 * + Chiều rộng (width)
 * Khối 2:
 * +B1: Khai báo biến
 * +B2: Lấy giá trị từ UI người dùng nhập vào và gán giá trị cho biến
 * +B3: Tính kết quả
 * dientich = length * width;
 * chuvi = (length + width) * 2;
 * Khối 3:
 * + Kết quả diện tích, chu vi
 */


function calDienTichChuVi(){
    var length = document.getElementById("txtLength").value;
    var width = document.getElementById("txtWidth").value;
    console.log(length,width);
    // Tính
    var dientich = length * width;
    var chuvi = ( Number(length) + Number(width)) * 2;
    console.log(dientich,chuvi);
    // Show
    document.getElementById("txtTinhKetQua").innerHTML = "Diện tích : " + dientich + " ; " + " Chu vi : " + chuvi;
}

document.getElementById("btnTinhKetQua").onclick = calDienTichChuVi;


/**
 * Bài 5 : Tính tổng 2 ký số
 * Khối 1:
 * + Người dùng nhập vào số có 2 ký số (num)
 * Khối 2:
 * +B1: Khai báo biến (ten,unit)
 * +B2: Lấy giá trị từ UI người dùng nhập vào và gán giá trị cho biến
 * +B3: Lấy giá trị hàng chục
 * ten = Math.floor(num/10);
 * +B4: Lấy giá trị hàng đơn vị
 * unit = num%10;
 * +B5: tính tổng
 * sum = ten + unit;
 * Khối 3:
 * + Tính tổng 2 ký số của số vừa nhập (sum)
 */


function calSum2Num(){
    var num = document.getElementById("txtNum").value;
    console.log(num);
    // Tính
    var ten = Math.floor(num/10); 
    var unit = num%10;
    console.log(ten,unit);
    var sum = ten + unit;
    console.log(sum);
    // Show
    document.getElementById("txtTinhTong").innerHTML = "Kết quả : " + sum;
}

document.getElementById("btnTinhTong").onclick = calSum2Num;
