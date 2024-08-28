// document.addEventListener('DOMContentLoaded', () => {
//     const nameLoginElement = document.getElementById("name_login");
//     const logoutLink = document.getElementById("name_logout");
    
//     if (nameLoginElement) {
//         const name = localStorage.getItem("name");
//         if (name) {
//           nameLoginElement.textContent = name;
//           logoutLink.style.display = "inline";
//         } else {
//           nameLoginElement.textContent = "Login";
//         }
//       }
      
  
//     if (logoutLink) {
        
//       logoutLink.addEventListener("click", () => {
//         // Xóa thông tin người dùng khỏi localStorage
        
//         localStorage.removeItem("name");
  
//         // Cập nhật lại giao diện
//         if (nameLoginElement) {
//             nameLoginElement.textContent = "Login";
           
//         }
//       });
//     }
//   });

  async function ktKHhayDN(){
    try {
      const userID=localStorage.getItem("id");
      const response=await fetch(`http://localhost:3000/user/role/${userID}`);
      const data=await response.json();
      console.log(data);
      //console.log(data.roleID);
      
      if(typeof(Storage)!="undefined"){
        localStorage.setItem("roleID",data.roleID);
        console.log(localStorage.getItem("roleID"));
      }
     
    } catch (error) {
      console.log(error);
    }
    
  }
  ktKHhayDN();
  document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById("name_login");
    const loginLink = document.getElementById("login");
    const logoutLink = document.getElementById("name_logout");
    
    if(localStorage.getItem("name")){
      name.textContent=localStorage.getItem("name");
      loginLink.style.display="inline";
    };
    if (logoutLink) {
        
      logoutLink.addEventListener("click", () => {
        // Xóa thông tin người dùng khỏi localStorage
        
        localStorage.removeItem("name");
        localStorage.removeItem("roleID");
        // Cập nhật lại giao diện
        if (loginLink) {
            name.textContent = "Thông tin cá nhân";
           
        }
      });
    }
    name.addEventListener("click", () => {
      if (localStorage.getItem("roleID") == "3") {
        window.location.href = "profileDN.html";
      } else if(localStorage.getItem("roleID") == "2"){
        window.location.href = "profileKH.html";
      }else{
        window.location.href = "authentication-admin.html";
      }
    });
  
  });
  //console.log(localStorage.getItem("name"));