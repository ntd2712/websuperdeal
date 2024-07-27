async function hienchitietvoucherDN(){
    try {
        const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const aray = urlParams.get('array');
          const voucherID = aray;
          var nameVoucher;
          var voucherCategoryName;
          var price;
          var percent;
          var promotionalPrice;
          var quantity;
          var rating;
          var description;
          var startDate;
          var endDate;
          var status;
          const response=await fetch(`http://localhost:3000/admin/voucher/getiddetails/${voucherID}`);
          const data = await response.json();
          const dataVoucher=data[0];
          document.getElementById("voucherID").value=dataVoucher.voucherID;
          document.getElementById("nameVoucher").value=dataVoucher.nameVoucher;
          document.getElementById("nameVoucherCategory").value=dataVoucher.nameVoucherCategory;
          document.getElementById("price").value=dataVoucher.price;
          document.getElementById("percent").value=dataVoucher.percent;
          document.getElementById("promotionalPrice").value=dataVoucher.promotionalPrice;
          document.getElementById("quantity").value=dataVoucher.quantity;   
          document.getElementById("rating").value=dataVoucher.rating;
          document.getElementById("description").value=dataVoucher.description;
          document.getElementById("startDate").value=dataVoucher.startDate;
          document.getElementById("endDate").value=dataVoucher.endDate;
          document.getElementById("statusvoucher").value=dataVoucher.statusvoucher;
          //console.log(dataVoucher.startDate);

          const imglist =document.getElementById("imglist");
          imglist.innerHTML='';
          data.forEach(item => {
            const img = document.createElement('img');
            img.src = `../backend/uploads/voucherimage/${item.voucherImageUrl}`;
            img.alt = `Image ${item.voucherImageUrl}`;
            img.id ="img_voucher";
            // img.width = "300px";
            // img.height = 'auto';
            imglist.appendChild(img);
          });
    } catch (error) {
        console.log(error)
    }
}
async function hienchitietbaiviet(){
    try {
        const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get('array');
    const voucherID = aray;
    console.log(voucherID);
    const response=await fetch(`http://localhost:3000/admin/new/getid/${voucherID}`);
    const data = await response.json();

    const tableBody = document.querySelector("table.table-nvqldh tbody");
    tableBody.innerHTML = "";
        data.forEach((news) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${news.newID}</td>
            <td>${news.title}</td>
            <td>${news.datePost}</td>
            <td>${news.content}</td>
            <td><input id="chk_all" name="chk_all" type="checkbox" value="${news.newID}" /></td>
          `;
          console.log(row);
          tableBody.appendChild(row);
          //console.log(user.phone);
          // <td><img src="../backend/uploads/voucher/${voucher.voucherImageUrl}" width="50" height="50"/></td>
        });
    } catch (error) {
        console.log(error);
    }
    
}
async function clickCheckBoxDetailsNew(){
    var array = [];
  //lay cac checkbox duoc chon gan vao array
  $("input:checkbox[name=chk_all]:checked").each(function () {
    array.push($(this).val());
  });

  window.location.href = "chitietbaiviet.html?array=" + array;
}
hienchitietbaiviet();
hienchitietvoucherDN();