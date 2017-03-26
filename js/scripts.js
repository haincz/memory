function TileConstructor () {
	this.tile = '<div class="tile"></div>';
	var tileDataArray = [1,2,3,4,5,6,7,8];
	this.tileData = function () {

	 	for (var i = tileDataArray - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tileDataArray[i];
        tileDataArray[i] = tileDataArray[j];
        tileDataArray[j] = temp;
   		 }

    return tileDataArray;	

	}

}

TileConstructor.prototype.drawTile = function() {
	
	for (var i = 0; i < 16; i++) {
		$('.row-starter').append(this.tile);
	}
};

// TileConstructor.prototype.tileDataShufle = function() {


// 	for (var i = this.tileData.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = this.tileData[i];
//         this.tileData[i] = this.tileData[j];
//         this.tileData[j] = temp;
//     }

//     return this.tileData;	
// }


TileConstructor.prototype.addTileData = function() {

	for (var i = 0; i < this.tileData(); i++) {
		$('.tile').append('<p>'this.tileData()[i]'<p>');
	}

}

var tile = new TileConstructor();




$(document).ready(function() {
	$('#startgame').on('click', function(event){
		tile.drawTile();
		tile.addTileData();
		//startGame();
	});

});