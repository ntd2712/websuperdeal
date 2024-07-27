async function showHinh(){
    try {
        const response = await fetch(`http://localhost:3000/admin/voucherimage/getall`);
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector("table.table-nvqldh tbody");
          tableBody.innerHTML = "";
          //console.log(data);
          //console.log(tableBody);
          data.forEach((voucherimage) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${voucherimage.voucherImageID}</td>
              <td><img src="../backend/uploads/voucherimage/${voucherimage.voucherImageUrl}" width="50" height="50" /></td>
    
              <td><input id="chk_all" name="chk_all" type="checkbox" value="${voucherimage.voucherImageID}" /></td>
            `;
            //console.log(row);
            tableBody.appendChild(row);
            //console.log(user.phone);
          });
        } catch (error) {
            console.log(error);
        }
};
async function clickButtonThemHinh(){
    window.location.href="authentication-themhinh.html";
}
showHinh();