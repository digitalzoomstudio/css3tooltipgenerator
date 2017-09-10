jQuery(document).ready(function($){






    var curated_url = '';
    var curated_url_1 = '';

    var aux = String(window.location.href).split('?');

    curated_url = aux[0];

    aux = String(curated_url).split('/');

    curated_url = aux[aux.length-1];

    // console.info('curated_url - ',curated_url);


    if(curated_url==''){
        curated_url='index.html';
    }


    var target = get_query_arg(window.location.href,'goto');

    // console.info('target - ',target);


    setTimeout(function(){

        $(document).on('change','*[name=transition]', function(){

            var _c = $('*[name=always_visible]');
            _c.prop('checked',true);
            _c.trigger('change');

            _c.next().trigger('click');

            console.info('$(\'*[name=always_visible]\') - ',$('*[name=always_visible]'));

            console.info('ceva');

        })
    },1000);

    $(document).on('change','.preview-changer', function(){


        var _t = $(this);

        // console.info(_t);

        regulate_main_tooltip();



    });



    function regulate_main_tooltip(){
        var lab = '';

        var fout ='';

        var _c = null;

        var _mainTooltip = $('.main-tooltip').eq(0);


        fout+='&#x3C;span class=&#x22;js dzstooltip-con&#x22; &#x3E;&#x3C;span class=&#x22;tooltip-indicator&#x22;&#x3E;insert anywhere&#x3C;/span&#x3E; &#x3C;span class=&#x22;dzstooltip main-tooltip ';

        lab = 'always_visible';
        _c = $('*[name='+lab+']').eq(0);

        _mainTooltip.removeClass('active style-rounded style-default color-dark-light color-light-dark arrow-top arrow-bottom arrow-left arrow-right talign-start talign-center talign-end transition-scaledown transition-scaleup transition-slidedown');

        // console.info(_c);
        if(_c.prop('checked')){

            _mainTooltip.addClass('active');
            fout+=' active';
        }else{

        }


        lab = 'style';
        _c = $('*[name='+lab+']').eq(0);

        _mainTooltip.addClass(_c.val());
        fout+=' '+_c.val();







        lab = 'color';
        _c = $('*[name='+lab+']').eq(0);

        _mainTooltip.addClass(_c.val());
        fout+=' '+_c.val();






        lab = 'arrow';
        _c = $('*[name='+lab+']').eq(0);

        _mainTooltip.addClass(_c.val());
        fout+=' '+_c.val();


        lab = 'talign';
        _c = $('*[name='+lab+']').eq(0);

        _mainTooltip.addClass(_c.val());
        fout+=' '+_c.val();





        lab = 'transition';
        _c = $('*[name='+lab+']').eq(0);

        _mainTooltip.addClass(_c.val());
        fout+=' '+_c.val();


        fout+=' dims-set  &#x22; style=&#x22;width: 280px;&#x22;&#x3E;&#x3C;span class=&#x22;dzstooltip--inner&#x22;&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.&#x3C;/span&#x3E; &#x3C;/span&#x3E;&#x3C;/span&#x3E;';

        $('.output-div').html(fout);


    }


    if(target){

        setTimeout(function(){

            $('html, body').animate({
                scrollTop: $("#"+target).offset().top - window.innerHeight/4
            }, 400);




        },1000);
    }



    $(window).bind('resize', handle_resize);
//    console.info($('.preseter-field'))
    $('.preseter-field').bind('change', submit_preseter);
    function handle_resize(e){
        $('.maindemopadder').height($('.mcon-maindemo').outerHeight(false));
        if($('.mcon-maindemo').css('position')!='fixed'){
            $('.maindemopadder').height(0);
        }
    }
    $(window).scroll(function() {
        var _w = $(this);
        var st = $(window).scrollTop();
        //console.log(_w, _w.scrollTop());



        if(st>200){
            $('.mcon-mainmenu').addClass('left-top');
        }else{

            $('.mcon-mainmenu').removeClass('left-top');
        }
    });






    $(document).on('click', '.responsive-selector,.the-feature-con', handle_mouse);

    function handle_mouse(e) {
        var _t = $(this);

        console.info('cebva');

        if (_t.hasClass('responsive-selector')) {

            if (_t.parent().hasClass('menu-opened')) {

                _t.parent().removeClass('menu-opened');
            } else {

                _t.parent().addClass('menu-opened');
            }
        }

        if (_t.hasClass('the-feature-con')) {


            var aux = String(_t.attr('href')).split('?');

            var curated_url_t = aux[0];


            // console.error(curated_url_t);
            if(curated_url_t == curated_url){


                var target = get_query_arg(_t.attr('href'),'goto');

                console.info('target - ',target);



                $('html, body').animate({
                    scrollTop: $("#"+target).offset().top - window.innerHeight/4
                }, 400);

                return false;
            }

        }
    }

})


function get_query_arg(purl, key){
    if(purl.indexOf(key+'=')>-1){
        //faconsole.log('testtt');
        var regexS = "[?&]"+key + "=.+";
        var regex = new RegExp(regexS);
        var regtest = regex.exec(purl);


        if(regtest != null){
            var splitterS = regtest[0];
            if(splitterS.indexOf('&')>-1){
                var aux = splitterS.split('&');
                splitterS = aux[1];
            }
            var splitter = splitterS.split('=');

            return splitter[1];

        }
        //$('.zoombox').eq
    }
}



function submit_preseter(e){

    var auxurl = '';
    if(jQuery('input[name="disable_volume"]').prop('checked')==true){
        auxurl = add_query_arg(window.location.href, 'disable_volume','on');
    }else{
        auxurl = add_query_arg(window.location.href, 'disable_volume','off');
    };
    if(jQuery('input[name="disable_scrub"]').prop('checked')==true){
        auxurl = add_query_arg(auxurl, 'disable_scrub','on');
    }else{
        auxurl = add_query_arg(auxurl, 'disable_scrub','off');
    };
    if(jQuery('input[name="disable_views"]').prop('checked')==true){
        auxurl = add_query_arg(auxurl, 'disable_views','on');
    }else{
        auxurl = add_query_arg(auxurl, 'disable_views','off');
    };


    auxurl = add_query_arg(auxurl, 'rating',jQuery('.option-selecter-object.active[data-label*="rating-"]').attr('data-value'));


    // auxurl = add_query_arg(auxurl, 'skinwave-mode',jQuery('.option-selecter-object.active[data-label*="skinwave-mode-"]').attr('data-value'));



    window.location.href = auxurl;
}



























// -- <img  class="needs-loading " data-src="img/e1.jpg" style="width:100%;" alt="display modes"/>
window.dzs_check_lazyloading_images_use_this_element_css_top_instead_of_window_scroll = null;
window.dzs_check_lazyloading_images_toberesized_arr = [];
window.dzs_check_lazyloading_images = function(){
    //console.info('dzs_check_lazyloading_images()');

    var st = jQuery(window).scrollTop();

    var wh = jQuery(window).height();

    //console.info(st,wh);

    if(window.dzs_check_lazyloading_images_use_this_element_css_top_instead_of_window_scroll){

        st = -(parseInt(window.dzs_check_lazyloading_images_use_this_element_css_top_instead_of_window_scroll.css('top'),10));
    }

    //console.info(st);



    jQuery('img[data-src],.divimage[data-src]:not(.dzsparallaxer--target)').each(function(){
        var _t = jQuery(this);
        // console.info(_t,_t.offset().top,st+wh);


        if(_t.offset().top<=st+wh){


            var auximg = new Image();



            auximg.onload = function(){


                //console.info(this,_t,_t.attr('data-src'));

                if(_t.attr('data-src')){

                    var aux34 = _t.attr('data-src');


                    if(_t.hasClass('divimage')){
                        _t.css('background-image','url('+aux34+')');

                        if(_t){

                            window.dzs_check_lazyloading_images_toberesized_arr.push(_t);

                            _t.attr('data-responsive_ratio',this.naturalHeight / this.naturalWidth);
                        }

                        window.dzs_check_lazyloading_image_resize();
                    }else{
                        _t.attr('src', aux34);
                    }

                    _t.attr('data-src', '');
                    _t.addClass('loaded');
                }

                if(_t.hasClass('set-height-auto-after-load')){

                    _t.css('height','auto');
                }


                //console.info(_t.parent().parent().parent().parent().parent(), _t.parent().parent().parent().parent().parent().hasClass('.mode-isotope'))
                if(_t.parent().parent().parent().parent().parent().hasClass('mode-isotope')){
                    //console.info('ceva');

                    var _c = _t.parent().parent().parent().parent().parent();
                    if(_c.get(0) && _c.get(0).api_relayout_isotope){
                        _c.get(0).api_relayout_isotope();
                    }
                }



            }

            auximg.src=_t.attr('data-src');

        }    })
}
if(!(window.dzs_check_lazyloading_images_inited)){

    window.dzs_check_lazyloading_images_inited = false;
}

jQuery(document).ready(function($) {


    // console.info('window.dzs_check_lazyloading_images_inited - ',window.dzs_check_lazyloading_images_inited);

    if (window.dzs_check_lazyloading_images_inited == false) {

        window.dzs_check_lazyloading_images_inited = true;


        $(window).on('scroll', window.dzs_check_lazyloading_images);
        window.dzs_check_lazyloading_images();
        setTimeout(function () {
            window.dzs_check_lazyloading_images();
        }, 1500);
        setTimeout(function () {
            window.dzs_check_lazyloading_images();
        }, 2500);
    } else {
        if (window.dzs_check_lazyloading_images) {
            window.dzs_check_lazyloading_images();
            setTimeout(function () {
                if (window.dzs_check_lazyloading_images) {
                    window.dzs_check_lazyloading_images();
                }
            }, 1000);
            setTimeout(function () {
                if (window.dzs_check_lazyloading_images) {
                    window.dzs_check_lazyloading_images();
                }
            }, 2000);
            setTimeout(function () {
                if (window.dzs_check_lazyloading_images) {
                    window.dzs_check_lazyloading_images();
                }
            }, 3000);
        }
    }

});


window.dzs_check_lazyloading_image_resize = function(){
    //console.info("ceva");

    for(var i=0;i<window.dzs_check_lazyloading_images_toberesized_arr.length;i++){
        var _c = window.dzs_check_lazyloading_images_toberesized_arr[i];

        //console.info(_c);

        _c.height(Number(_c.attr('data-responsive_ratio')) * _c.width());
    }
}

if(!(window.dzs_check_lazyloading_images_inited)){

    window.dzs_check_lazyloading_images_inited = false;

    jQuery(window).on('resize',window.dzs_check_lazyloading_image_resize)
}









var window_loaded_called = false;
jQuery( window ).load(function() {
    var $ = jQuery;

    if(window_loaded_called){
        return false;


    }

    window_loaded_called = true;

    $('body').addClass('loaded-all');

    $('.load-on-window-load').each(function(){
        var _t = $(this);

        // console.info(_t, _t.attr('data-src'));
        _t.css('background-image', 'url('+_t.attr('data-src')+')')
        _t.removeAttr('data-src')
    })
});

































jQuery(document).ready(function($) {
    //console.info($('.zoomvideogallery.auto-init'));
    dzsshm_init('.showmore-con.auto-init', {init_each: true});

});





window.dzsshm_self_options = {};

//show more plugin
(function($) {




    $.fn.dzs_showmore = function(o) {

        var defaults = {
        };



        if(typeof o =='undefined'){
            if(typeof $(this).attr('data-options')!='undefined' && $(this).attr('data-options')!=''){
                var aux = $(this).attr('data-options');
                aux = 'window.dzsshm_self_options = ' + aux;
                eval(aux);
                o = $.extend({},window.dzsshm_self_options);
                window.dzsshm_self_options = $.extend({},{});
            }
        }

        o = $.extend(defaults, o);

        this.each(function() {

            var cthis = $(this);


            var count_needsLoading = 0
                ,count_loaded = 0
                ;

            var __needsLoading = cthis.find('.needs-loading')
                ,_lastVisible = null
                ,_btnShowMore = null
                ,_clipper = null
                ;

            var last_clip_h = 0;


            // console.warn(cthis);

            init();
            function init(){

                count_needsLoading = __needsLoading.length;

                _clipper = cthis.find('.showmore-clipper').eq(0);
                _lastVisible = cthis.find('.showmore-last-visible').last();
                _btnShowMore = cthis.find('.btn-show-more').eq(0);

                //console.info("alceva");
                //console.info('ceva', _lastVisible);


                // console.info(cthis.find('.btn-show-more'))
                cthis.find('.btn-show-more').bind('click' , handle_mouse);

                var i3 = 0;

                if(__needsLoading.length==0){
                    init_allloaded();
                }else{
                    __needsLoading.each(function(){
                        var _t = $(this);

                        //console.info(_t, _t.get(0).src);

                        var dataSrc = '';
                        if(_t.get(0).src){
                            dataSrc = _t.get(0).src;
                        }
                        if(_t.attr('data-src')){
                            dataSrc = _t.attr('data-src');
                        }
                        if(dataSrc ){

                            var img = new Image();

                            img.onload = function(){
                                //console.info(this);


                                count_loaded++;

                                if(this._t){
                                    if(this._t.attr('data-src')){
                                        this._t.attr('src', this._t.attr('data-src'));
                                    }
                                }

                                if(count_loaded>=count_needsLoading){
                                    init_allloaded();
                                }
                            };

                            img.src = dataSrc;
                            img._t = _t;



                        }

                        i3++;
                    })
                }
            }

            function init_allloaded(){
                cthis.addClass('all-loaded');


                //console.info(_lastVisible, _lastVisible.offset().top, _lastVisible.outerHeight(), cthis.offset().top);



                $(window).bind('resize',handle_resize);

                handle_resize();
            }

            function handle_resize(e){

                if(_lastVisible && cthis && _lastVisible.offset() ){
                    last_clip_h = _lastVisible.offset().top + _lastVisible.outerHeight() - cthis.offset().top + _btnShowMore.outerHeight();
                    if(cthis.hasClass('showing-more')){

                    }else{
                        _clipper.outerHeight(last_clip_h)
                    }
                }



            }

            function handle_mouse(e){
                var _t = $(this);

                console.info("ceva");
                if(_t.hasClass('btn-show-more')){
                    if(cthis.hasClass('showing-more')){

                        _clipper.css('height', _clipper.outerHeight());


                        setTimeout(function(){
                            _clipper.animate({
                                'height': last_clip_h
                            },{
                                queue:false
                                ,duration: 300
                                ,complete:function(arg){
                                }
                            })
                        },10);



                        cthis.removeClass('showing-more');
                    }else{

                        _clipper.css('height', 'auto');
                        var aux23 = _clipper.outerHeight();

                        console.info(aux);

                        _clipper.css('height', last_clip_h);

                        setTimeout(function(){
                            _clipper.animate({
                                'height': aux23
                            },{
                                queue:false
                                ,duration: 300
                                ,complete:function(arg){
                                    console.info(arg, this);

                                    $(this).css('height','auto');
                                }
                            })
                        },10);

                        cthis.addClass('showing-more');
                    }
                }
            }

        });
    }


    window.dzsshm_init = function(selector, settings) {
        //console.info($(selector), settings);

        //return false;

        if(typeof(settings)!="undefined" && typeof(settings.init_each)!="undefined" && settings.init_each==true ){
            var element_count = 0;
            for (var e in settings) { element_count++; }
            if(element_count==1){
                settings = undefined;
            }

            $(selector).each(function(){
                var _t = $(this);
                _t.dzs_showmore(settings)
            });
        }else{
            $(selector).dzs_showmore(settings);
        }


    };
})(jQuery);
