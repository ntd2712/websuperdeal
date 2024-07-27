async function addHinh(){
    try {
        const voucherImageID = document.getElementById("voucherImageID").value;
        const voucherImageUrl = document.getElementById("voucherImageUrl").files[0];
    
        // Create a new FormData object and append the slider image and slider ID to it
        const formData = new FormData();
        formData.append("voucherImageUrl", voucherImageUrl);
        formData.append("voucherImageID", voucherImageID);
    
        // Send the FormData object to the server using the fetch API
        const response = await fetch(`http://localhost:3000/admin/voucherimage/add`, {
          method: "POST",
          body: formData,
        });
        
        // Get the response data from the server
        const data = await response.json();
        console.log(data);
        // Check if the slider was added successfully
        window.location.href="authentication-quanlyhinh.html";
      } catch (error) {
        console.log(error);
      }
}