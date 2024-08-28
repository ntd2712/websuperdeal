async function hiendondathang(){
    try {
        const userID=localStorage.getItem("id");
        
        
        const response=await fetch(`http://localhost:3000/order/id/${userID}`);
        const data=await response.json();
        console.log(data);
        
        const tableBody = document.querySelector("table.table-nvqldh tbody");
        tableBody.innerHTML = "";
      
          data.forEach((orders) => {
            const row = document.createElement("tr");
            const dateOrder = new Date(orders.dateOrder);
            const formattedDate = dateOrder.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            });
            row.innerHTML = `
              <td>${orders.orderID}</td>
              <td>${formattedDate}</td>
              <td>${orders.amount}</td>
              <td>${orders.statusOrder}</td>
              <td><input id="chk_all" name="chk_all" type="checkbox" value="${orders.orderID}" /></td>
            `;
            console.log(row);
            tableBody.appendChild(row);
            //console.log(user.phone);
            // <td><img src="../backend/uploads/voucher/${voucher.voucherImageUrl}" width="50" height="50"/></td>
          });
    } catch (error) {
        console.log(error)
    }
}
async function clickCheckBoxDetailsOrder(){
  var array = [];
//lay cac checkbox duoc chon gan vao array
$("input:checkbox[name=chk_all]:checked").each(function () {
  array.push($(this).val());
});

window.location.href = "xemdonhangchitietKH.html?array=" + array;
}
async function huydon(){
  try {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Lặp qua từng checkbox và kiểm tra xem nó đã được chọn hay chưa
    var selectedRows = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        // Nếu checkbox đã được chọn, lấy mã đơn từ cột tương ứng và thêm vào mảng selectedRows
        var row = checkboxes[i].parentNode.parentNode;
        var maDon = row.querySelector("td:nth-child(1)").textContent;
        selectedRows.push(maDon);
      }
    }
    console.log(selectedRows);
  } catch (error) {
    console.log(error);
  }
}
hiendondathang()