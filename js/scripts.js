
function TileConstructor () {
	this.tile = '<div class="tile"></div>';
	//tu docelowo moze powstać zmienna, determinująca długość tablicy poniżej, wartość zmiennej podawana jest przez usera przed startem
	this.tileData = [1,2,3,4,5,6,7,8,8,7,6,5,4,3,2,1];

}

TileConstructor.prototype.drawTile = function() {
	
	for (var i = 0; i < 16; i++) {
		$('.row-starter').append(this.tile);
	}
};

TileConstructor.prototype.tileDataShufle = function() {


	for (var i = this.tileData.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.tileData[i];
        this.tileData[i] = this.tileData[j];
        this.tileData[j] = temp;
    }

    return this.tileData;	
}


TileConstructor.prototype.addTileData = function() {
    var arr = tile.tileDataShufle();

	for (var i = 0; i < arr.length; i++) {
		$('.tile').eq(i).append('<p>' + arr[i] + '</p>');
	}

}

var tile = new TileConstructor();




$(document).ready(function() {
	$('#startgame').on('click', function(event){
		tile.drawTile();
		tile.addTileData();
		//startGame();
	});

	$('.tile', this).on('click', function(){
		
		$("p").css("visibility", "visible");

	});
});