$(document).ready(function () {
    // Ajax
    let count = 10;
    $(document).on('click', '.load-more-feed-posts', function () {
        count += 10;
        $.ajax({
            url: "/posts",
            method: "POST",
            data: { count: count },
            dataType: "html"
        })
            .done(function (data) {
                $(".timeline-posts").html(data);
            });
    });

});

