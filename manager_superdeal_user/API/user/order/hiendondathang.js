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
            row.innerHTML = `
              <td>${orders.orderID}</td>
              <td>${orders.dateOrder}</td>
             
              <td>${orders.statusOrder}</td>
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
hiendondathang()