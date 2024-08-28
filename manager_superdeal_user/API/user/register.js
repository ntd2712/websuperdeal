async function registerKH() {
    try {
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value;
        const birthday = document.getElementById("birthday").value;
        const address = document.getElementById("address").value;
        const gender = document.querySelector('input[name="male"]:checked').value;
        const rewardPoint = ""; // Giả định giá trị mặc định vì không có trong form
        const memberName = "Thành viên"; // Giả định giá trị mặc định vì không có trong form
        const status = "Đang hoạt động"; // Giả định giá trị mặc định vì không có trong form
        const roleID = 2; // Giả định roleID là 2 cho người dùng mới đăng ký
        const requiredInput=document.querySelectorAll(".sign-up-form [required]");
        const err=document.querySelectorAll("[name='err']");
        const errPhone=document.getElementById("mesPhone");
        const errPassword=document.getElementById("mesPassword");
        const errName=document.getElementById("mesName");
        const errBirthday=document.getElementById("mesBirthday");
        const errEmail=document.getElementById("mesEmail");
        const errAddress=document.getElementById("mesAddress");
       
        for (var i = 0; i < err.length; i++) {
            err[i].style.color = "red";
            err[i].style.fontSize="14px";
          }
          if (phone.length === 10 && (phone.startsWith("078") || phone.startsWith("070") || phone.startsWith("079") || phone.startsWith("077") || phone.startsWith("076") || phone.startsWith("090") || phone.startsWith("093") || phone.startsWith("089")|| phone.startsWith("091"))){
            errPhone.innerHTML="";
        }else if(phone.length===phone.length){
            errPhone.innerHTML="Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại";
            return;  
        }else{
            errPhone.innerHTML="Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại";
            return;
        }
        if(password.length<=7||password===""){
            errPassword.innerHTML="Vui lòng nhập mật khẩu từ 8 kí tự trở lên";
            return;
        }else{
            errPassword.innerHTML="";
        }
        if(name.length===0||name===""){
            errName.innerHTML="Vui lòng nhập họ và tên";
            return;
        }else{
            errName.innerHTML="";
        }
        if(address.trim().length===0||address===""){
            errAddress.innerHTML="Vui lòng nhập địa chỉ";
            return;
        }else{
            errAddress.innerHTML="";
        }
        if(email.trim().length===0||email===""){
            errEmail.innerHTML="Vui lòng nhập email";
            return;
        }else{
            errEmail.innerHTML="";
        }

        let hasEmptyFields= false;
        requiredInput.forEach((input)=>{
            if(!input.value){
                input.classList.add("warning")
                if(!input.nextElementSibling||!input.nextElementSibling.classList.contains("warning-message")){
                    const warningMessage=document.createElement("div");
                    warningMessage.classList.add("warning-message");
                    warningMessage.textContent="Vui lòng nhập thông tin.";
                    input.parentNode.insertBefore(warningMessage,input.nextElementSibling);
                }
                hasEmptyFields=true;
            }else{
                input.classList.remove("warning");
                if(input.nextElementSibling&&input.nextElementSibling.classList.contains("warning-message")){
                    input.nextElementSibling.remove();
                }
            }
        });
        // console.log(phone);
        // console.log(password);
        // console.log(name);
        // console.log(email);
        //console.log(birthday);
        // console.log(address);
        // console.log(gender);
       // var flag =true;
        const ngaySinhDate = new Date(birthday);
       // console.log(ngaySinhDate);
        const today = new Date();
        const minNgaySinh = new Date(
            today.getFullYear() - 65,
            today.getMonth(),
            today.getDate()
         );
         const maxNgaySinh = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );
          console.log(maxNgaySinh);
          if (ngaySinhDate > maxNgaySinh || ngaySinhDate < minNgaySinh ||birthday==="") {
            errBirthday.innerHTML="Vui lòng chọn lại ngày sinh hợp lệ";
            return;
          }else{
            errBirthday.innerHTML="";
          }
          if (hasEmptyFields) {
            alert('Vui lòng nhập đầy đủ thông tin.');
            return;
          }
        //   if (phone.length !== 10) {
        //     alert('Số điện thoại phải có độ dài là 10 số.');
        //     return;
        //   }
        // if (phone.length === 0 || password.length === 0) {
        //     alert("Số điện thoại và mật khẩu không được để trống.");
        //     return;
        // } 
        // if(flag==false){
        //     alert("Ngày sinh không hợp lệ");
        //     return;
        // }
        else {
            const response = await fetch('http://localhost:3000/user/adminKH', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone,
                    password,
                    name,
                    email,
                    birthday,
                    address,
                    gender,
                    rewardPoint,
                    memberName,
                    status,
                    roleID
                    
                
                })
            });
            const data = await response.json();
            console.log(data);

            const userID = data.id;

            const res =await fetch('http://localhost:3000/cart/add' ,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID
                
                })
            });
            const dat2a = await res.json();
            console.log(dat2a);

            if (data && dat2a) {
                window.location.href = "login.html";
            } else {
                alert("Đăng ký thất bại. Vui lòng thử lại.");
            }
        }
        
    } catch (error) {
        console.log(error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại 11111.");
    }
};
async function registerDN() {
    try {
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const birthday = document.getElementById("birthday").value;
        const address = document.getElementById("address").value;
        const gender = document.querySelector('input[name="male"]:checked').value;
        const rewardPoint = ""; // Giả định giá trị mặc định vì không có trong form
        const memberName = "Thành viên"; // Giả định giá trị mặc định vì không có trong form
        const status = "Đang hoạt động"; // Giả định giá trị mặc định vì không có trong form
        const roleID = 3; // Giả định roleID là 2 cho người dùng mới đăng ký
        const companyID= await registerCompany();
        
        // console.log(phone);
        // console.log(password);
        // console.log(name);
        // console.log(email);
        // console.log(birthday);
        // console.log(address);
        // console.log(gender);
        var flag =true;
        const ngaySinhDate = new Date(birthday);
        console.log(ngaySinhDate);
        const today = new Date();
        const minNgaySinh = new Date(
            today.getFullYear() - 65,
            today.getMonth(),
            today.getDate()
         );
         const maxNgaySinh = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
          );
          console.log(maxNgaySinh);
          if (ngaySinhDate > maxNgaySinh || ngaySinhDate < minNgaySinh ||birthday==="") {
            flag =false;
          };
        if (phone.length === 0 || password.length === 0) {
            alert("Số điện thoại và mật khẩu không được để trống.");
            return;
        }if(flag==false){
            alert("Ngày sinh không hợp lệ");
            return;
        } else {
            const response = await fetch('http://localhost:3000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone,
                    password,
                    name,
                    email,
                    birthday,
                    address,
                    gender,
                    rewardPoint,
                    memberName,
                    status,
                    roleID,
                    companyID
                    
                })
            });
            const data = await response.json();
            console.log(data);

            if (data!=null) {
                window.location.href = "login.html";
            } else {
                alert("Đăng ký thất bại. Vui lòng thử lại.");
            }
        }
    } catch (error) {
        console.log(error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại 11111.");
    }
};
async function registerCompany(){
    try {
        const userID=localStorage.getItem("id");
        const companyName=document.getElementById("companyName").value;
        const companyAddress=document.getElementById("companyAddress").value;
        const response = await fetch('http://localhost:3000/company/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           userID,
           companyName,
           companyAddress
            
        })
    });
    const data = await response.json();
    // console.log(data.id);
    return data.id;

    // if (data!=null) {
    //     window.location.href = "login.html";
    // } else {
    //     alert("Đăng ký thất bại. Vui lòng thử lại.");
    // }
    } catch (error) {
        console.log(error);
    }
    

}
function getMaxDate() {
    return new Date().toISOString().slice(0, 10);
  }
async function updateUserToDN(){
    try {
        const userID=localStorage.getItem("id");
        const companyID = await registerCompany();
        const roleID= 3
        console.log(userID);
        console.log(companyID);
        const response = await fetch('http://localhost:3000/user/update/company', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roleID,
                companyID,
                userID
            })
        });
        const data = await response.json();
        console.log(data);
        //------------------------------------------------------
        const logoImageUrl=document.getElementById("logoImageUrl");
        for(let i=0; i<logoImageUrl.files.length;i++){
            const formData=new FormData();
            formData.append("companyID",companyID);
            formData.append("logoImageUrl",logoImageUrl.files[i]);
            //console.log(newImageUrl.files[i]);
            const response=await fetch(`http://localhost:3000/admin/logo/add`,{
                method:"POST",
                body:formData
            });
            // const data=await response.json();
            // console.log(data);
        }    
        //--------------------------------------
        const sliderImageUrl=document.getElementById("sliderImageUrl");
        for(let i=0; i<sliderImageUrl.files.length;i++){
            const formData=new FormData();
            formData.append("companyID",companyID);
            formData.append("sliderImageUrl",sliderImageUrl.files[i]);
            //console.log(newImageUrl.files[i]);
            const response=await fetch(`http://localhost:3000/admin/slider/add`,{
                method:"POST",
                body:formData
            });
            // const data=await response.json();
            // console.log(data);
        }        
        // if(data!=null){
        //     window.location.href="profileDN.html";
        // }else{
        //     alert("lol");
        // }
    } catch (error) {
        console.log(error);
    }
    
}
async function themhinhlogo(){
    try {
        const companyID= await registerCompany();
        
    } catch (error) {
        console.log(error);
    }
}
async function themhinhslider(){
    try {
        const companyID= await registerCompany();
        const sliderImageUrl=document.getElementById("sliderImageUrl");
        for(let i=0; i<sliderImageUrl.files.length;i++){
            const formData=new FormData();
            formData.append("companyID",companyID);
            formData.append("sliderImageUrl",sliderImageUrl.files[i]);
            //console.log(newImageUrl.files[i]);
            const response=await fetch(`http://localhost:3000/admin/slider/add`,{
                method:"POST",
                body:formData
            });
            const data=await response.json();
            console.log(data);
        }      
    } catch (error) {
        console.log(error);
    }
}
async function dangkydoanhnghiep(){
    updateUserToDN();
    window.location.href="profileDN.html";
    // themhinhlogo();
    // themhinhslider();
   
}