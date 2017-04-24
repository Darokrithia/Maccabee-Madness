define(['Class','Display','State','GameState','KeyHandler',"Handler"],function(Class,Display,State,GameState,KeyHandler,Handler){

	var _this;
	var title,width,height,g,display,keyHandler,handler;

	var gameState;

	var running = false; 

	var Game = Class.extend({
		init:function(_title, _width, _height){
			_this = this;

			title = _title;
			width = _width;
			height = _height;
			keyHandler = new KeyHandler();
		},
		run:function(){
			init();
			var fps = 30;
			var timePerTick = 1000/fps;
			var delta = 0;
			var now;
			var lastTime = Date.now();
			var timer = 0;
			var ticks = 0;
			function loop(){
				if(running){
					now = Date.now();
					delta = (now-lastTime);
					timer += delta;
					lastTime = now;
				}
				if(timer>=timePerTick){
					dt = timer/1000;
					tick(dt);
					render();
					timer -= timePerTick;
				}
				window.requestAnimationFrame(loop);
			}
			loop();
		},
		start:function(){
			if(running){
				return;
			}
			else{
				running = true;
				this.run();
			}
		},
		getWidth:function(){
			return width;
		},
		getHeight:function(){
			return height;
		},
		getKeyHandler:function(){
			return keyHandler;
		}
	});

	function init(){
		display = new Display(title,width,height);
		g = display.getGraphics();
		handler = new Handler(_this);
		gameState = new GameState(handler);
		State.setState(gameState);
	}
	function tick(_dt){
		keyHandler.tick();
		if(State.getState() != null){
			State.getState().tick(_dt)
		}
	}
	function render(){
		g.clearRect(0,0,width,height);
		if(State.getState() != null){
			State.getState().render(g);
		}
	}

	return Game;

});