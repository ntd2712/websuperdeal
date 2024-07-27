async function loadchitiethinhvoucher() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const voucherID = aray;
    const response = await fetch(
      `http://localhost:3000/admin/voucherimage/getid/${voucherID}`
    );
    const itemData = await response.json();
    console.log(itemData.voucherImageUrl);

    const imglist = document.getElementById("mainimg");
    imglist.innerHTML = "";

    const img = document.createElement("img");
    img.src = `../backend/uploads/voucherimage/${itemData.voucherImageUrl}`;
    img.alt = `Image ${itemData.voucherImageUrl}`;
    img.id = "img_new";
    // img.width = "300px";
    // img.height = 'auto';
    imglist.appendChild(img);

    // const productDetailsPicItem = document.createElement("div");
    // productDetailsPicItem.classList.add("product__details__pic__item");

    // // Create the large image element
    // const largeImage = document.createElement("img");
    // largeImage.classList.add("product__details__pic__item--large");
    // largeImage.src =`../backend/uploads/voucherimage/${itemData.voucherImageUrl}`;
    // largeImage.alt = `Image ${itemData.voucherImageUrl}`;

    // // Append the large image to the container
    // productDetailsPicItem.appendChild(largeImage);

    //     // Create the slider container
    //     const sliderContainer = document.createElement("div");
    //     sliderContainer.classList.add("product__details__pic__slider", "owl-carousel");

    //     // Create the thumbnail images
    //     for (let i = 0; i < itemData.voucherImageUrl.length; i++) {
    //       const thumbnailImage = document.createElement("img");
    //       thumbnailImage.setAttribute("data-imgbigurl", itemData.voucherImageUrl[i]);
    //       thumbnailImage.src =`../backend/uploads/voucherimage/${itemData.voucherImageUrl}`;
    //       thumbnailImage.alt = `Image ${itemData.voucherImageUrl}`;
    //       sliderContainer.appendChild(thumbnailImage);
    //     }

    //     // Append the slider container to the main container
    //     productDetailsPicItem.appendChild(sliderContainer);
    //    document.body.appendChild(productDetailsPicItem);
  } catch (error) {
    console.log(error);
  }
}
let currentSlideIndex = 1;
async function loaddetailall() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const voucherID = aray;
    const responseall = await fetch(
      `http://localhost:3000/admin/voucherimage/getallid/${voucherID}`
    );
    const itemDataall = await responseall.json();

    const imglistall = document.getElementById("listimgdetails");
    imglistall.innerHTML = "";
   
    itemDataall.forEach((item, index) => {
      const sliderDiv = document.createElement("div");
      sliderDiv.className = "slider fade";
      const img = document.createElement("img");
      img.src = `../backend/uploads/voucherimage/${item.voucherImageUrl}`;
      img.alt = `Image ${item.voucherImageUrl}`;
      img.id = `img_new_all_${index}`;
      img.style.verticalAlign = "middle";
      sliderDiv.appendChild(img);
      imglistall.appendChild(sliderDiv);
    });
    const prevButton = document.createElement("a");
    prevButton.className = "prev";
    prevButton.onclick = function () {
      plusSlides(-1);
    };
    prevButton.innerHTML = "&#10095;";
    imglistall.appendChild(prevButton);

    const nextButton = document.createElement("a");
    nextButton.className = "next";
    nextButton.onclick = function () {
      plusSlides(1);
    };
    nextButton.innerHTML = "&#10094;";
    imglistall.appendChild(nextButton);

  
  } catch (error) {
    console.log(error);
  }
}
async function showSlides(n) {


  let slides = document.getElementsByClassName("slider");
  if (n > slides.length) {
    currentSlideIndex = 1;
  } else if (n < 1) {
    currentSlideIndex = slides.length;
  } else {
    currentSlideIndex = n;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[currentSlideIndex - 1].style.display = "block";
}
async function plusSlides(n) {
  showSlides(currentSlideIndex + n);
}

async function themgiohang(){
  try {
    const cartID=localStorage.getItem("idcart");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const code_voucher = aray;
  const response = await fetch(`http://localhost:3000/itemvoucher/add`,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        cartID,
        code_voucher
    })
});
const data = await response.json();
console.log(data);

if(data){
  window.location.href="shoping-cart.html";
}
  } catch (error) {
    console.log(error)
  }
  
}

async function loadvoucherdetails() {
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aray = urlParams.get("array");
    const voucherID = aray;
    const response = await fetch(
      `http://localhost:3000/admin/voucher/getidvoucherdetails/${voucherID}`
    );
    const data = await response.json();
    console.log(data);
    const newItem = document.getElementById("voucherdetails");
    const newPercent=data.percent*100;
   
    newItem.innerHTML = `
                        <h3>${data.nameVoucher}</h3>
                        <div style="display: flex;margin-left:5%;">
                        <div class="product__details__price"style="margin-right:10px;color:#ed1c24">
  ${Intl.NumberFormat('vi-VN').format(Math.round(data.promotionalPrice / 1000) * 1000)}
  <span style="vertical-align: super; font-size: 0.8em;">đ</span></div>

                        <span style="background-color:#ed1c24;color:white;width:45px;height:25px;text-align:center;border-radius:7px;border:1px solid #9d2124">-${
                          newPercent
                        }%</span>
                        </div>
                        <span style="text-decoration: line-through;margin-left:7%;line-height: 1.0;display:block;font-size:20px;margin-bottom:10px">${Intl.NumberFormat(
                          "vi-VN"
                        ).format(
                          data.price
                        )}<span style="vertical-align: super; font-size: 0.8em;">đ</span></span>
                       <div class="product__details__quantity">
                            <div class="quantity" style="margin-left:6%">
                                 <button class="quantity-btn decrement">-</button>
                                <div class="pro-qty">
                                     <span id="number">1</span>
                                </div>
                                <button class="quantity-btn increment">+</button>
                            </div>
                             <a href="#" class="primary-btn" onclick="themgiohang()" style="width:180px;margin-left:5%; border-radius:10px; background-color:#9d2124;text-align:center; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);">Thêm giỏ hàng</a>
                        </div>
                         <p style="margin-top:10px">Thời hạn sử dung voucher:${
                           data.startDate
                         } đến ${data.endDate}</p>  
          `;
          const minus=document.querySelector('.quantity-btn.decrement');
          const plus=document.querySelector('.quantity-btn.increment');
          const newquantity=document.getElementById("number");
          plus.addEventListener('click', () => {
            if (parseInt(newquantity.textContent) < data.quantity) {
              newquantity.textContent++;
            }
          });
          
          minus.addEventListener('click', () => {
            if (parseInt(newquantity.textContent) > 1) {
              newquantity.textContent--;
            }
          });
          
         
  } catch (error) {
    console.log(error);
  }
}

loadvoucherdetails();
loaddetailall();
loadchitiethinhvoucher();
