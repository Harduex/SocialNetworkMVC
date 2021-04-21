$(document).ready(function () {
    var commentButton = $(".comment-button");
    var commentBox = $(".comment-box");
    commentButton.click(function () {
        $(this).closest('div').next(commentBox).toggle()
    });

});
