async function register() {
    try {
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const birthday = document.getElementById("birthday").value;
        const address = document.getElementById("address").value;
        const gender = document.querySelector('input[name="male"]:checked').value;
        const rewardPoint = ""; // Giả định giá trị mặc định vì không có trong form
        const memberName = "Thành viên"; // Giả định giá trị mặc định vì không có trong form
        const status = "Đang hoạt động"; // Giả định giá trị mặc định vì không có trong form
        const roleID = 1; // Giả định roleID là 2 cho người dùng mới đăng ký
       
        
        // console.log(phone);
        // console.log(password);
        // console.log(name);
        // console.log(email);
        // console.log(birthday);
        // console.log(address);
        // console.log(gender);
        
        if (phone.length === 0 || password.length === 0) {
            alert("Số điện thoại và mật khẩu không được để trống.");
            return;
        } else {
            const response = await fetch('http://localhost:3000/user/adminKH', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone,
                    password,
                    name,
                    email,
                    birthday,
                    address,
                    gender,
                    rewardPoint,
                    memberName,
                    status,
                    roleID
                })
            });
            const data = await response.json();
            console.log(data);

            if (data!=null) {
                window.location.href = "index.html";
            } else {
                alert("Đăng ký thất bại. Vui lòng thử lại.");
            }
        }
    } catch (error) {
        console.log(error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại 11111.");
    }
};