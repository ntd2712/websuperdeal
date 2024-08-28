function hienTongSoItem() {
    const tongSoItem = localStorage.getItem("tongsl");
    if (tongSoItem) {
      document.getElementById("tongitem").innerHTML = tongSoItem;
    } else {
      document.getElementById("tongitem").innerHTML = 0;
    }
  }
  hienTongSoItem()