$(document).ready(function () {
    // Posts
    let page = 1;

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            if (window.location.pathname == '/user') {
                page++;
                const urlParams = new URLSearchParams(window.location.search);
                const username = urlParams.get('username');

                $.ajax({
                    url: "/user",
                    method: "POST",
                    data: {
                        page: page,
                        username: username
                    },
                    dataType: "html"
                })
                    .done(function (data) {
                        $(".posts-container").append(data);
                        // Create links from hashtags
                        transformHashtags();
                        transformUserTags();
                    });
            }
        }
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

