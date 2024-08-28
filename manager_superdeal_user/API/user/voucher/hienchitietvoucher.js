async function hienchitietvoucherDN() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const voucherID = aray;
    var nameVoucher;
    var voucherCategoryName;
    var quantity;
    var rating;
    var description;
    var startDate;
    var endDate;
    var status;
    const response = await fetch(
      `http://localhost:3000/admin/voucher/getiddetails/${voucherID}`
    );
    const data = await response.json();
    const dataVoucher = data[0];
    const promotionalPrice = dataVoucher.promotionalPrice;
    const formattedPromotionalPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(promotionalPrice);
    const price = dataVoucher.price;
    const formattedPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(price);
   const percent= dataVoucher.percent;
    document.getElementById("voucherID").value = dataVoucher.voucherID;
    document.getElementById("nameVoucher").value = dataVoucher.nameVoucher;
    document.getElementById("nameVoucherCategory").value =dataVoucher.nameVoucherCategory;
    document.getElementById("price").value = formattedPrice;
    document.getElementById("percent").value = `${percent*100}%`;
    document.getElementById("promotionalPrice").value =formattedPromotionalPrice;
    document.getElementById("quantity").value = dataVoucher.quantity;
    document.getElementById("rating").value = dataVoucher.rating;
    document.getElementById("description").value = dataVoucher.description;
    document.getElementById("startDate").value = dataVoucher.startDate;
    document.getElementById("endDate").value = dataVoucher.endDate;
    document.getElementById("statusvoucher").value = dataVoucher.statusvoucher;
    //console.log(dataVoucher.startDate);

    const imglist = document.getElementById("imglist");
    imglist.innerHTML = "";
    data.forEach((item) => {
      const img = document.createElement("img");
      img.src = `../backend/uploads/voucherimage/${item.voucherImageUrl}`;
      img.alt = `Image ${item.voucherImageUrl}`;
      img.id = "img_voucher";
      // img.width = "300px";
      // img.height = 'auto';
      imglist.appendChild(img);
    });
  } catch (error) {
    console.log(error);
  }
}
async function hienchitietbaiviet() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const voucherID = aray;
    console.log(voucherID);
    const response = await fetch(
      `http://localhost:3000/admin/new/getid/${voucherID}`
    );
    const data = await response.json();

    const tableBody = document.querySelector("table.table-nvqldh tbody");
    tableBody.innerHTML = "";
    data.forEach((news) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${news.newID}</td>
            <td>${news.title.toUpperCase()}</td>
            <td>${new Date(news.datePost).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
            <td>${news.content}</td>
            <td><input id="chk_all" name="chk_all" type="checkbox" value="${news.newID}" /></td>
          `;
          const datePost = new Date(news.datePost);
          const ninetyDaysAgo = new Date();
          ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
        
          if (datePost < ninetyDaysAgo) {
            row.style.display = 'none'; // hide the row if the date is more than 90 days ago
          }
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
async function clickCheckBoxDetailsNew() {
  var array = [];
  //lay cac checkbox duoc chon gan vao array
  $("input:checkbox[name=chk_all]:checked").each(function () {
    array.push($(this).val());
  });

  window.location.href = "chitietbaiviet.html?array=" + array;
}
hienchitietbaiviet();
hienchitietvoucherDN();
