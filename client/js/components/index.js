$(document).ready(function () {
    // Ajax
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
