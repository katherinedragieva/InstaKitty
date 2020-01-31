function imagesOnFocus () {
    $('article img').on('click', event => {
        $("#imageModal").css("display","block");
        $('#imageModal').append($(event.target).clone());
    });
};

function removeFocus () {
    $('.close').on('click', () => {
    $('#imageModal').hide();
    });
}
function postComment () {
    $('#postBtn').on('click', () => {
        let inputVal = $('#commentHolder').val();
        $('#minePic').css("display", "block");
        $('#mineQuote').text(inputVal);
        $('#commentHolder').val('');
    });
}