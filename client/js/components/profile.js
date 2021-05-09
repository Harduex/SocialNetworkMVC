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
    loadFile(e)
});

// Color picker
$(".color-picker-hidden").change(function () {
    $(".color-picker-button").css('background', $(this).val());
    dynamicTextColor();
});

// Dynamic text color
function getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

function dynamicTextColor() {
    let bgRgb = $('.dynamic-text-bg-color').css("background-color");
    let ctx = document.createElement('canvas').getContext('2d');
    ctx.strokeStyle = bgRgb;
    let bgHexColor = ctx.strokeStyle;
    let textColor = getContrastYIQ(bgHexColor);
    $('.dynamic-text-color').css('color', textColor);
    console.log(textColor);
}

// Toggle TImeline
$(".toggle-timeline").change(function () {
    $(".posts-container").toggleClass('grid-timeline');
});


$(document).ready(function () {
    dynamicTextColor();
});
