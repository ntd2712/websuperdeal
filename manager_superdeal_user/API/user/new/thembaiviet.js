async function thembaiviet(){
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get('array');
        const voucherID = aray;
        const newID =document.getElementById("newID").value;
        const title=document.getElementById("title").value;
    // const newImageUrl=document.getElementById("newImageUrl").files[0];
        const datePost = new Date().toISOString().split('T')[0];
        const content=document.getElementById("content").value;
    // const formData=new FormData();
    // formData.append("newID",newID);
    // formData.append("newImageUrl",newImageUrl);
    // formData.append("title",title);
    // formData.append("datePost",datePost);
    // formData.append("content",content);
    const response=await fetch(`http://localhost:3000/admin/new/add`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newID,
            voucherID,
            title,
            datePost,
            content
        })
    });
    const data=await response.json();
    //console.log(data);
    return data.newID;
    //window.location.href="baiviet.html";
    } catch (error) {
        console.log(error);
    }
}
async function themhinhbaiviet(){
    try {
        const newID= await thembaiviet();
        const newImageUrl=document.getElementById("newImageUrl");
        // console.log(newID);
        for(let i=0; i<newImageUrl.files.length;i++){
            const formData=new FormData();
            formData.append("newID",newID);
            formData.append("newImageUrl",newImageUrl.files[i]);
            //console.log(newImageUrl.files[i]);
            const response=await fetch(`http://localhost:3000/admin/newimage/add`,{
                method:"POST",
                body:formData
            });
            const data=await response.json();
        }      
        window.location.href="managaVoucher.html";
    } catch (error) {
        console.log(error);
    }
}
