function setCarouselWidth(){var e=$(window).width(),t=$(".article-list-.wrap"),n=0;t.children().each(function(e){var t=!0,r=$(this);if(parseInt(r.css("margin-left"))<0||parseInt(r.css("margin-right"))<0)var t=!1;var i=r.outerWidth(t);n+=i}),n>0&&t.css({width:n+"px"})}$(document).ready(function(){var e=$(".article-list-bar .btn-articleList"),t=$(".article-list-.scroll");e.on("click",function(){t.toggleClass("active"),setCarouselWidth()})});