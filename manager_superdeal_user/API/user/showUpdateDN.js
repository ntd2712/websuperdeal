async function getDataUpdateDN(){
    try{
          const userID = localStorage.getItem("id");
          var name;
          var phone;
          var birthday;
          var email;
        
          console.log(userID);
          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("name"));
         
          
          console.log(userID);
          const response=await fetch(`http://localhost:3000/user/iddn/${userID}`);
          const data = await response.json();
        console.log(data);
        data.forEach(user => {
            name =user.name;
            phone=user.phone;
            birthday=user.birthday;
            email=user.email;
      
            
        });
        document.getElementById("name").value = name;
        document.getElementById("phone").value = phone;
        document.getElementById("birthday").value =birthday;
        document.getElementById("email").value = email;
  
        
    }catch (error) {
      console.log(error);
  }
  };
  
  async function getDataChucVu() {
    try {
        const response = await fetch('http://localhost:3000/role/all');
        const data = await response.json();
        //console.log(data);
        // tham chieu den select ma chuc vu
        const selectElement = document.getElementById('roleID');
        data.forEach(roleID => {
            const optionElement = document.createElement('option');
            optionElement.value = roleID.roleID;
            optionElement.text = roleID.nameRole;
            selectElement.appendChild(optionElement);
        });
  
    } catch (error) {
        console.log(error);
    }
  }
//   async function qldoanhnghiep(){
//     window.location.href="managaVoucher.html";
//   }
  // async function updateU() {
  //   try {
  //       //lay chuoi tu url
  //       const queryString = window.location.search;
  //       const urlParams = new URLSearchParams(queryString);
  //       const aray = urlParams.get('array');
  //       var array = aray.split(',')
  //       const thongBao = document.getElementById('thong_bao_dn');
  //       const thongBaoSDT = document.getElementById('thong_bao_sdt');
  //       const userID = aray;
  //       var name = document.getElementById("name").value;
  //       var phone = document.getElementById("phone").value;
  //       var birthday=document.getElementById("birthday").value;
  //       var email=document.getElementById("email").value;
  //       var password=document.getElementById("password").value;
  //       var roleID = document.getElementById("roleID").value;
  //       var status = document.getElementById("status").value;
  //       console.log("id:" + userID);
  //       console.log("name:" + name);
  //       console.log("phone:" + phone);
  //       console.log("birthday:" + birthday);
  //       console.log("email:" + email);
  //       console.log("password:" + password);
  //       console.log("roleID:" + roleID);
  //       // console.log("manv:" + manv);
  //       // console.log("ten nv:" + tennv);
  //       // console.log("sdt:" + sdt);
  //       // console.log("ma cv:" + ma_chucvu);
  //       //console.log(aray);
  //       if (isNaN(phone)) {
  //           // Không phải là số
  //           thongBaoSDT.hidden = false;
  //       } else if (name.length == 0 || phone.length == 0) {
  //           //rong
  //           thongBao.hidden = false;
  //       } else {
  //           const response = await fetch('http://localhost:3000/admin/user/update', {
  //               method: 'PUT',
  //               headers: {
  //                   'Content-Type': 'application/json'
  //               },
  //               body: JSON.stringify({
  //                   phone,
  //                   password,
  //                   email,
  //                   name,
  //                   birthday,
  //                   roleID,
  //                   status,
  //                   userID
  //               })
  //           });
  //           const data = await response.json();
  //       }
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }
  // function update(){
  //   updateU();
  //   window.location.replace("authentication-admin.html");
  // }
  
  getDataUpdateDN()