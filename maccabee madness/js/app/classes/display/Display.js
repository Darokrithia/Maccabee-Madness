define(['Jquery','Class'],function($,Class){

	var canvas,title,width,height,graphics;

	var Display = Class.extend({
		init:function(_title,_width,_height){
			title = _title;
			width = _width;
			height = _height;
			createDisplay();
		},
		getWidth:function(){
			return width;
		},
		getHeight:function(){
			return height;
		},
		getTitle:function(){
			return title;
		},
		getGraphics:function(){
			return graphics;
		}
	});

	function createDisplay(){
		document.title = title;
		var body = document.body;
		
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		
		document.body.appendChild(canvas);

		graphics = canvas.getContext("2d");
	}

	return Display;

});