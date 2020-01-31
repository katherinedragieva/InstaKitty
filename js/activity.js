function activityShowHide() {
    $('#toeBeans').on('click',() => {
        let clicks = $(this).data('clicks');
        if (clicks) {
            $('.activityContainer').show();
        } else {
            $('.activityContainer').hide();
        }
        $(this).data("clicks", !clicks);
    });
}
