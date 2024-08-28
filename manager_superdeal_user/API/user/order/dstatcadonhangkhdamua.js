async function dskhachhangdamua(){
    try {
        const roleID=2;
        const response=await fetch(`http://localhost:3000/order/getalluserbought/${roleID}`);
        const data=await response.json();
        // console.log(data);
        const tableBody = document.querySelector("table.table-nvqldh tbody");
        tableBody.innerHTML = "";
        data.forEach((itemuser) => {
            const row = document.createElement("tr");
            const random4digits = Math.floor(1000 + Math.random() * 9000);
            const masdvoucher = `${itemuser.voucherID}${itemuser.orderID}${random4digits}`;
            row.innerHTML = `
              <td>${itemuser.name}</td>
              <td>${itemuser.voucherID}</td>
              <td>${itemuser.voucherCategoryID}</td>
              <td>${itemuser.nameVoucher}</td>
              <td>${itemuser.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
              <td>${itemuser.quantity}</td>
              <td>${itemuser.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
              <td>${new Date(itemuser.startDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
              <td>${new Date(itemuser.endDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
              <td>${itemuser.statusvoucher}</td>
              <td>${itemuser.orderID}</td>
              <td>${new Date(itemuser.dateOrder).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
              <td>${masdvoucher}</td>
            `;
            console.log(row);
            tableBody.appendChild(row);
           
          });
    } catch (error) {
       console.log(error); 
    }
    
}
dskhachhangdamua();