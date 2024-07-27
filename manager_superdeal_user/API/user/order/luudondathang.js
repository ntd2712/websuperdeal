async function luugiohang(){
    try {
    const userID=localStorage.getItem("id");
    const dateOrder = new Date().toISOString().slice(0, 10);
    const statusOrder="Đang xử lý";
    const orderID=Math.floor(1000 + Math.random() * 9000);
    // console.log(dateOrder);
    // console.log(statusOrder);
      const response = await fetch(`http://localhost:3000/order/add`,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              orderID,
              userID,
              dateOrder,
              statusOrder
          })
      }
      );
      const data = await response.json();
      if(typeof(Storage)!="undefined"){
        localStorage.setItem("idorder",data.orderID);
    }
      //console.log(data);
      return data.orderID;
    } catch (error) {
        console.log(error)
    }
    
  }