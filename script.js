// (Optional) Future animations can be added here
console.log("Portfolio Loaded Successfully");

// JS for profile preview
document.addEventListener("DOMContentLoaded", function () {
    const upload = document.getElementById("profileUpload");
    const profilePic = document.getElementById("profilePic");

    if (upload && profilePic) {
        upload.addEventListener("change", function (e) {
            const file = e.target.files[0];
            if (file) {
                profilePic.src = URL.createObjectURL(file);
            }
        });
    }
});






