
async function addCategory(){
    try {
        const voucherCategoryID=document.getElementById("voucherCategoryID").value;
        const nameVoucherCategory=document.getElementById("nameVoucherCategory").value;
    if(voucherCategoryID.length===0||nameVoucherCategory===0){
        alert("Hãy nhập lại thông tin cần thêm");
    }else{
        const response=await fetch('http://localhost:3000/admin/vouchercategory/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                voucherCategoryID,
                nameVoucherCategory
            })
        });
        const data = await response.json();
        console.log(data);
        if (data!=null) {
            window.location.href = "authentication-quanlyloai.html";
        } else {
            alert("Đăng ký thất bại. Vui lòng thử lại.");
        }
    }
    } catch (error) {
        console.log(error);
    }
}

// Hàm mở modal
function clickButtonCapnhatCategory() {
    var array = [];
    //lay cac checkbox duoc chon gan vao array
    $("input:checkbox[name=chk_all]:checked").each(function () {
      array.push($(this).val());
    });
  
    window.location.href = "authentication-sualoai.html?array=" + array;
  }
// async function updateCategory(){
//     try {
//         const queryString = window.location.search;
//         const urlParams = new URLSearchParams(queryString);
//         const aray = urlParams.get("array");
//         const voucherCategoryID = aray;
//         const response=await fetch(`http://localhost:3000/admin/vouchercategory/update`,{
//             method: 'PUT',
//             headers: {
//                  'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 voucherCategoryID,
//                 nameVoucherCategory
//             })
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
  
  