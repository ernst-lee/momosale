$(function() {
	$('body').on('click', 'a', function(e) {
		// add history (ã‚«ãƒ†ã‚´ãƒªãƒ¼ã‚‚è€ƒæ…®ã€‚æ¤œç´¢ã¯pageå¯¾å¿œã—ã¦ãªã„)
		var href = window.location.href;
		var url = $('#base_url').val();
		if (url.substring(url.length - 1) != '/') {
			url = url + '/';
		}
		var categoryStr = href.match(/categories\/.+/);
		if (categoryStr != null) {
			// pageå¯¾ç­–
			var re = /([0-9]+\/)([0-9]+)$/;
			categoryStr = categoryStr[0].replace(re, "$1");
			if (categoryStr.substring(categoryStr.length - 1) != '/') {
				categoryStr = categoryStr + '/';
			}
		} else {
			categoryStr = "";
		}
		var next_page = $('#next_page').text() - 1;
		if (next_page > 1 && href.match(/\/search\?q/) == null) {
			window.history.pushState(null, null, url + categoryStr + next_page);
		}
	});
});
