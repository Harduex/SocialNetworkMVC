$(document).ready(function () {
    // Ajax
    let count = 5;
    $(".load-more-posts").click(function () {
        count += 5;
        $.ajax({
            url: "/profile",
            method: "POST",
            data: { count: count },
            dataType: "html"
        })
            .done(function (data) {
                $(".profile-posts").html(data);

                var commentButton = $(".comment-button");
                var commentBox = $(".comment-box");
                commentButton.click(function () {
                    $(this).closest('div').next(commentBox).toggle();
                });
            });
    })

});
