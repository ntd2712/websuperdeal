async function loadvoucherKH() {
    try {
      const response = await fetch(`http://localhost:3000/admin/voucher/getall`);
      const itemData = await response.json();
      console.log(itemData);
    //  const newValuePercent=itemData.percent*100;
    //  console.log(newValuePercent);
      // Get the parent element where the new items will be added
      const parentElement = document.getElementById("tatcavoucher")
      
      // Function to create a new item
      async function createNewItem(itemData) {
        if (itemData.statusvoucher === "Hết hạn sử dụng") {
            return null;
          }
        const responseimg = await fetch(
          `http://localhost:3000/admin/voucherimage/getid/${itemData.voucherID}`
        );
        const dataimg = await responseimg.json();
        //console.log(dataimg.percent);
       console.log(dataimg.voucherImageUrl);
      //   const srcimg="../backend/uploads/voucherimage/"+dataimg.voucherImageUrl
      //   console.log(srcimg)
        // Create the necessary HTML elements
        const newItem = document.createElement("div");
        newItem.classList.add(
          "col-lg-4",
          "col-md-6",
          "col-sm-6"
        );
        const newValuePercent=itemData.percent*100;
        newItem.innerHTML = `
          <div class="featured__item" style="background:white;border:1px solid black">
            <div class="featured__item__pic" style="background-image: url(../backend/uploads/voucherimage/${dataimg.voucherImageUrl});">
  
              <ul class="featured__item__pic__hover">
                <li><a href="#" style="background-color: #9d2124; border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%; width: 200px; color: white;border-color:black">Xem ngay</a></li>
              </ul>
            </div>
            <div hidden class = "idvoucher">${itemData.voucherID}</div>
            <div class="featured__item__text">
              <h6><a href="#" style="text-align: left; margin-left: 5%;font-family: serif;font-weight:bold">${itemData.nameVoucher}</a></h6>
                  <div style="width:90%;margin:5%;border:1px solid #c1c1c1;"></div>
                  <div style="display: flex;margin-left:30%;">
                     <h5 style="margin-right:10px;color:#ed1c24">${Intl.NumberFormat('vi-VN').format(Math.round(itemData.promotionalPrice / 1000) * 1000)}<span style="vertical-align: super; font-size: 0.8em;">đ</span></h5>
                      <span style="background-color:#ed1c24;color:white;width:25%;border-radius:7px;border:1px solid #9d2124">-${newValuePercent}%</span>
                  </div>
                   <span style="text-decoration: line-through;">${Intl.NumberFormat('vi-VN').format(itemData.price)}<span style="vertical-align: super; font-size: 0.8em;">đ</span></span>
            </div>
          </div>
        `;
      
        return newItem;
      }
      
      // Add all items to the parent element
      for (const item of itemData) {
        const newItem = await createNewItem(item);
        if (newItem !== null) {
            parentElement.appendChild(newItem);
          }
      }
      //------du
      const xemNgayButtons = parentElement.querySelectorAll('a[href="#"]');
      xemNgayButtons.forEach(button => {
        button.addEventListener('click', async event => {
          event.preventDefault();
          const idVoucherElement = button.closest('.featured__item').querySelector('.idvoucher');
          const idVoucher = idVoucherElement.textContent;
          const url = `shop-details.html?array=${idVoucher}`; // replace with your desired URL
          window.location.href = url;
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function hiendanhsachdanhmuc(){
    try {
        const response = await fetch(`http://localhost:3000/admin/vouchercategory/getall`);
        const data = await response.json();
        console.log(data);
        const listdanhmuc=document.getElementById("list_danhmuc");
        listdanhmuc.innerHTML="";
        data.forEach((item)=>{
            const item_danhmuc = document.createElement("li");
            const a_danhmuc = document.createElement("a");
            
            a_danhmuc.textContent = item.nameVoucherCategory; // Add this line
            a_danhmuc.style.fontSize = "20px";
            a_danhmuc.style.cursor="pointer";
            a_danhmuc.style.color="#9d2124";
            a_danhmuc.addEventListener("click", async function() {
                localStorage.setItem("danhmuc", item.nameVoucherCategory);
                console.log(localStorage.getItem("danhmuc"));
                laytatcavouchertheodanhmuc();
              });
            item_danhmuc.appendChild(a_danhmuc);
            listdanhmuc.appendChild(item_danhmuc);
        })
     
    } catch (error) {
        console.log(error);
    }  
}
async function laytatcavouchertheodanhmuc() {
    try {
      const nameVoucherCategory = localStorage.getItem("danhmuc");
      const response = await fetch(`http://localhost:3000/user/voucher/getallvouchertheodanhmuc/${nameVoucherCategory}`);
      const itemData = await response.json();
      console.log(itemData);
  
      const parentElement = document.getElementById("tatcavoucher");
      parentElement.innerHTML = "";
      
      if (itemData.length === 0) {
        const noVoucherElement = document.createElement("div");
        noVoucherElement.textContent = "Không tìm thấy voucher nào";
        noVoucherElement.style.fontSize = "20px";
        noVoucherElement.style.textAlign = "center";
        parentElement.appendChild(noVoucherElement);
      } else {
        async function createNewItem(itemData) {
          if(itemData.statusvoucher==="Hết hạn sử dụng"){
            return null;
          }
          const responseimg = await fetch(
            `http://localhost:3000/admin/voucherimage/getid/${itemData.voucherID}`
          );
          const dataimg = await responseimg.json();
  
          const newItem = document.createElement("div");
          newItem.classList.add(
            "col-lg-4",
            "col-md-6",
            "col-sm-6"
          );
          
          const newValuePercent = itemData.percent * 100;
          newItem.innerHTML = `
            <div class="featured__item" style="background:white;border:1px solid black">
              <div class="featured__item__pic" style="background-image: url(../backend/uploads/voucherimage/${dataimg.voucherImageUrl});">
                <ul class="featured__item__pic__hover">
                  <li><a href="#" style="background-color: #9d2124; border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%; width: 200px; color: white;border-color:black">Xem ngay</a></li>
                </ul>
              </div>
              <div hidden class = "idvoucher">${itemData.voucherID}</div>
              <div class="featured__item__text">
                <h6><a href="#" style="text-align: left; margin-left: 5%;font-family: serif;font-weight:bold">${itemData.nameVoucher}</a></h6>
                <div style="width:90%;margin:5%;border:1px solid #c1c1c1;"></div>
                <div style="display: flex;margin-left:30%;">
                  <h5 style="margin-right:10px;color:#ed1c24">${Intl.NumberFormat('vi-VN').format(Math.round(itemData.promotionalPrice / 1000) * 1000)}<span style="vertical-align: super; font-size: 0.8em;">đ</span></h5>
                  <span style="background-color:#ed1c24;color:white;width:25%;border-radius:7px;border:1px solid #9d2124">-${newValuePercent}%</span>
                </div>
                <span style="text-decoration: line-through;">${Intl.NumberFormat('vi-VN').format(itemData.price)}<span style="vertical-align: super; font-size: 0.8em;">đ</span></span>
              </div>
            </div>
          `;
  
          return newItem;
        }
  
        for (const item of itemData) {
          const newItem = await createNewItem(item);
          if (newItem !== null) {
            parentElement.appendChild(newItem);
          }
        }
  
        const xemNgayButtons = parentElement.querySelectorAll('a[href="#"]');
        xemNgayButtons.forEach(button => {
          button.addEventListener('click', async event => {
            event.preventDefault();
            const idVoucherElement = button.closest('.featured__item').querySelector('.idvoucher');
            const idVoucher = idVoucherElement.textContent;
            const url = `shop-details.html?array=${idVoucher}`;
            window.location.href = url;
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
hiendanhsachdanhmuc();
  loadvoucherKH();