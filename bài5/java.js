// Hiển thị thông báo lỗi khi nhập sai tên đăng nhập hoặc mật khẩu
function showError(message) {
    $(".error-message").text(message);
    $(".error-message").show();
}

// Xử lý sự kiện submit form
$("#login-form").submit(function(e) {
    e.preventDefault();

    var username = $("#username").val();
    var password = $("#password").val();

    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === "" || password === "") {
        showError("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    <div class="contact-form">
    <form action="#" onsubmit="return confirmFormSubmit();">
        <label for="fullname">Họ và tên:</label>
        <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên">
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Nhập email">
        <br>
        <label for="phone">Số điện thoại:</label>
        <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại">
        <br>
        <label for="message">Nội dung:</label>
        <textarea id="message" name="message" rows="5" placeholder="Nhập nội dung"></textarea>
        <br>
        <button type="submit">Gửi</button>
    </form>
</div>
    
});
