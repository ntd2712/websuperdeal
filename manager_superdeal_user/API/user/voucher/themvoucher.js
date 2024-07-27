async function themvoucher(){
    try {
        const voucherID=document.getElementById("voucherID").value;
        const userID=localStorage.getItem("id");
        const voucherCategoryID=document.getElementById("voucherCategoryID").value;
        const nameVoucher=document.getElementById("voucherName").value;
        const price=document.getElementById("price").value;
        const percent=document.getElementById("percent").value*0.01;
        const promotionalPrice=price - (price * percent);
        const quantity=document.getElementById("quantity").value;
        const description=document.getElementById("description").value;
        const today = new Date();
        const startDate = today.toISOString().split('T')[0]; // Đặt ngày hiện tại
        document.getElementById("startDate").value = startDate;
        const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        const endDate = thirtyDaysAgo.toISOString().split('T')[0];
        document.getElementById("endDate").value = endDate;

        const statusvoucher="Còn hạn sử dụng"
        // const voucherImageUrl=document.getElementById("voucherImageUrl").files[0];
        const rating=document.getElementById("rating").value;
        // console.log(voucherID);
        // console.log(userID);
        // console.log(nameVoucher);
        // console.log(voucherCategoryID);
        // console.log(price);
        // console.log(percent);
        // console.log(promotionalPrice);
        // console.log(quantity);
        // console.log(startDate);
        // console.log(description);
        // console.log(endDate);
        // console.log(statusvoucher);
        // console.log(voucherImageUrl);
        const response=await fetch('http://localhost:3000/admin/voucher/add',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                voucherID,
                userID,
                voucherCategoryID,
                nameVoucher,
                price,
                percent,
                promotionalPrice,
                quantity,
                rating,
                description,
                startDate,
                endDate,
                statusvoucher,
               
                
            })
        });
        const data = await response.json();
        //console.log(data.voucherID);
        // localStorage.setItem("voucherID",data.voucherID);
        return data.voucherID;
       //  window.location.href="managaVoucher.html"
    } catch (error) {
        console.log(error);
    }

}
// async function themvoucher(){
//     try {
//         const voucherID = document.getElementById("voucherID").value;
//         const userID = localStorage.getItem("id");
//         const voucherCategoryID = document.getElementById("voucherCategoryID").value;
//         const nameVoucher = document.getElementById("voucherName").value;
//         const price = document.getElementById("price").value;
//         const percent = document.getElementById("percent").value;
//         const promotionalPrice = document.getElementById("promotional").value;
//         const quantity = document.getElementById("quantity").value;
//         const rating = document.getElementById("rating").value;
//         const description = document.getElementById("description").value;
//         const startDate = document.getElementById("startDate").value;
//         const endDate = document.getElementById("endDate").value;
//         const statusvoucher = document.getElementById("statusvoucher").value;
//         // const voucherImageUrl = document.getElementById("voucherImageUrl").files[0];
        

//         const formData = new FormData();
//         formData.append("voucherID", voucherID);
//         formData.append("userID", userID);
//         formData.append("voucherCategoryID", voucherCategoryID);
//         formData.append("nameVoucher", nameVoucher);
//         formData.append("price", price);
//         formData.append("percent", percent);
//         formData.append("promotionalPrice", promotionalPrice);
//         formData.append("quantity", quantity);
//         formData.append("rating", rating);
//         formData.append("description", description);
//         formData.append("startDate", startDate);
//         formData.append("endDate", endDate);
//         formData.append("statusvoucher", statusvoucher);
//         // formData.append("voucherImageUrl", voucherImageUrl);

//         const response = await fetch('http://localhost:3000/admin/voucher/add', {
//             method: 'POST',
//             body: formData
//         });
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//         //return data.voucherID
//         // window.location.href="managaVoucher.html"
//     } catch (error) {
//         console.log(error);
//     }
// }
async function themhinhvoucher(){
    try {
        const voucherID = await themvoucher();
        const voucherImageUrl=document.getElementById("voucherImageUrl");
        for(let i=0; i<voucherImageUrl.files.length;i++){
            const formData=new FormData();
            formData.append("voucherID",voucherID);
            formData.append("voucherImageUrl",voucherImageUrl.files[i]);
            //console.log(voucherImageUrl.files[i]);
            const response=await fetch(`http://localhost:3000/admin/voucherimage/add`,{
                method:"POST",
                body:formData
            });
            const data=await response.json();
        }      
        // console.log(data);
     
        window.location.href="managaVoucher.html";
        } catch (error) {
            console.log(error);
        }

}

async function hienloai(){
    try {
        const response = await fetch('http://localhost:3000/admin/vouchercategory/getall');
        const data = await response.json();
        //console.log(data);
       
        const selectElement = document.getElementById('voucherCategoryID');
        data.forEach(category => {
            const optionElement = document.createElement('option');
            // console.log(category.voucherCategoryID);
            // console.log(category.nameVoucherCategory);
            optionElement.value = category.voucherCategoryID;
            optionElement.text = category.nameVoucherCategory;
            selectElement.appendChild(optionElement);
        });
        
       //console.log(selectElement);
    } catch (error) {
        console.log(error);
    }

}
async function xoavoucher(){

}

hienloai();