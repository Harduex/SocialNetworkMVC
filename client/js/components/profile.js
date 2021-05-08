// New profile image preview
function loadFile(event) {
    console.log('called');
    var output = document.getElementById('change-profile-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};

$("#upload-profile-image-input").change(function (e) {
    console.log(e);
    loadFile(e)
});
