define(["Class"],function(Class){
	var keys = [];

	var KeyHandler = Class.extend({
		init:function(){

		},
		tick:function(){
			this.up = keys[38];
			this.down = keys[40];
			this.left = keys[37];
			this.right = keys[39];
		}
	});

	window.onkeydown = function(e){
		keys[e.keyCode] = true;
	}
	window.onkeyup =  function(e){
		keys[e.keyCode] = false;
	}

	return KeyHandler; 
});