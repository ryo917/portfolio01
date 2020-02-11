$(function(){
    /*共通ページ*/
    /*テーマ表示*/
    $('.subject img').hover(
    function() {
        $(this).next('h2').fadeIn();
    },
    function(){
        $(this).next('h2').show();
    });

    /*medical.html*/
    /*一般歯科の画像にマウスを乗せた場合*/
    var $ippan = $('#ippan').find('p');

    $('#ippan img').hover(
    function() {
        $ippan.css('color','blue');
    },
    function() {
        $ippan.css('color','black');
    });

    /*矯正画像にマウスを乗せた場合*/
    var $kyosei = $('#kyosei').find('p');

    $('#kyosei img').hover(
    function() {
        $kyosei.show();
    },
    function() {
        $kyosei.hide();
    });

    /*インプラント画像にマウスを乗せた場合*/
    var $inplant = $('#inplant').find('p');

    $('#inplant img').hover(
    function() {
        $inplant.fadeIn('slow');
    },
    function() {
        $inplant.fadeOut('slow');
    });

    /*ホワイトニング画像にマウスを乗せた場合*/
    var $whitening = $('#whitening').find('p');

    $('#whitening img').hover(
    function(){
        $whitening.slideDown();
    },
    function(){
        $whitening.slideUp();
    });

    /*その他画像にマウスを乗せた場合*/
    var $other = $('#other').find('p');

    $('#other img').hover(
    function(){
        $other.css('display','block').animate({fontSize:'20px'},500);
    },
    function(){
        $other.animate({fontSize:'16px'}).hide();
    });

    /*contact.html*/
    /*文字数カウント*/
    $('#count-text').keyup(function(){

        var count = $(this).val().length;

        $('.show-count-text').text(count);
    });

    /*お問い合わせフォーム*/
    const MSG_TEXT_MAX = '20文字以内で入力してください。';
    const MSG_EMPTY = '入力必須です。';
    const MSG_EMAIL_TYPE = 'E-mailの形式ではありません。';
    const MSG_TEXTAREA_MAX = '1000文字以内で入力してください。';

    /*名前フォーム*/
    $('.valid-text').keyup(function(){

        var form_g = $(this).closest('.form-group');

        if ( $(this).val().length === 0 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        } else if( $(this).val().length > 20 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_TEXT_MAX);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });
    
    /*E-mailフォーム*/
    $('.valid-email').keyup(function(){
        
        var form_g = $(this).closest('.form-group');
        
        if( $(this).val().length === 0 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        } else if ($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMAIL_TYPE);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });
    
    /*テキストエリアフォーム*/
    $('.valid-textarea').keyup(function(){
        
        var form_g = $(this).closest('.form-group');
        
        if( $(this).val().length === 0 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        } else if ( $(this).val().length > 1000 ){
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });
});
