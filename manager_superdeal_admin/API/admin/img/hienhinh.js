async function showHinh(){
    try {
        const response = await fetch(`http://localhost:3000/admin/voucherimage/getall`);
        const data = await response.json();
        console.log(data);
        const tableBody = document.querySelector("table.table-nvqldh tbody");
          tableBody.innerHTML = "";
          const pagination = document.querySelector(".pagination");
        const prevButton = pagination.querySelector(".prev");
        const nextButton = pagination.querySelector(".next");
        const pageInfo = pagination.querySelector(".page-info");
    
        const itemsPerPage = 4;
        let currentPage = 1;
        let totalPages = Math.ceil(data.length / itemsPerPage);
        function renderPage(page) {
          const start = (page - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          const pageData = data.slice(start, end);
    
          tableBody.innerHTML = "";
          pageData.forEach((voucherimage) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${voucherimage.voucherImageID}</td>
              <td>${voucherimage.voucherID}</td>
              <td><img src="../backend/uploads/voucherimage/${voucherimage.voucherImageUrl}" width="50" height="50" /></td>
    
              <td><input id="chk_all" name="chk_all" type="checkbox" value="${voucherimage.voucherImageID}" /></td>
            `;
            //console.log(row);
            tableBody.appendChild(row);
            //console.log(user.phone);
          });
          pageInfo.textContent = `Trang ${currentPage}/${totalPages}`;
        }
        renderPage(currentPage);

        prevButton.addEventListener("click", () => {
          if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
          }
        });
    
        nextButton.addEventListener("click", () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
          }
        });
        } catch (error) {
            console.log(error);
        }
};
async function clickButtonThemHinh(){
    window.location.href="authentication-themhinh.html";
}
showHinh();