$(document).ready(function() {
	var menuBtn = $('.article-list-bar .btn-articleList');
	var articleList = $('.article-list-.scroll');


	menuBtn.on('click', function() {
    	articleList.toggleClass('active');
    	setCarouselWidth();
	});



});

function setCarouselWidth()
{

	var windowWidth = $(window).width(),
		container = $('.article-list-.wrap'),
		pageWidth = 0;

	container.children().each(function(index)
	{
		var inclMargin = true,
		$this = $(this);

		// Check if each child element has a margin-left or margin-right
		if ( parseInt($this.css('margin-left')) < 0 || parseInt($this.css('margin-right')) < 0 )
		{
			var inclMargin = false;
		}

		var width = $this.outerWidth(inclMargin);
		pageWidth += width;

	});

	if(pageWidth > 0)
	{
		container.css({'width' : pageWidth + 'px'});
	}

}


