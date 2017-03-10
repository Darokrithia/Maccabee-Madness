requirejs.config({
	"baseURL":"js",
	"paths":{
		//libs
		"Class":"libs/class",
		"Jquery":"libs/jquery",
		//classes
		"Launcher":"app/classes/Launcher",
		"Display":"app/classes/display/Display",
		"Game":"app/classes/Game",
		"ImageLoader":"app/classes/graphics/ImageLoader"
	}
});

require(['app/main']);