$(document).ready(function () {
    var commentButton = $(".comment-button");
    var commentBox = $(".comment-box");
    commentButton.click(function () {
        $(this).closest('div').next(commentBox).toggle()
    });

    // Ajax
    // let count = 2;
    // $(".load-more-posts").click(function () {
    //     count += 2;
    //     $(".profile-posts").load(`/profile`, {
    //         count: count
    //     })
    // })

    let count = 2;
    $(".load-more-posts").click(function () {
        count += 2;
        $.ajax({
            type: 'post',
            url: '/profile',
            data: {count: count},
            dataType: 'text'
        })
            .done(function (data) {
                // $('h1').html(data.count);
                console.log(data);
            });
    })

});
