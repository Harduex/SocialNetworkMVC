$(document).ready(function () {

    $("#follow-user-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            url: url,
            method: "POST",
            dataType: "html",
            success: function (data) {
                // $(".profile-posts").html(data);

                if ($(".follow-user-button").text() === 'follow') {
                    $(".follow-user-button").text('unfollow');
                } else {
                    $(".follow-user-button").text('follow');
                }
            }
        })
    });

});

