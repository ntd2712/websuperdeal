async function hienvoucher(){
  try {
      const userID = localStorage.getItem("id");
      const response = await fetch(`http://localhost:3000/admin/voucher/getid/${userID}`);
      const data = await response.json();
      console.log(data);
      
      // Lặp qua từng voucher và kiểm tra trạng thái
      data.forEach(async (voucher) => {
          const startDate = new Date(voucher.startDate);
          const endDate = new Date(voucher.endDate);
          const currentDate = new Date();

          // Kiểm tra nếu ngày hiện tại lớn hơn ngày kết thúc
          if (currentDate > endDate) {
              // Cập nhật trạng thái voucher
              await fetch(`http://localhost:3000/user/voucher/updateStatusVoucher`, {
                  method: 'PUT',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      voucherID: voucher.voucherID,
                      statusvoucher: 'Hết hạn sử dụng'
                  })
              });
              voucher.statusvoucher = 'Hết hạn sử dụng';
          }
      });

      const tableBody = document.querySelector("table.table-nvqldh tbody");
      tableBody.innerHTML = "";
      data.forEach((voucher) => {
        if (voucher.statusvoucher !== "Hết hạn sử dụng") {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${voucher.voucherID}</td>
            <td>${voucher.nameVoucher}</td>
            <td>${voucher.nameVoucherCategory}</td>
            <td>${voucher.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            <td>${voucher.percent*100}</td>
            <td>${voucher.promotionalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            <td>${voucher.quantity}</td>
            <td>${voucher.rating}</td>
            <td>${new Date(voucher.startDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
            <td>${new Date(voucher.endDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
            <td>${voucher.statusvoucher}</td>
            
            <td><input id="chk_all" name="chk_all" type="checkbox" value="${voucher.voucherID}" /></td>
          `;
          console.log(row);
          tableBody.appendChild(row);
        }
      });
  } catch (error) {
      console.log(error);
  }
}
async function clickCheckBoxDetailsVoucher(){
    var array = [];
  //lay cac checkbox duoc chon gan vao array
  $("input:checkbox[name=chk_all]:checked").each(function () {
    array.push($(this).val());
  });

  window.location.href = "chitietvoucher.html?array=" + array;
}
async function clickCheckboxThemBaiViet(){
    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
      array.push($(this).val());
    });
  
    window.location.href = "thembaiviet.html?array=" + array;
}
async function clickCheckboxSuaVoucher(){
  var array = [];
  //lay cac checkbox duoc chon gan vao array
  $("input:checkbox[name=chk_all]:checked").each(function () {
    array.push($(this).val());
  });

  window.location.href = "suavoucher.html?array=" + array;
}
// async function thembaiviet(){
//     window.location.href="thembaiviet.html";
// }
hienvoucher();