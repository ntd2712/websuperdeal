async function themvoucher(){
    try {
        const voucherID=document.getElementById("voucherID").value;
        const userID=localStorage.getItem("id");
        console.log(userID);
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
        const thirtyDaysAgo = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
        const endDate = thirtyDaysAgo.toISOString().split('T')[0];
        document.getElementById("endDate").value = endDate;
        const statusvoucher="Còn hạn sử dụng"
        const rating=document.getElementById("rating").value;
       
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
        console.log(data.voucherID);// chya lai, coi data cua no la cai gi
        // localStorage.setItem("voucherID",data.voucherID);
        return data.voucherID;
       //  window.location.href="managaVoucher.html"
    } catch (error) {
        console.log(error);
    }

};

async function themhinhvoucher(){
    try {
        const voucherID= await themvoucher();
        const voucherImageUrl=document.getElementById("voucherImageUrl");
        for(let i=0; i<voucherImageUrl.files.length;i++){
            const formData=new FormData();
            formData.append("voucherID",voucherID);
            formData.append("voucherImageUrl",voucherImageUrl.files[i]);
           
            const response=await fetch(`http://localhost:3000/admin/voucherimage/add`,{
                method:"POST",
                body:formData
            });
            const data=await response.json();
            console.log(data);//no them dc ko
        }      
        window.location.href="managaVoucher.html"; //0k
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