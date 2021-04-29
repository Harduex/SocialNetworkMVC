$(document).ready(function () {

    // Posts
    let count = 5;
    $(".load-more-posts").click(function () {
        count += 5;
        $.ajax({
            url: "/profile",
            method: "POST",
            data: { count: count },
            dataType: "html"
        })
            .done(function (data) {
                $(".profile-posts").html(data);

                var commentButton = $(".comment-button");
                var commentBox = $(".comment-box");
                commentButton.click(function () {
                    $(this).closest('div').next(commentBox).toggle();
                });

                // Likes
                $(".like-post-form").submit(function (e) {
                    e.preventDefault();
                    var form = $(this);
                    var url = form.attr('action');
                    $.ajax({
                        type: "POST",
                        url: url,
                        dataType: "json",
                        data: form.serialize(),
                        success: function (data) {
                            let id = (`${data.id}_likes`);
                            $(`#${id}`).text(data.likesCount);
                        }
                    })
                })

                // Comments
                $(".comment-post-form").submit(function (e) {
                    e.preventDefault();
                    var form = $(this);
                    var url = form.attr('action');
                    $.ajax({
                        type: "POST",
                        url: url,
                        dataType: "html",
                        data: form.serialize(),
                        success: function (data) {
                            let id = (/(id="(.*?)(\"))/g.exec(data)[2])
                            $(`#${id}`).replaceWith(data);
                            $('.comment-post-form')[0].reset();

                            let count = Number($(`#${id}_counter`).text().trim());
                            count++;
                            $(`#${id}_counter`).text(count);
                        }
                    })
                })

                // Like text
                $(".like-post-button").click(function () {
                    let text = $(this).find('span').text().trim();

                    if (text === 'Like') {
                        text = 'Dislike';
                    } else {
                        text = 'Like';
                    }

                    $(this).find('span').text(text);
                });

                // Post Likes Modal
                $(".post-likes-form").submit(function (e) {
                    e.preventDefault();
                    var form = $(this);
                    var url = form.attr('action');
                    $.ajax({
                        type: "POST",
                        url: url,
                        dataType: "html",
                        data: form.serialize(),
                        success: function (data) {
                            e.preventDefault();
                            $(`#post-likes-modal-body`).html(data);
                        }
                    })
                });

                // Delete post
                $(".delete-post-form").submit(function (e) {
                    e.preventDefault();
                    var form = $(this);
                    var url = form.attr('action');

                    if (confirm("Are you sure you want to delete this post?")) {
                        $.ajax({
                            url: url,
                            method: "POST",
                            data: form.serialize(),
                            dataType: "json",
                            success: function (data) {
                                $(`#post_${data?._id}`).remove();
                            }
                        });
                    }
                });



            });
    })

    // Likes
    $(".like-post-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            dataType: "json",
            data: form.serialize(),
            success: function (data) {
                let id = (`${data.id}_likes`);
                $(`#${id}`).text(data.likesCount);
            }
        })
    })

    // Comments
    $(".comment-post-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            dataType: "html",
            data: form.serialize(),
            success: function (data) {
                let id = (/(id="(.*?)(\"))/g.exec(data)[2])
                $(`#${id}`).replaceWith(data);
                $('.comment-post-form')[0].reset();

                let count = Number($(`#${id}_counter`).text().trim());
                count++;
                $(`#${id}_counter`).text(count);
            }
        })
    })

    // Like text
    $(".like-post-button").click(function () {
        let text = $(this).find('span').text().trim();

        if (text === 'Like') {
            text = 'Dislike';
        } else {
            text = 'Like';
        }

        $(this).find('span').text(text);
    });

    // Post Likes Modal
    $(".post-likes-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            dataType: "html",
            data: form.serialize(),
            success: function (data) {
                e.preventDefault();
                $(`#post-likes-modal-body`).html(data);
            }
        })
    });

    // Delete post
    $(".delete-post-form").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        if (confirm("Are you sure you want to delete this post?")) {
            $.ajax({
                url: url,
                method: "POST",
                data: form.serialize(),
                dataType: "json",
                success: function (data) {
                    $(`#post_${data?._id}`).remove();
                }
            });
        }
    });

});
