function activityShowHide() {
    let clicks = 0;
    $('#toeBeans').on('click',() => {
        
        if (clicks % 2 ==0){
            $('.activityContainer').css("display", "block");
            $('.activityContainer').slideDown(500);
        } else {
            $('.activityContainer').hide();
        }
        clicks+=1;
    });
}
