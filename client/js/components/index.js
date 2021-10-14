$(document).ready(function () {
    // Ajax
    $(document).on('click', '.update-feed-posts', function () {
        $.ajax({
            url: "/posts",
            method: "POST",
            data: { page: 1 },
            dataType: "html"
        })
            .done(function (data) {
                $(".posts-container").html(data);
            });
    });

    let page = 1;

    $(window).scroll(function () {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            if (window.location.pathname == '/') {
                page++;
                $.ajax({
                    url: "/posts",
                    method: "POST",
                    data: { page: page },
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

});
