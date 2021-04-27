$(document).ready(function () {
    // Ajax
    let count = 10;
    $(".load-more-feed-posts").click(function () {
        count += 10;
        $.ajax({
            url: "/posts",
            method: "POST",
            data: { count: count },
            dataType: "html"
        })
        .done(function (data) {
            $(".timeline-posts").html(data);

            var commentButton = $(".comment-button");
            var commentBox = $(".comment-box");
            commentButton.click(function () {
                $(this).closest('div').next(commentBox).toggle();
            });
        });
    })

});
