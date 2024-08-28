async function hiengiohang() {
    try {
      const newquantity = localStorage.getItem("new_quantity");
      console.log(localStorage.getItem("new_quantity"));
      const cartID = localStorage.getItem("idcart");
      const response = await fetch(`http://localhost:3000/cart/all/id/${cartID}`);
      const data = await response.json();
      console.log(data);
      const tableBody = document.querySelector("table.table-nvqldh tbody");
      tableBody.innerHTML = "";
  
      const promises = data.map(async (element) => {
        const response2 = await fetch(`http://localhost:3000/admin/voucher/getidvoucherdetails/${element.code_voucher}`);
        return response2.json();
      });
      
      const results = await Promise.all(promises);
      const dataObject = {};
  
      results.forEach((data2) => {
        const voucherName = data2.nameVoucher;
        if (!dataObject[voucherName]) {
          dataObject[voucherName] = { ...data2, quantity: 0 };
        }
        dataObject[voucherName].quantity += 1;
        const newQuantityKey = `new_quantity_${data2.voucherID}`;
      const newQuantity = localStorage.getItem(newQuantityKey);
      if (newQuantity) {
        dataObject[voucherName].quantity = parseInt(newQuantity);
      }
      });
      const total = Object.values(dataObject).reduce((acc, current) => acc + current.promotionalPrice * current.quantity, 0);
  
      Object.values(dataObject).forEach((data2) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="shoping__cart__item" style="display:flex">
            <img style="width:100px; height:auto;" src="../backend/uploads/voucherimage/${data2.voucherImageUrl}" alt="#">
            <h5>${data2.nameVoucher}</h5>
            <h5 hidden id="idvoucher">${data2.voucherID}</h5>
          </td>
          <td class="shoping__cart__price" id="promoitem">
          ${data2.promotionalPrice}
          </td>
          <td class="shoping__cart__quantity">
            <div class="quantity" style="display:-webkit-inline-box">
              <button class="quantity-btn decrement">-</button>
              <div class="pro-qty" style="width:30px">
                <span id="number">${data2.quantity}</span>
              </div>
              <button class="quantity-btn increment">+</button>
            </div>
          </td>
          <td class="shoping__cart__total" id="totalitem">
            ${data2.promotionalPrice*data2.quantity}
          </td>
          <td class="shoping__cart__item__close">
            <span class="icon_close"></span>
          </td>
        `;
        tableBody.appendChild(row);
      });
      
      document.getElementById("total").innerHTML = total.toLocaleString() + " đ";
      const totalItems = Object.values(dataObject).reduce((acc, current) => acc + current.quantity, 0);
      document.getElementById("tongsoluonggh").innerHTML = totalItems;
  
      if (typeof Storage !== "undefined") {
        localStorage.setItem("tongsl", totalItems);
        localStorage.setItem("tongcong", total);
        console.log(localStorage.getItem("tongsl"));
        console.log(localStorage.getItem("tongcong"));
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function tieptucmuahang(){
    window.location.href="index.html";

  }
  hiengiohang();