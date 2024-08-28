async function luugiohang() {
  try {
    const userID = localStorage.getItem("id");
    const dateOrder = new Date().toISOString().slice(0, 10);
    const amount = document.getElementById("total").innerHTML;
    const statusOrder = "Đang xử lý";
    const orderID = Math.floor(1000 + Math.random() * 9000);
    console.log(dateOrder);
    console.log(statusOrder);
    console.log(amount);
    console.log(userID);
    console.log(orderID);
    const response = await fetch(`http://localhost:3000/order/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID,
        userID,
        dateOrder,
        amount,
        statusOrder,
      }),
    });
    const data = await response.json();
    if (typeof Storage != "undefined") {
      localStorage.setItem("idorder", data.orderID);
      
    }
    //console.log(data);
    return data.orderID;
  } catch (error) {
    console.log(error);
  }
}
async function luuchitietdonhang() {
  try {
    const orderID = await luugiohang();
    const tableBody = document.querySelector("table.table-nvqldh tbody");
    const rows = tableBody.rows;
    console.log(orderID);
   
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const voucherID = row.querySelector("#idvoucher").textContent;
    const quantity = row.querySelector("#number").textContent;
    const price = row.querySelector("#promoitem").textContent.trim();
    const total = row.querySelector("#totalitem").textContent.trim();
    console.log(price);// no phai la 1200000 moi dung
    // console.log(voucherID);
    console.log(quantity);

    const response = await fetch(`http://localhost:3000/user/add/chitietdonhang`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID,
        voucherID,
        quantity,
        price,
        total
      }),
    });
    const data = await response.json();
    console.log(data);
    
  }
  } catch (error) {
    console.log(error);
  }
}
