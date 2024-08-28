async function getDataUpdateDN() {
  try {
    const userID = localStorage.getItem("id");
    var name;
    var phone;
    var email;
    var address;

    console.log(userID);
    console.log(localStorage.getItem("id"));
    console.log(localStorage.getItem("name"));

    console.log(userID);
    const response = await fetch(`http://localhost:3000/user/iddn/${userID}`);
    const data = await response.json();
    console.log(data);
    data.forEach((user) => {
      name = user.name;
      phone = user.phone;
      email = user.email;
      address = user.address;
    });
    const taxCode = phone.slice(-8) 
    
    document.getElementById("name").value = name;
    document.getElementById("phone").value = phone;
    document.getElementById("email").value = email;
    document.getElementById("address").value = address;
    document.getElementById("masothue").value = taxCode;
  } catch (error) {
    console.log(error);
  }
}
async function suathongtindn() {
  try {
    const userID = localStorage.getItem("id");
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const data = {
      name,
      address,
      userID
    };

    const response = await fetch('http://localhost:3000/admin/user/updateDN', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
    window.location.reload("profileDN.html");
  } catch (error) {
    console.log(error);
  }
}
async function suathongtincty() {
  try {
    const userID = localStorage.getItem("id");
    const companyName = document.getElementById("companyName").value;
    const companyAddress = document.getElementById("companyAddress").value;
    const data = {
      companyName,
      companyAddress,
      userID
    };

    const response = await fetch('http://localhost:3000/company/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);
    window.location.reload("profileDN.html");
  } catch (error) {
    console.log(error);
  }
}
async function update(){
  suathongtindn();
  window.location.replace("profileDN.html");
}
async function getDataCompanyDN() {
  try {
    const userID = localStorage.getItem("id");
    var companyName;
    var companyAddress;
    const response = await fetch(
      `http://localhost:3000/company/iduser/${userID}`
    );
    const data = await response.json();
    console.log(data.companyID);
    companyName = data.companyName;
    companyAddress = data.companyAddress;
    document.getElementById("companyName").value = companyName;
    document.getElementById("companyAddress").value = companyAddress;
    return data.companyName;
  } catch (error) {
    console.log(error);
  }
}

async function getDataChucVu() {
  try {
    const response = await fetch("http://localhost:3000/role/all");
    const data = await response.json();
    //console.log(data);
    // tham chieu den select ma chuc vu
    const selectElement = document.getElementById("roleID");
    data.forEach((roleID) => {
      const optionElement = document.createElement("option");
      optionElement.value = roleID.roleID;
      optionElement.text = roleID.nameRole;
      selectElement.appendChild(optionElement);
    });
  } catch (error) {
    console.log(error);
  }
}
async function hienlogoctydoanhnghiep() {
  try {
    const companyName = await getDataCompanyDN();
    // console.log(companyID);
    const response = await fetch(
      `http://localhost:3000/admin/logo/getid/${companyName}`
    );
    const data = await response.json();
    // console.log(data);
    const imglogo = document.getElementById("imglogo");
    imglogo.innerHTML = "";
    const img = document.createElement("img");
    img.src = `../backend/uploads/logo/${data.logoImageUrl}`;
    img.alt = `Image ${data.logoImageUrl}`;
    img.id = "img_logo";
    img.style.width = '200px'; 
    img.style.height = '200px';
    imglogo.appendChild(img);
  } catch (error) {
    console.log(error);
  }
}
hienlogoctydoanhnghiep();
//   async function qldoanhnghiep(){
//     window.location.href="managaVoucher.html";
//   }
// async function updateU() {
//   try {
//       //lay chuoi tu url
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const aray = urlParams.get('array');
// var array = aray.split(',')
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

getDataUpdateDN();
getDataCompanyDN();
