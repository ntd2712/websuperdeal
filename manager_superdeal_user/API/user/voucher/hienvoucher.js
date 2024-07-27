async function hienvoucher(){
    try {
        const userID=localStorage.getItem("id");
    const response=await fetch(`http://localhost:3000/admin/voucher/getid/${userID}`);
    const data = await response.json();
    console.log(data);
    const tableBody = document.querySelector("table.table-nvqldh tbody");
      tableBody.innerHTML = "";
          data.forEach((voucher) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${voucher.voucherID}</td>
              <td>${voucher.nameVoucher}</td>
              <td>${voucher.nameVoucherCategory}</td>
              <td>${voucher.price}</td>
              <td>${voucher.percent}</td>
              <td>${voucher.promotionalPrice}</td>
              <td>${voucher.quantity}</td>
              <td>${voucher.rating}</td>
              <td>${voucher.startDate}</td>
              <td>${voucher.endDate}</td>
              <td>${voucher.statusvoucher}</td>
              
              <td><input id="chk_all" name="chk_all" type="checkbox" value="${voucher.voucherID}" /></td>
            `;
            console.log(row);
            tableBody.appendChild(row);
            //console.log(user.phone);
            // <td><img src="../backend/uploads/voucher/${voucher.voucherImageUrl}" width="50" height="50"/></td>
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
// async function thembaiviet(){
//     window.location.href="thembaiviet.html";
// }
hienvoucher();