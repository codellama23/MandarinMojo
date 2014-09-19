//(function() {

window.game = window.game || { };

game.Player = function(pos) {
    game.Thing.call(this, pos, [32, 32]);
    this.maxvel = 200;
    this.div = createDiv("left_col", "images/hero.png", "32px", "32px");
}
game.Player.prototype = new game.Thing();
game.Player.prototype.constructor = game.Player;
 
game.Player.prototype.draw = function() {
    //game.Thing.prototype.draw.call(this, this.pos, 'hero');
    this.div.style.left = this.pos[0]+"px";
    this.div.style.top = this.pos[1]+"px";
}
game.Player.prototype.setvisibility = function(visibility) {
    this.div.style.visibility = visibility;
}

game.Player.prototype.update = function(dt) {
    if (gWorld.keyState[87] || gWorld.keyState[38]) { //up
        //this.vel[1] = -this.maxvel;
        this.pos[1] = Math.round(this.pos[1] - this.maxvel * dt);
    }
    if (gWorld.keyState[83] || gWorld.keyState[40]) { //down
        //this.vel[1] = this.maxvel;
        this.pos[1] = Math.round(this.pos[1] + this.maxvel * dt);
    }
    if (gWorld.keyState[65] || gWorld.keyState[37]) { //left
        //this.vel[0] = -this.maxvel;
        this.pos[0] = Math.round(this.pos[0] - this.maxvel * dt);
    }
    if (gWorld.keyState[68] || gWorld.keyState[39]) { //right
        //this.vel[0] = this.maxvel;
        this.pos[0] = Math.round(this.pos[0] + this.maxvel * dt);
    }
    //if (gWorld.keyState[32]) { //spacebar - guns
    //    this.shoot();
    //}
    
    if (this.pos[0] < 30) {
        this.pos[0] = 30;
    }
    if (this.pos[1] < 30) {
        this.pos[1] = 30;
    }
    if (this.pos[0] + this.size[0] > gCanvas.width - 30) {
        this.pos[0] = gCanvas.width - 30 - this.size[0];
    }
    if (this.pos[1] + this.size[1] > gCanvas.height - 30) {
        this.pos[1] = gCanvas.height - 30 - this.size[1];
    }
    //game.Thing.prototype.update.call(this, dt);
}

//}());

