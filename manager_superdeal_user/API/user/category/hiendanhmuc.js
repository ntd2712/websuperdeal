async function hiendanhsachdanhmuc(){
    const response = await fetch(`http://localhost:3000/admin/vouchercategory/getall`);
    const data = await response.json();
    console.log(data);
    const listdanhmuc=document.getElementById("list_danhmuc");
    listdanhmuc.innerHTML="";
    data.forEach((item)=>{
        const item_danhmuc = document.createElement("li");
        const a_danhmuc = document.createElement("a");
        a_danhmuc.href = "shop-grid.html";
        a_danhmuc.textContent = item.nameVoucherCategory; // Add this line
        item_danhmuc.appendChild(a_danhmuc);
        listdanhmuc.appendChild(item_danhmuc);
    })
}
hiendanhsachdanhmuc();