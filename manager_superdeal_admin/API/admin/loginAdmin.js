function dangnhapAdmin(){
  const phoneInput = document.getElementById("phone").value;
    const passInput = document.getElementById("password").value;

fetch(`http://localhost:3000/login/admin/id/${phoneInput}/${passInput}`)
  .then(response => response.json())
  .then(data => {
    // Xử lý dữ liệu trả về từ server
    console.log(data);
    // console.log(data.name);
    // console.log(data.userID);
    if(typeof(Storage)!="undefined"){
        localStorage.setItem("name",data.name);
        localStorage.setItem("id",data.userID);
       
      
        console.log(localStorage.getItem("name"));
        console.log(localStorage.getItem("id"));
    }
    if(data!=null){
        const dangnhap=data;
        console.log(dangnhap);
        if(dangnhap.roleID==1){
             
             if(dangnhap.status==="Đã khóa"){
              alert("Tài khoản của bạn đã bị khóa");
            }else{
              window.location.href="authentication-admin.html";
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
  //   const phoneInput = document.getElementById("phone").value;
  //   const passInput = document.getElementById("password").value;

  //   fetch(`http://localhost:3000/login/id/${phoneInput}/${passInput}`)
  // .then(response => response.json())
  // .then(data => {
  //   // Xử lý dữ liệu trả về từ server
  //   console.log(data);
  //   console.log(data.name);
  //   if(typeof(Storage)!="undefined"){
  //       localStorage.setItem("name",data.name);
  //       console.log(localStorage.getItem("name"));
  //   }
  //   if(data!=null){
  //       const dangnhap=data;
  //       console.log(dangnhap);
  //       console.log(dangnhap.roleID);
  //       if(dangnhap.roleID==1){
  //         if(dangnhap.status==="Đã khóa"){
  //           alert("Tài khoản của bạn đã bị khóa");
  //         }else{
  //           window.location.href="authentication-admin.html";
  //         }
          
  //       }else{
  //         alert("Bạn không có quyền truy cập");
  //       }
        
  //   }else{
  //       alert("Sai tài khoản hoặc mật khẩu");
  //   }

  // })
  // .catch(error => {
  //   // Xử lý lỗi
  //   console.error(error);
  // });
  
}
