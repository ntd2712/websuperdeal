async function loadImg(){
    try {
    const response = await fetch(`http://localhost:3000/admin/slider/getall`);
    const data = await response.json();
    console.log(data);
    const tableBody = document.querySelector("table.table-nvqldh tbody");
      tableBody.innerHTML = "";
      //console.log(data);
      //console.log(tableBody);
      data.forEach((slider) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${slider.sliderID}</td>
          <td><img src="../backend/uploads/slider/${slider.sliderImageUrl}" width="50" height="50" /></td>

          <td><input id="chk_all" name="chk_all" type="checkbox" value="${slider.sliderID}" /></td>
        `;
        //console.log(row);
        tableBody.appendChild(row);
        //console.log(user.phone);
      });
    } catch (error) {
        console.log(error);
    }
    
}
async function clickButtonThemSlider(){
    window.location.href="authentication-themslider.html";
}
async function clickButtonCapnhatSlider(){
    var array = [];
  //lay cac checkbox duoc chon gan vao array
  $("input:checkbox[name=chk_all]:checked").each(function () {
    array.push($(this).val());
  });
    window.location.href="authentication-updateslider.html?array=" + array;
};
loadImg()