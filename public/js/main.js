// Nhập giá trị cho biến a từ bàn phím và chuyển thành kiểu số
var a = parseFloat(prompt("Nhập giá trị cho a:"));

// Nhập giá trị cho biến b từ bàn phím và chuyển thành kiểu số
var b = parseFloat(prompt("Nhập giá trị cho b:"));

// Tính tổng hiệu tích thương
var tong = a + b
var hieu = a - b
var tich = a * b
var thuong = a /b
document.writeln("tổng = "+tong+" <br>");
document.writeln("hiệu = "+hieu+" <br>");
document.writeln("tích = "+tich+" <br>");
document.writeln("thương = "+thuong+" <br>");

// Nhập c gán c cho a và b
var c1 = a>b
var c2 = a<b
var c3 = a>=b
var c4 = a<=b

// In ra kết quả
document.writeln("kết quả a < b: "+c1+" <br>");
document.writeln("kết quả a > b: "+c2+" <br>");
document.writeln("kết quả a <= b: "+c3+" <br>");
document.writeln("kết quả a >= b: "+c4+" <br>");

