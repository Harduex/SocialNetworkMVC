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
    $(document).on('click', '.load-more-feed-posts', function () {
        page++;
        $.ajax({
            url: "/posts",
            method: "POST",
            data: { page: page },
            dataType: "html"
        })
            .done(function (data) {
                $(".posts-container").append(data);
            });
    });

});
