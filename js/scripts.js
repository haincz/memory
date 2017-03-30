function TileConstructor () {
	this.tile = '<div class="tile"></div>';
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
	var counter,
		choicesResult,
		successQty;

	$(document).on('click', '.tile', init);

	$('#startgame').on('click', function(event) {
		newGame();
	});

	function newGame() {
		counter = successQty = 0;
		choicesResult = [];

		$('#board').empty();
		tile.drawTile();
		tile.addTileData();
	}

	function init() {
		var pValue = $("p", this);
		counter += 1;
		
		$("p", this).css("visibility", "visible");
		choicesResult.push(pValue);
		if (counter == 2) {
			$(document).off('click', '.tile', init);

			checkChoicesResult();
		}
	}

	function checkChoicesResult() {
		if (choicesResult[0].text() == choicesResult[1].text()) {
			resetMoveDataOk().then(function() {
				$(document).on('click', '.tile', init);
				choicesResult = [];
			});
		} else {
			resetMoveDataWrong().then(function() {
				$(document).on('click', '.tile', init);
				choicesResult = [];
			});
		}
	}

	function resetMoveDataWrong() {
		return new $.Deferred(function(defer) {
			counter = 0;

			setTimeout(function() {
				hide(choicesResult[0]);
				hide(choicesResult[1]);

				defer.resolve();
			}, 2000);
		});
	}

	function show(element) {
		element.css('visibility', 'visible');
	}

	function hide(element) {
		element.css('visibility', 'hidden');
	}

	function resetMoveDataOk() {
		return new $.Deferred(function(defer) {
			counter = 0;
			successQty += 1;

			if (successQty === 8) {
				alert('Nice');
			}

			defer.resolve();
		});
	}
});