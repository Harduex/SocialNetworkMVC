$(document).ready(function () {
    // Posts
    let page = 1;
    $(document).on('submit', '#load-more-user-posts-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        page++;

        $.ajax({
            url: url,
            method: "POST",
            data: `${form.serialize()}&page=${page}`,
            dataType: "html",
            success: function (data) {
                $(".posts-container").append(data);

                // Create links from hashtags
                transformHashtags();
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

