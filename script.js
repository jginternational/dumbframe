
function addfoto(element) {
    var container = $(".carousel-inner");
    var tag = document.createElement("div");
    var classname = "carousel-item";
    tag.className = classname;

    var img = document.createElement("IMG");
    img.className = "d-block w-100";
    img.setAttribute("src", element);

    tag.appendChild(img);
    container.append(tag);
}

$(document).ready(function () {
    images.forEach(addfoto);

    var $item = $('.carousel-item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');


    $(window).on('resize', function () {
        $wHeight = $(window).height();
        $item.height($wHeight);
    });

    $('.carousel').carousel({
        pause: "false"
    });
});