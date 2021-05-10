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

    // Edit post
    $(document).on('submit', '.edit-post-form', function (e) {
        e.preventDefault();
        var data = $(this).serializeArray();
        let postId = data[0].value;

        $(`#edit-post-${postId}-field`).replaceWith(function () {
            if (this.className === 'text-white') {
                return `<input type="text" class='text-black' value='${this.innerText}' name='edited-post-${postId}-field' id='edit-post-${postId}-field' />`
            } else {
                $.ajax({
                    url: `/post/edit/${postId}`,
                    method: "POST",
                    data: { newValue: this.value },
                    dataType: "json",
                });
                return `<span class="text-white" id='edit-post-${postId}-field'>
                    <a href='/post/get/${postId}'>
                        ${this.value}
                    </a>
                     </span>`
            }
        });
    });

    $(document).on('click', '.edit-post-toggle', function () {
        console.log(this);
        $(this).find('i').toggleClass('fa-edit fa-check');
    });

    // Edit post comment
    $(document).on('submit', '.edit-post-comment-form', function (e) {
        e.preventDefault();
        var data = $(this).serializeArray();
        let postId = data[0].value;
        let commentId = data[1].value;

        $(`#edit-comment-${commentId}-field`).replaceWith(function () {
            if (this.className === 'text-white') {
                return `<input type="text" class='text-black' value='${this.innerText}' name='edited-comment-${commentId}-field' id='edit-comment-${commentId}-field' />`
            } else {
                $.ajax({
                    url: `/post/comment/edit/${commentId}`,
                    method: "POST",
                    data: { comment: this.value, postId: postId, commentId: commentId },
                    dataType: "json",
                });
                return `<span class="text-white" id='edit-comment-${commentId}-field'>
                        ${this.value}
                        </span>`
            }
        });
    });

});

