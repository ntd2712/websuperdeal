function dangnhap(){
    const phoneInput = document.getElementById("phone").value;
    const passInput = document.getElementById("password").value;

fetch(`http://localhost:3000/login/id/${phoneInput}/${passInput}`)
  .then(response => response.json())
  .then(data => {
    // Xử lý dữ liệu trả về từ server
    console.log(data);
    console.log(data.name);
    console.log(data.userID);
    if(typeof(Storage)!="undefined"){
        localStorage.setItem("name",data.name);
        localStorage.setItem("id",data.userID);
        localStorage.setItem("idcart",data.cartID);
       
      
        console.log(localStorage.getItem("name"));
        console.log(localStorage.getItem("id"));
    }
    if(data!=null){
        const dangnhap=data;
        console.log(dangnhap);
        if(dangnhap.roleID===2||dangnhap.roleID===3){
             
             if(dangnhap.status==="Đã khóa"){
              alert("Tài khoản của bạn đã bị khóa");
            }else{
              window.location.href="index.html";
            }
        };
        
        
    }
    else{
        alert("Sai tài khoản hoặc mật khẩu");
    }

  })
  .catch(error => {
    // Xử lý lỗi
    console.error(error);
  });
    
    
    // console.log(JSON.stringify(data));
    // fetch(`http://localhost:3000/xdhotdeal/user/login`,{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then((response)=>response.json())
    // .then((data)=>{
    //     console.log(data);
    //     if(data=="Sai tên đăng nhập"){
    //         alert("Sai tên đăng nhập");
    //     }else if(data=="Sai mật khẩu"){
    //         alert("Sai mật khẩu");
    //     }else if(data=="Lỗi server"){
    //         alert("Lỗi server");
    //     }else{
    //         if(data.user2.role==="khachhang"){
    //             const tenKhachHang=data.user2.name;
    //             sessionStorage.setItem("kh",tenKhachHang);
    //             const maKhachHang=data.user2.userID;
    //             const kh=[tenKhachHang,maKhachHang];
    //             sessionStorage.setItem("kh",JSON.stringify(kh));
    //             sessionStorage.setItem("tk", JSON.stringify(data.access_tk));
    //             window.location.href = "shoping-cart.html";
    //         }else{
    //             alert("Không xác định");
    //         }
    //     }
    // }).catch((error)=>{
    //     alert(error);
    //     console.log(error);
    // });
}
function anHien() {
    const passwordInput = document.getElementById("password");
    const input = document.getElementById("icon-anHien");
    if (input.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
}
function kiemTraDN(){
    // Kiểm tra trạng thái đăng nhập
  if (!sessionStorage.getItem('tk')) {
    // Nếu chưa đăng nhập, hiển thị thông báo
    alert('Bạn cần đăng nhập!');
    // Chuyển hướng đến trang đăng nhập
    window.location.href = "login.html";
  }
  }