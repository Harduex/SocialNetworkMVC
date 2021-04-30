$(document).ready(function () {
    // Posts
    let count = 5;
    $(document).on('submit', 'load-more-user-posts-form', function (e) {
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

    // Follow user
    $(document).on('submit', '.follow-user-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            url: url,
            method: "POST",
            dataType: "json",
            success: function (data) {
                let currentButton = form.find('.follow-user-button');

                if (currentButton.text() === 'follow') {
                    currentButton.text('unfollow');
                } else {
                    currentButton.text('follow');
                }
            }
        })
    });
});

