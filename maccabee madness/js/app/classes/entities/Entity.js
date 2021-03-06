define(['Class'],function(Class){


	var Entity = Class.extend({
		init:function(_handler,_x,_y,_width,_height){
			this.x = _x;
			this.y = _y;
			this.width = _width;
			this.height = _height;
		},
		tick:function(_dt){

		},
		render:function(_g){

		},
		//getters
		getX:function(){
			return this.x;
		},
		getY:function(){
			return this.y;
		},
		getWidth:function(){
			return this.width;
		}
		getHeight:function(){
			return this.height;
		}
		//setters
		setX:function(_x){
			this.x = _x;
		}
		setY:function(_y){
			this.y = _y;
		}
	});
});