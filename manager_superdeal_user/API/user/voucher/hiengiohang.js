async function hiengiohang() {
    try {
      const cartID = localStorage.getItem("idcart");
      const response = await fetch(`http://localhost:3000/cart/all/id/${cartID}`);
      const data = await response.json();
  
      const tableBody = document.querySelector("table.table-nvqldh tbody");
      tableBody.innerHTML = "";
  
      // Sử dụng Promise.all để đợi tất cả các yêu cầu fetch hoàn thành
      const promises = data.map(async (element) => {
        const response2 = await fetch(
          `http://localhost:3000/admin/voucher/getidvoucherdetails/${element.code_voucher}`
        );
        const data2 = await response2.json();
        return data2;
      });
      
      const results = await Promise.all(promises);
      const dataObject = {};
      // Tính tổng của promotionalPrice
      
    results.forEach((data2) => {
        if (dataObject[data2.nameVoucher]) {
          // Nếu dữ liệu đã tồn tại, tăng quantity lên 1
          dataObject[data2.nameVoucher].quantity += 1;
        } else {
          // Nếu dữ liệu chưa tồn tại, thêm vào object
          dataObject[data2.nameVoucher] = {
            ...data2,
            quantity: 1,
          };
        }
        console.log(data2);
      });
     
      // Tính tổng của promotionalPrice
      const total2 = Object.values(dataObject).reduce((acc, current) => acc + current.promotionalPrice * current.quantity, 0);
  
      // Tạo table row
      Object.values(dataObject).forEach((data2) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td class="shoping__cart__item" style="display:flex">
            <img style="width:100px; height:auto;" src="../backend/uploads/voucherimage/${data2.voucherImageUrl}" alt="#">
            <h5>${data2.nameVoucher}</h5>
          </td>
          <td class="shoping__cart__price">
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
          <td class="shoping__cart__total">
            ${data2.promotionalPrice * data2.quantity}
          </td>
          <td class="shoping__cart__item__close">
            <span class="icon_close"></span>
          </td>
        `;
        tableBody.appendChild(row);
      });
  
      //console.log("Tổng tiền: " + total2);
      document.getElementById("total").innerHTML = total2.toLocaleString() + " đ";
      const totalItems = Object.values(dataObject).reduce((acc, current) => acc + current.quantity, 0);
      //console.log("Tổng số item trong giỏ hàng: " + totalItems);
      document.getElementById("tongsoluonggh").innerHTML=totalItems;
      const ship=25000;
      document.getElementById("ship").innerHTML = ship.toLocaleString('vi-VN');
      const tongcong=total2+ship;
      document.getElementById("tong").innerHTML=tongcong.toLocaleString()+ " đ";
      if(typeof(Storage)!="undefined"){
        localStorage.setItem("tongsl",totalItems);
        localStorage.setItem("tongtam",total2);
        localStorage.setItem("ship",ship);
        localStorage.setItem("tongcong",tongcong);
       
      
        console.log(localStorage.getItem("tongsl"));
        console.log(localStorage.getItem("tongtam"));
        console.log(localStorage.getItem("ship"));
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