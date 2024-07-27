

async function addSlider() {
    try {
      const sliderID = document.getElementById("sliderID").value;
      const sliderImageUrl = document.getElementById("sliderImageUrl").files[0];
  
      // Create a new FormData object and append the slider image and slider ID to it
      const formData = new FormData();
      formData.append("sliderImageUrl", sliderImageUrl);
      formData.append("sliderID", sliderID);
  
      // Send the FormData object to the server using the fetch API
      const response = await fetch(`http://localhost:3000/admin/slider/add`, {
        method: "POST",
        body: formData,
      });
      
      // Get the response data from the server
      const data = await response.json();
      console.log(data);
      // Check if the slider was added successfully
      window.location.href="authentication-quanlyslider.html";
    } catch (error) {
      console.log(error);
    }
  }
  async function updateSlider(){
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        var array = aray.split(',')
        const sliderID = aray;
       
        const sliderImageUrl=document.getElementById("sliderImageUrl").files[0];
        // console.log(sliderID);
        // console.log(sliderImageUrl);
        const response = await fetch('http://localhost:3000/admin/slider/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sliderID,
                sliderImageUrl
            })
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
  }
  
// async function addSlider(){
//     try {
//         const sliderID=document.getElementById('sliderID').value;
//         const sliderImg=document.getElementById('sliderImageUrl');
//         const files=sliderImg.files;
//         if(files.length>0){
//             let sliderImageUrl='';
//             for(let i=0; i<files.length;i++){
//                 const filename=files[i].name;
//                 sliderImageUrl=`../backend/uploads/slider/${filename}`;
//             }
//             console.log(sliderID);
//             console.log(sliderImageUrl);
//             const response = await fetch(`http://localhost:3000/admin/slider/add`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                    sliderID,
//                    sliderImageUrl
//                 })
//             });
//             const data = await response.json();
//             window.location.href="authentication-quanlyslider.html";

//         }else{
//             alert("chua chhon hinh");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function themSlider() {
//     // Lấy giá trị từ các input
//     var sliderID = document.getElementById("sliderID").value;
//     var sliderImg = document.getElementById("sliderImg").files[0];
  
//     // Kiểm tra xem đã nhập đầy đủ thông tin chưa
//     if (sliderID === "" || sliderImg === undefined) {
//       // Hiển thị thông báo lỗi
//       document.getElementById("thong_bao_dn").hidden = false;
//       return;
//     }
  
//     // Tạo FormData để đóng gói dữ liệu
//     var formData = new FormData();
//     formData.append("sliderID", sliderID);
//     formData.append("sliderImg", sliderImg);
  
//     // Gửi yêu cầu POST lên server
//     fetch("http://localhost:3000/admin/slider/add", {
//       method: "POST",
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Xử lý phản hồi từ server
//       if (data.sliderID) {
//         // Thêm slider thành công
//         alert("Thêm slider thành công!");
//         // Xóa giá trị của các input
//         document.getElementById("sliderID").value = "";
//         document.getElementById("sliderImg").value = "";
//       } else {
//         // Thêm slider thất bại
//         alert("Thêm slider thất bại!");
//       }
//     })
//     .catch(error => {
//       // Xử lý lỗi
//       alert("Đã xảy ra lỗi: " + error);
//     });
//   }
