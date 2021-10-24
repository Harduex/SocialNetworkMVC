$(document).ready(function () {
    // Ajax
    // $(document).on('click', '.update-feed-posts', function () {
    //     $.ajax({
    //         url: "/posts",
    //         method: "POST",
    //         data: { page: 1 },
    //         dataType: "html"
    //     })
    //         .done(function (data) {
    //             $(".posts-container").html(data);
    //         });
    // });

    setInterval(function () {
        $.ajax({
            url: "/posts",
            method: "POST",
            data: { page: 1 },
            dataType: "html"
        }).done(function (data) {
            $(".posts-container").html(data);
        });
    }, 60 * 1000);

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

    var scrollElement = document.querySelector('.user-feed');
    var root = new Hammer(scrollElement);
    root.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    root.on("pandown", function (event) {
        console.log(event.type + " gesture detected.");
        $(scrollElement).removeClass('animate__animated animate__bounce animate__faster');
        if (event.isFinal) {
            console.log("Stopped pan");
            $(scrollElement).addClass('animate__animated animate__bounce animate__faster');
            $.ajax({
                url: "/posts",
                method: "POST",
                data: { page: 1 },
                dataType: "html"
            }).done(function (data) {
                $(".posts-container").html(data);
            });
        }
    });

});
