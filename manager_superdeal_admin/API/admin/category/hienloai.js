async function showLoai(){
    try {
        const response = await fetch(`http://localhost:3000/admin/vouchercategory/getall`);
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector("table.table-nvqldh tbody");
          tableBody.innerHTML = "";
          //console.log(data);
          //console.log(tableBody);
          data.forEach((category) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${category.voucherCategoryID}</td>
              <td>${category.nameVoucherCategory}</td>
              <td><input id="chk_all" name="chk_all" type="checkbox" value="${category.voucherCategoryID}" /></td>
            `;
            //console.log(row);
            tableBody.appendChild(row);
            //console.log(user.phone);
          });
        } catch (error) {
            console.log(error);
        }    
}
async function clickButtonThemCategory(){
    window.location.href = "authentication-themloai.html";
}

showLoai();