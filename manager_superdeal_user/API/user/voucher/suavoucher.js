async function suavoucher() {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const aray = urlParams.get("array");
        const voucherID = aray;
        const nameVoucher=document.getElementById("voucherName").value;
        const price=document.getElementById("price").value;
        const percent=document.getElementById("percent").value*0.01;
        const promotionalPrice=price - (price * percent);
        const quantity=document.getElementById("quantity").value;
        const description=document.getElementById("description").value;
        const startDate=document.getElementById("startDate").value;
        const endDate=document.getElementById("endDate").value;
        const data={
            nameVoucher,
            price,
            percent,
            promotionalPrice,
            quantity,
            description,
            startDate,
            endDate,
            voucherID
        }
        const response=await fetch(`http://localhost:3000/user/voucher/updateVoucher`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
      
          const result = await response.json();
          console.log(result);
          window.location.href="managaVoucher.html";
    } catch (error) {
        console.log(error);
    }
}