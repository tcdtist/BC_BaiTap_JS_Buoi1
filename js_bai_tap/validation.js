function getEle(id) {
  return document.getElementById(id);
}

function getEleParseNumber(id) {
  return Number(document.getElementById(id).value);
}

function getDataByUnit(unit) {
  //Khai báo biến
  var value = 1;
  var idThongBao = "";
  var idKetQua = "";
  var idKetQua2 = "";

  //Xử lý
  switch (unit) {
    case 1:
      value = getEleParseNumber("soNgayLam");
      idThongBao = "txtThongBaoEx1";
      idKetQua = "tinhEx1";
      break;
    case 2.1:
      value = getEleParseNumber("soThuc1");
      idThongBao = "txtThongBaoEx2_1";
      idKetQua = "tinhEx2";
      break;
    case 2.2:
      value = getEleParseNumber("soThuc2");
      idThongBao = "txtThongBaoEx2_2";
      idKetQua = "tinhEx2";
      break;
    case 2.3:
      value = getEleParseNumber("soThuc3");
      idThongBao = "txtThongBaoEx2_3";
      idKetQua = "tinhEx2";
      break;
    case 2.4:
      value = getEleParseNumber("soThuc4");
      idThongBao = "txtThongBaoEx2_4";
      idKetQua = "tinhEx2";
      break;
    case 2.5:
      value = getEleParseNumber("soThuc5");
      idThongBao = "txtThongBaoEx2_5";
      idKetQua = "tinhEx2";
      break;
    case 3:
      value = getEleParseNumber("soTienCanDoi");
      idThongBao = "txtThongBaoEx3";
      idKetQua = "tinhEx3";
      break;
    case 4.1:
      value = getEleParseNumber("chieuDai");
      idThongBao = "txtThongBaoEx4_1";
      idKetQua = "tinhEx4_cv";
      idKetQua2 = "tinhEx4_dt";
      break;
    case 4.2:
      value = getEleParseNumber("chieuRong");
      idThongBao = "txtThongBaoEx4_2";
      idKetQua = "tinhEx4_cv";
      idKetQua2 = "tinhEx4_dt";
      break;
    case 5:
      value = getEleParseNumber("soNhap_5");
      idThongBao = "txtThongBaoEx5";
      idKetQua = "tinhEx5";
      break;

    default:
      break;
  }
  return { value, idThongBao, idKetQua, idKetQua2 };
}

const handleChange = function (unit) {
  //Lấy giá trị
  var { value, idThongBao, idKetQua, idKetQua2 } = getDataByUnit(unit);

  if (unit === 5 && (10 > value || value >= 100)) {
    getEle(idThongBao).innerHTML = "(*) Số nhập phải là số có hai chữ số !";
    getEle(idThongBao).className = "form-text text-danger";
    getEle(idKetQua).disabled = true;
  } else if (isNaN(value)) {
    getEle(idThongBao).innerHTML = "(*) Vui lòng nhập số thay vì ký tự !";
    getEle(idThongBao).className = "form-text text-danger";
    getEle(idKetQua).disabled = true;
    idKetQua2 && (getEle(idKetQua2).disabled = true);
  } else {
    getEle(idThongBao).innerHTML = "";
    getEle(idKetQua).disabled = false;
    idKetQua2 && (getEle(idKetQua2).disabled = false);
  }
};
