var popup = new Object(); // setting
/*
move : 方向 ( up down left right)
*/
(function($) {
    $.fn.extend({
        popup: function(array) {

            popup = array;
            var title = $(this).attr('title');

            $(this).hover(function() {
                $(this).attr('title', '');
                $(this).append("<div class='popup-msg'><div>");

                switch (popup.move) {

                    case 'up':
                        $('.popup-msg').css('top', '-50px').css('left', '-40px')
                            .css('-webkit-animation-name', 'popup-up')
                            .css('-moz-animation-name', 'popup-up')
                            .css('animation-name', 'popup-up');
                        break;

                    case 'down':
                        $('.popup-msg').css('top', '25px').css('left', '-40px')
                            .css('-webkit-animation-name', 'popup-down')
                            .css('-moz-animation-name', 'popup-down')
                            .css('animation-name', 'popup-down');
                        break;

                    case 'left':
                        $('.popup-msg').css('top', '-15px').css('left', '-135px')
                            .css('-webkit-animation-name', 'popup-left')
                            .css('-moz-animation-name', 'popup-left')
                            .css('animation-name', 'popup-left');
                        break;

                    case 'right':
                        $('.popup-msg').css('top', '-15px').css('left', '50px')
                            .css('-webkit-animation-name', 'popup-right')
                            .css('-moz-animation-name', 'popup-right')
                            .css('animation-name', 'popup-right');
                        break;

                    default:
                        $('.popup-msg').css('top', '25px').css('left', '-40px')
                            .css('-webkit-animation-name', 'popup-down')
                            .css('-moz-animation-name', 'popup-down')
                            .css('animation-name', 'popup-down');

                }

                $(this).children('.popup-msg').text(title).hide();

                '以每字px大小為單位 for IE/FIREFOX'
                var fontWidth = $(this).children('.popup-msg').css('font-size').replace('px','');
                var msgWidth = title.length * fontWidth;
                $(this).children('.popup-msg').css('width', msgWidth).fadeIn(500);

            }, function() {
                $(this).children().remove();
            });
        }
    });
})(jQuery);
