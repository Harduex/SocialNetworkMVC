$(document).ready(function () {
    // Ajax

    // Posts
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

    $(".like-post-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            dataType: "html",
            data: form.serialize(),
            success: function (data) {
                // console.log(data);
                let id = (/(id="(.*?)(\"))/g.exec(data)[2])
                console.log(id);
                $(`#${id}`).replaceWith(data);
            }
        })
        // .done(function (data) {
        //     $(".profile-posts").html(data);

        //     var commentButton = $(".comment-button");
        //     var commentBox = $(".comment-box");
        //     commentButton.click(function () {
        //         $(this).closest('div').next(commentBox).toggle();
        //     });
        // });
    })

});
