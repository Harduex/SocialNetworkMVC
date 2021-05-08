$(document).ready(function () {

    // Posts
    let page = 1;
    $(document).on('click', '.load-more-posts', function () {
        page++;
        $.ajax({
            url: "/profile",
            method: "POST",
            data: { page: page },
            dataType: "html"
        })
            .done(function (data) {
                $(".posts-container").append(data);
            });
    })

    var commentBox = $(".comment-box");
    $(document).on('click', '.comment-button', function () {
        $(this).closest('div').next(commentBox).toggle();
    });

    // Likes
    $(document).on('submit', '.like-post-form', function (e) {
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
    });

    // Like text
    $(document).on('click', '.like-post-button', function () {
        let text = $(this).find('span').text().trim();

        if (text === 'Like') {
            text = 'Dislike';
        } else {
            text = 'Like';
        }

        $(this).find('span').text(text);
    });

    // Post Likes Modal
    $(document).on('submit', '.post-likes-form', function (e) {
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
                dynamicTextColor();
            }
        })
    });

    // Comments
    $(document).on('submit', '.comment-post-form', function (e) {
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
                $('.comment-body-input').val('');

                let count = Number($(`#${id}_counter`).text().trim());
                count++;
                $(`#${id}_counter`).text(count);
            }
        })
    });

    // Delete post comment
    $(document).on('submit', '.delete-post-comment-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        if (confirm("Are you sure you want to delete this comment?")) {
            $.ajax({
                url: url,
                method: "POST",
                data: form.serialize(),
                dataType: "json",
                success: function (data) {
                    $(`#comment_${data?._id}`).remove();
                }
            });
        }
    });

    // Delete post
    $(document).on('submit', '.delete-post-form', function (e) {
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
