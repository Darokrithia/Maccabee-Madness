define (['State'], function(State){

	var x = 200;
	var y = 200;

	var GameState = State.extend({
		init:function(_handler){
			this._super(_handler);
		},
		tick:function(_dt){
			if(this.handler.getKeyHandler().up){
				y -= 50*dt;
			}
			if (this.handler.getKeyHandler().down){
				y += 50*dt;
			}
			if (this.handler.getKeyHandler().left){
				x -= 50*dt;
			}
			if (this.handler.getKeyHandler().right){
				x += 50*dt;
			}
		},
		render:function(_g){
			_g.fillRect(x,y,100,100);
		}
	});

	return GameState;

});