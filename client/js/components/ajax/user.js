$(document).ready(function () {
    // Ajax

    // Posts
    let count = 5;
    $("#load-more-user-posts-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        count += 5;

        $.ajax({
            url: url,
            method: "POST",
            data: `${form.serialize()}&count=${count}`,
            dataType: "html",
            success: function (data) {
                $(".profile-posts").html(data);
            }
        })
    });
});

