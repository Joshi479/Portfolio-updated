$(document).ready(function () {
	var textBoard = $("#textBoard");
	$(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
		$('.textBoard').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 0.8 - scrolled / 400 // fade out at 400px from top
        });
        $('#fwCanvas').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
		
		if (scrolled > 300) {
            TweenMax.to($("#greeting"), 3, { marginLeft:200, marginRight:200, paddingLeft:50, paddingRight:50, opacity:1, ease:Bounce.easeOut });
			TweenMax.to($("#skill"), 3, { marginLeft:200, marginRight:200, paddingLeft:50, paddingRight:50, opacity:1, ease:Bounce.easeOut });
			TweenMax.to($("#header"), 1, { opacity:1});
        }
    });

	$(".navItem").on('mouseenter.action mouseover.action', function () {
        $(".char").each(function () {
            TweenMax.to(this, 0.25, {letterSpacing: 0, width:75 , ease: Power2.easeOut });
        });
    });
    $(".navItem").on('mouseleave.action mouseout.action', function () {
        $(".char").each(function () {
            TweenMax.to(this, 0.25, {width:22, ease: Power2.easeOut });
        });
    });
	
	 $("#head_svg").on('mouseenter.action mouseover.action', function () {
        $('rect').each(function () {
            var w = $(this).attr('width');
            TweenMax.to(this, 0.1, { opacity: 0.5, width: w + 6, height:4, ease: Power2.easeOut });
        });        
    });
    $("#head_svg").on('mouseleave.action mouseout.action', function () {
        $('rect').each(function () {
            var w = $(this).attr('width');
            TweenMax.to(this, 0.1, { opacity: 1, width: w - 6, height:2, ease: Power2.easeOut });
        });
    });
	
	//menu change to cross on click
    $('#head_svg').on('click', function () {
        if ($("#head_svg").attr('class') == "menu-icon") {
            TweenMax.to($('.one'), 1, { "transform": "matrix(-0.7071, 0.7071, -0.7071, -0.7071, 21.1924, 0.221825)", force3d: true, opacity: 1 });
            TweenMax.to($('.two'), 1, { "transform": "matrix(-0.7071, -0.7071, 0.7071, -0.7071, 14.8284, 22.1421)", force3d: true, opacity: 1 });
            TweenMax.to($('.three'), 1, { "transform": "matrix(0, 0, 0, 1, 8, -7)", force3d: true, opacity: 0 });
            $('.menu-icon').attr('class', 'back');
        }
        else {
            TweenMax.to($('.one'), 1, { "transform": "matrix(1, 0, 0, 1, 0, 0)", force3d: true, opacity: 1 });
            TweenMax.to($('.two'), 1, { "transform": "matrix(1, 0, 0, 1, 0, 0)", force3d: true, opacity: 1 });
            TweenMax.to($('.three'), 1, { "transform": "matrix(1, 0, 0, 1, 0, 0)", force3d: true, opacity: 1 });
            $('.back').attr('class', 'menu-icon');
        }
        
    });
	
	
});

