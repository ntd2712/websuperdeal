async function clickButtonThemLogo(){
    window.location.href="authentication-themlogo.html";
}
async function addLogo() {
    try {
      const logoID = document.getElementById("logoID").value;
      const logoImg = document.getElementById("logoImg").files[0];
  
      // Create a new FormData object and append the slider image and slider ID to it
      const formData = new FormData();
      formData.append("logoImg", logoImg);
      formData.append("logoID", logoID);
  
      // Send the FormData object to the server using the fetch API
      const response = await fetch(`http://localhost:3000/admin/logo/add`, {
        method: "POST",
        body: formData,
      });
      
      // Get the response data from the server
      const data = await response.json();
      console.log(data);
      // Check if the slider was added successfully
      if (data.success) {
        alert("Slider added successfully!");
        // You can also refresh the page or update the UI here
      } else {
        alert("Error adding slider: " + data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

