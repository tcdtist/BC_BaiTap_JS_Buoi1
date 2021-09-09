/**
 * Đầu vào (input)
 *  - luongNhanVien = 0
 *  - luongMotNgay: 100000
 *  - soNgayLam: 30
 * Xử lý
 *  - luongNhanVien = luongMotNgay * soNgayLam
 * Đầu ra (output)
 * - xuất lương
 */

function getEle(id) {
  return document.getElementById(id);
}

getEle("tinhEx1").addEventListener("click", () => {
  //Đầu vào
  var luongNhanVien = 0;
  var luongMotNgay = 100_000;
  var soNgayLam = parseFloat(getEle("soNgayLam").value);
  console.log(soNgayLam);

  //Kiểm tra đầu vào
  if (soNgayLam <= 0) return alert("Số ngày làm không được âm.");
  if (Number.isNaN(soNgayLam)) return alert("Số ngày làm không bỏ trống.");

  //Xử lý
  luongNhanVien = luongMotNgay * soNgayLam;

  var currentFormat = new Intl.NumberFormat("vn-VN");
  var moneyFormat = currentFormat.format(luongNhanVien);

  //Đầu ra
  console.log("Lương của nhân viên là: " + moneyFormat + " VND");
  getEle("kqEx1").style.display = "block";
  getEle("kqEx1").innerHTML = "Tổng tiền:     " + moneyFormat + " VND";
});
