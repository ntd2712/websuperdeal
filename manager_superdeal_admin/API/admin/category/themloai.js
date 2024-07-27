
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
async function xoaLoai(){
    try {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        // Lặp qua từng checkbox và kiểm tra xem nó đã được chọn hay chưa
        var selectedRows = [];
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
            // Nếu checkbox đã được chọn, lấy mã đơn từ cột tương ứng và thêm vào mảng selectedRows
            var row = checkboxes[i].parentNode.parentNode;
            var maDon = row.querySelector("td:nth-child(1)").textContent;
            selectedRows.push(maDon);
          }
        }
        console.log(selectedRows);
       
        selectedRows.forEach(async (voucherCategoryID) => {
          const response = await fetch(`http://localhost:3000/admin/vouchercategory/delete/${voucherCategoryID}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                voucherCategoryID
                 
              })
          });
          const data = await response.json();
      });
      window.location.replace("authentication-quanlyloai.html");
      } catch (error) {
        console.log(error);
      }
    };

