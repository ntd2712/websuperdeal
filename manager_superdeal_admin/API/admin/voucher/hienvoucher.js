async function hienvoucher(){
    try {
        const response = await fetch(`http://localhost:3000/admin/voucher/getall`);
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
            pageData.forEach((voucher) => {
              const row = document.createElement("tr");
              row.innerHTML = `
                <td>${voucher.voucherID}</td>
                <td>${voucher.nameVoucherCategory}</td>
                <td>${voucher.nameVoucher}</td>
                <td>${voucher.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                <td>${voucher.percent*100}%</td>
                <td>${voucher.promotionalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                <td>${voucher.quantity}</td>
                <td>${voucher.rating}</td>
                <td>${voucher.description}</td>
                <td>${new Date(voucher.startDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                <td>${new Date(voucher.endDate).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                <td>${voucher.statusvoucher}</td>
                
                <td><input id="chk_all" name="chk_all" type="checkbox" value="${voucher.voucherID}" /></td>
              `;
              tableBody.appendChild(row);
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
  }
  hienvoucher();