$(document).ready(function () {
    var submitIcon = $('.searchbar-icon');
    var inputBox = $('.searchbar-input');
    var searchbar = $('.searchbar');
    var isOpen = false;
    submitIcon.on('click', function () {
        if (isOpen == false) {
            searchbar.addClass('searchbar-open');
            inputBox.focus();
            isOpen = true;
        } else {
            if (inputBox.val() !== '') {
                submitIcon.attr("id", "search-form-submit");
            } else {
                searchbar.removeClass('searchbar-open');
                inputBox.focusout();
                isOpen = false;
            }
        }
    });
    $(document).on('click', '#search-form-submit', function () {
        $('.searchbar').submit();
    });
    submitIcon.mouseup(function () {
        return false;
    });

    searchbar.mouseup(function () {
        return false;
    });
    $(document).mouseup(function () {
        if (inputBox.val() === '') {
            searchbar.removeClass('searchbar-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
});
function buttonUp() {
    var inputVal = $('.searchbar-input').val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
        $('.searchbar-icon').css('display', 'none');
    } else {
        $('.searchbar-input').val('');
        $('.searchbar-icon').css('display', 'block');
    }
}

// Search autocomplete
$(document).on('keyup', '.searchbar-input', function () {

    var keyword = $.trim($(this).val());

    if (keyword !== '' && keyword.length <= 10) {
        $.ajax({
            type: "POST",
            url: '/search',
            dataType: "json",
            data: { keyword: keyword },
            success: function (data) {
                let results = data.results.map(({ username }) => username);
                // console.log(results);
                $(".searchbar-input").autocomplete({
                    source: results
                });
            }
        })
    }

});
