function showImage(image) {
	var imgSource= $(image).attr("src");
	showFacebox('<img src="' + imgSource + '" />');
	
}

function showFacebox(data) {
	var faceboxHtml = "<div class='facebox-div'>" + data + "</div>";
	faceboxHtml += '<div class="footer"><a class="close" href="javascript:closeFacebox()"><img class="close_image" title="close" src="images/facebox/closelabel.gif"></a></div>';
	$.facebox(faceboxHtml);
}

function closeFacebox()
{
	closeStatus = true;
	jQuery(document).trigger('close.facebox');
	$('#facebox').remove();
	$('#facebox_overlay').remove();
}