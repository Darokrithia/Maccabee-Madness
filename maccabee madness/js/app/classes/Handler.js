define(['Class'],function(Class){
	var game;

	var Handler = Class.extend({
		init:function(_game){
			game = _game;
		},
		getWidth:function(){
			return game.getWidth();
		},
		getHeight:function(){
			return game.getHeight();
		},
		getKeyHandler:function(){
			return game.getKeyHandler();
		}
	});

	return Handler;
});