async function hienchitietbaiviet(){
    try {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const aray = urlParams.get('array');
          const newID = aray;
          const response=await fetch(`http://localhost:3000/admin/new/getiddetail/${newID}`);
          const data = await response.json();
          const dataNew=data[0];
          console.log(dataNew);
          document.getElementById("newID").value=dataNew.newID;
          document.getElementById("title").value=dataNew.title;
          const datePost = new Date(dataNew.datePost);
          document.getElementById("datePost").value = datePost.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
          document.getElementById("content").value=dataNew.content;
          const imglist =document.getElementById("imglist");
          imglist.innerHTML='';
          data.forEach(item => {
            const img = document.createElement('img');
            img.src = `../backend/uploads/newimage/${item.newImageUrl}`;
            img.alt = `Image ${item.newImageUrl}`;
            img.id ="img_new";
            // img.width = "300px";
            // img.height = 'auto';
            imglist.appendChild(img);
          });
    } catch (error) {
        console.log(error);
    }
}
hienchitietbaiviet()