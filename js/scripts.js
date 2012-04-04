 
function beginReading(){
	window.location.href = "readingModule.html";
}

function toDashboard(){
	window.location.href= "index.html";
}

var blockWidthWithSpacing;
var padding = 64;
function setupInitialScreen(){
	var blockHeight = window.innerHeight - 100;
	blockWidth = window.innerWidth * 0.75;
	blockWidthWithSpacing = blockWidth + padding;
	$("#blocks").css("width", blockWidthWithSpacing * 3);
	$(".block").css("height", blockHeight);
	$(".block").css("width", blockWidth);
	$("#noteDotRelations").css("right", blockWidthWithSpacing-padding/2-15);
	showScreen(2, false);
}

function showScreen(screenNumber, animate){
	if(currentScreen != screenNumber){
		currentScreen = screenNumber;
		var screenSize = window.innerWidth;
		var blocksOffset = (screenNumber - 1) * blockWidthWithSpacing;
		var centeringNumber = (screenSize - blockWidthWithSpacing) / 2;
		blocksOffset -= centeringNumber;
		
		if(animate)
			$("#blocks").animate({
				marginLeft: blocksOffset * -1,
			  }, 500);
		else
			$("#blocks").css("margin-left", blocksOffset * -1);
	}
}

function showDotRelations(){
	$("#noteDotRelations").toggle();
}
	
function getFakeText(){
	$("#fakeText").html("<div class='readingInfo'><div id='readingTitle' class='readingTitle'></div><div id='readingAuthor' class='readingSubTitle'></div></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices luctus ipsum ac ornare. Donec consectetur orci vel arcu vehicula ut varius ante congue. In quam turpis, facilisis id feugiat sit amet, rhoncus et tellus. Donec tempor ultricies massa in consequat. Morbi vel turpis porttitor purus tempor varius. Suspendisse interdum eleifend risus, et posuere ante pharetra sit amet. Nulla interdum eleifend porta. Pellentesque dignissim, neque et adipiscing ullamcorper, libero elit condimentum velit, sit amet feugiat dui urna a justo. Nunc eget lobortis erat.</p><p>Nullam eu hendrerit orci. Nam malesuada nunc ac enim mollis condimentum. Nunc quam erat, gravida sit amet scelerisque ac, malesuada quis mi. Nulla facilisi. Vivamus mattis sem vel arcu euismod at laoreet enim dapibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque id mauris quis nibh tristique dignissim ut a dui. Curabitur convallis massa vitae dui feugiat vel tincidunt mi pellentesque. Morbi pulvinar turpis eget eros venenatis interdum. Nunc lacus justo, vestibulum aliquet euismod vel, mattis a eros. Suspendisse et bibendum nulla. Maecenas tortor lacus, accumsan eget bibendum nec, aliquet nec urna.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam justo risus, ornare ac porttitor nec, rutrum euismod urna. Etiam nisl orci, imperdiet non faucibus eget, tincidunt vitae nunc. In eget erat venenatis risus gravida egestas. Integer sed nisi vel sem tempus consectetur. In molestie, magna ac eleifend consectetur, magna felis tristique nulla, at varius leo diam a nunc. Pellentesque adipiscing ullamcorper blandit. Integer condimentum, odio a blandit dapibus, ante lectus pellentesque sapien, vel rhoncus dolor velit id ipsum. Aliquam massa sem, porttitor vitae viverra eu, faucibus eget ligula. Aliquam et tempus sem. Nam tincidunt metus mauris. Praesent malesuada viverra vehicula. Aliquam ac libero at ante rutrum feugiat et ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.</p><p>Sed placerat turpis ac tellus volutpat blandit. Nunc non lorem leo. Duis eget lectus justo. Sed accumsan neque quis tellus consequat lobortis. Vestibulum dui nulla, malesuada sit amet ultricies sit amet, porttitor sit amet lacus. Ut luctus tristique dui quis interdum. Vivamus sit amet pulvinar sem. Nulla et nibh nisi. Ut ante lorem, feugiat quis suscipit at, molestie eget diam. Maecenas non massa est, quis blandit diam. Vestibulum tristique blandit vulputate. Nunc quis est orci, eget dapibus elit. Curabitur sed arcu eu augue imperdiet venenatis eu eu lorem.</p><p>Aenean arcu orci, rhoncus placerat dapibus non, vehicula eget purus. Curabitur ac lacus ipsum, et elementum quam. Etiam erat augue, aliquet ut auctor id, sodales ac nunc. Ut cursus ante a magna hendrerit at tincidunt enim ultrices. Sed volutpat ante ut sem venenatis vitae bibendum ante blandit. Nullam porta gravida volutpat. Quisque condimentum, justo ut iaculis scelerisque, ligula justo mollis orci, a tempus elit magna ut urna. Mauris vehicula leo sed lorem molestie aliquam vel nec eros. Cras at lectus in urna cursus vehicula. Etiam placerat, mi eu vulputate malesuada, arcu nulla dapibus arcu, eget varius massa augue et ipsum. Etiam scelerisque ultrices felis sed lobortis. Nam adipiscing libero vel dolor convallis vitae aliquet leo eleifend. Proin vel rutrum diam. Curabitur id est dolor, congue adipiscing turpis. Sed nec accumsan augue. Suspendisse bibendum euismod fermentum.</p><p>Etiam ullamcorper, arcu ac feugiat varius, felis turpis hendrerit ante, ut placerat diam magna vel justo. In facilisis mi ac eros fringilla rhoncus. Curabitur feugiat nibh et orci commodo id dignissim orci lobortis. Cras id faucibus ligula. Vivamus fermentum odio non dolor semper tempus. Ut cursus, quam nec venenatis consectetur, lacus libero accumsan felis, sed lacinia nunc est at libero. Donec ultrices euismod suscipit. Nulla et augue et velit euismod rutrum a at risus. Fusce tempor purus erat, sit amet tristique mauris. Vestibulum nec sem risus. Nunc ac ipsum nunc, eget malesuada ipsum. Mauris suscipit placerat nulla, quis sollicitudin turpis porttitor vel.</p><p>Maecenas aliquet consectetur tellus, sit amet iaculis enim tincidunt id. Etiam pharetra metus sed lorem auctor nec dignissim purus bibendum. Donec vitae dolor quam, a consequat diam. Etiam a massa orci. Suspendisse lacus est, porttitor sit amet facilisis at, condimentum quis neque. In hac habitasse platea dictumst. Ut pulvinar volutpat felis, nec hendrerit sapien luctus nec. Sed pulvinar tincidunt quam nec convallis. Nulla facilisi. Proin tincidunt justo eget felis tempus placerat.</p><p>Aliquam erat volutpat. Sed mi purus, volutpat sed auctor sit amet, semper ut lacus. Mauris sit amet sem sed nunc dapibus dictum. Fusce scelerisque tempus mauris ut tempus. Suspendisse vel dignissim purus. Praesent enim turpis, interdum laoreet lacinia nec, porttitor in lorem. Ut eget ligula purus, non egestas erat. Vivamus vel turpis sed felis aliquam blandit at at leo. Pellentesque vestibulum felis in magna vulputate aliquam. Suspendisse porta nibh adipiscing nibh vestibulum consectetur. Phasellus sed elit lectus, vel mattis nisi.</p>");
	$("#readingTitle").html("EXPERIENCE SAMPLING: PROMISES AND PITFALLS, STRENGTHS AND WEAKNESSES");
	$("#readingAuthor").html("By CHRISTIE NAPA SCOLLON, CHU KIM-PRIETO and ED DIENER");
}
