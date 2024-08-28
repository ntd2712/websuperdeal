
async function thanhtoan() {
    try {
            // Lấy thông tin đơn hàng
    var tongTien = document.getElementById("total").textContent;
    var soLuong = document.getElementById("tongsoluonggh").textContent;
  
    // Tạo đối tượng đơn hàng
    var donHang = JSON.stringify({
        tongTien: tongTien,
        soLuong: soLuong
      });
      
      const response=await fetch(`http://localhost:3000/pay`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:donHang
      });
      const data=await response.json();
      console.log(data);
      window.location =data.forwardLink;
    } catch (error) {
        console.log(error);
    }

  }
