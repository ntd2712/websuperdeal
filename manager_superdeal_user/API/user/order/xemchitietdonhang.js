async function xemchitietdondathang() {
  try {
    const userID = localStorage.getItem("id");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const orderID = aray;
    console.log(userID);
    console.log(orderID);
    const response = await fetch(
      `http://localhost:3000/user/getall/chitietdonhang/${orderID}`
    );
    const data = await response.json();
    console.log(data);
    const tableBody = document.querySelector("table.table-nvqldh tbody");
    tableBody.innerHTML = "";
    data.forEach((order_detail) => {
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${order_detail.orderID}</td>
              <td>${order_detail.voucherID}</td>
              <td>${order_detail.nameVoucher}</td>
              <td style="padding-left:40px">${order_detail.quantity}</td>
              <td>${order_detail.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
              <td>${order_detail.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
              <td>${new Date(order_detail.startDate).toLocaleDateString('vi-VN')}</td>
              <td>${new Date(order_detail.endDate).toLocaleDateString('vi-VN')}</td>
              <td>${order_detail.statusVoucher}</td>
            `;
      console.log(row);
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
xemchitietdondathang();
