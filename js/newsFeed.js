function attachEvents () {} {
    (function optionMenu () {
        $('.moreOptions').on('click', () => {
            $('article, header').addClass('blurItems');
            $('.optionMenu').fadeIn(300).css("dispay", "block");
            
        });
    }) ();
   
    (function mouseLeave () {
        $('.optionMenu').on('click', () => {
            $('header, article').removeClass('blurItems');
            $('.optionMenu').fadeOut('slow');
        });
    }) ();

    (function likes() {
        $('.likes').on('click', event => {
            let $postFooter = $(event.target).parent().parent();
            let postLikes = $postFooter.find('.overAllLikes').text().replace(',', '');
            let $likesSection = $postFooter.find('.likes');
            if ($likesSection.hasClass('unLiked')) {
                postLikes = parseInt(postLikes) + 1;
                postLikes = postLikes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                $postFooter.find('.overAllLikes').text(postLikes);
                
                $likesSection.removeClass('unLiked');
                $likesSection.addClass('liked');
            } else {
                
                postLikes = parseInt(postLikes) - 1;
                postLikes = postLikes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                $postFooter.find('.overAllLikes').text(postLikes);

                $likesSection.removeClass('liked');
                $likesSection.addClass('unLiked');
            }
        });
    })();
}

