async function getDataUpdateKH(){
    try{
          const userID = localStorage.getItem("id");
          var name;
          var phone;
          var birthday;
          var email;
          var address;
          console.log(userID);
          console.log(localStorage.getItem("id"));
          console.log(localStorage.getItem("name"));
         
          
          console.log(userID);
          const response=await fetch(`http://localhost:3000/user/idkh/${userID}`);
          const data = await response.json();
        console.log(data);
        data.forEach(user => {
            name =user.name;
            phone=user.phone;
            birthday=user.birthday;
            email=user.email;
            address=user.address;
            
        });
        document.getElementById("name").value = name;
        document.getElementById("phone").value = phone;
        document.getElementById("birthday").value =birthday;
        document.getElementById("email").value = email;
        document.getElementById("address").value = address;
        
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
  
  getDataUpdateKH();