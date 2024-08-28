async function getDataDN() {
  try {
    const response = await fetch("http://localhost:3000/admin/user");
    const data = await response.json();

    // Tham chiếu đến table
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
          pageData.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.userID}</td>
        <td>${user.phone}</td>
        <td>${user.password}</td>
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td>${new Date(user.birthday).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
        <td>${user.address}</td>
        <td>${user.gender}</td>
        <td>${user.rewardPoint}</td>
        <td>${user.memberName}</td>
        <td>${user.status}</td>
       <td>${user.nameRole}</td>
        <td>${user.companyName}</td>
        <td>${user.companyAddress}</td>
        <td><input id="chk_all" name="chk_all" type="checkbox" value="${user.userID}" /></td>
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
    console.error(error);
  }
}
async function clickButtonPageUpdateUser() {
  var array = [];
  //lay cac checkbox duoc chon gan vao array
  $("input:checkbox[name=chk_all]:checked").each(function () {
    array.push($(this).val());
  });

  window.location.href = "authentication-updatenguoidung.html?array=" + array;
}
async function khoaNguoidung() {
  try {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Lặp qua từng checkbox và kiểm tra xem nó đã được chọn hay chưa
    var selectedRows = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        // Nếu checkbox đã được chọn, lấy mã đơn từ cột tương ứng và thêm vào mảng selectedRows
        var row = checkboxes[i].parentNode.parentNode;
        var maUser = row.querySelector("td:nth-child(1)").textContent;
        selectedRows.push(maUser);
      }
    }
    console.log(selectedRows);
    const status ="Đã khóa";
    selectedRows.forEach(async (userID) => {
      const response = await fetch('http://localhost:3000/user/status/update', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             userID,
             status
          })
      });
      const data = await response.json();
  });
  window.location.replace("authentication-admin.html");
  } catch (error) {
    console.log(error);
  }
};
async function getDataTim() {
  try {
    const phone=document.getElementById("search").value;
    const response = await fetch(`http://localhost:3000/user/search/${phone}`);
    const data = await response.json();
    if(data==null){
      alert("Không tìm thấy số điện thoại!!")
    }else{
       // Tham chiếu đến table
    const tableBody = document.querySelector("table.table-nvqldh tbody");
    tableBody.innerHTML = "";
    //console.log(data);
    //console.log(tableBody);

    data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.userID}</td>
        <td>${user.phone}</td>
        <td>${user.password}</td>
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.address}</td>
        <td>${user.gender}</td>
        <td>${user.rewardPoint}</td>
        <td>${user.memberName}</td>
        <td>${user.status}</td>
        <td>${user.nameRole}</td>
        <td>${user.companyName}</td>
        <td>${user.companyAddress}</td>
        <td><input id="chk_all" name="chk_all" type="checkbox" value="${user.userID}" /></td>
      `;
      //console.log(row);
      tableBody.appendChild(row);
      //console.log(user.phone);
    });
    }
   
  } catch (error) {
    console.error(error);
  }
}

getDataDN();
