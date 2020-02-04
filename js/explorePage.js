function imagesOnFocus () {
    $('article .postImages').on('click', event => {
        $("#modal").css("display","block");
        // $('#imageModal').append($(event.target).clone());
        $('#imageModal').html($(event.target).clone());
    });
};

function removeFocus () {
    $('.close').on('click', () => {
    $('#modal').hide();
    });
}
function postComment () {
    $('#postBtn').on('click', () => {
        let inputVal = $('#commentHolder').val();
        $('#myProfilePic').css("display", "block");
        $('#mineQuote').text(inputVal);
        $('#commentHolder').val('');
    });
}