define(['Class','Display'],function(Class,Display){

	var _this;
	var title,width,height,g,display;

	var running = false;


	var x = 200;
	var y = 200;

	var Game = Class.extend({
		init:function(_title, _width, _height){
			_this = this;

			title = _title;
			width = _width;
			height = _height;
		}
	});

	function init(){
		display = new Display(title,width,height);
		g = display.getGraphics();
	}
	function tick(_dt){
		x += ((Math.floor(Math.random()*100)-50)*dt);
		y += ((Math.floor(Math.random()*100)-50)*dt);
	}
	function render(){
		g.clearRect(0,0,width,height);
		g.fillRect(x,y,100,100);
	}

	Game.prototype.run = function(){
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
	}

	Game.prototype.start = function(){
		if(running){
			return;
		}
		else{
			running = true;
			this.run();
		}
	}

	return Game;

});