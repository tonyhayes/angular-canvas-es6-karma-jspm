export default function thumbnailCanvasRenderer () {
	return {
		restrict: 'EA',
		scope: {
			'columns': '=columns',
			'phrase': '=phrase',
		},
        template: "<canvas width='300' height='500'  style='border:1px solid #000000;'/>",
        link: function(scope, element, attrs) {
           	scope.canvas = element.find('canvas')[0];
            if(!scope.phrase || !scope.columns){
                return;
            }
            var phraseArr = scope.phrase.split('');
            var kBoardWidth = scope.columns;
            var kBoardHeight= Math.ceil(phraseArr.length / kBoardWidth);
            var kPieceWidth = 50;
            var kPieceHeight= 50;
            var kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
            var kPixelHeight= 1 + (kBoardHeight * kPieceHeight);

            var gCanvasElement;
            var gDrawingContext;

            var gPieces;
            var gNumPieces;

            initGame(scope.canvas);

            scope.$watchCollection(() => [
                scope.columns, scope.phrase
            ], (newVal, oldVal) => {
                phraseArr = scope.phrase.split('');
                kBoardWidth = scope.columns;
                kBoardHeight= Math.ceil(phraseArr.length / kBoardWidth);
                kPixelWidth = 1 + (kBoardWidth * kPieceWidth);
                kPixelHeight= 1 + (kBoardHeight * kPieceHeight);
                initGame(scope.canvas);
            });


            function Cell(row, column) {
                this.row = row;
                this.column = column;
            }


            function drawBoard() {

                gDrawingContext.clearRect(0, 0, kPixelWidth, kPixelHeight);

                gDrawingContext.beginPath();
                
                /* vertical lines */
                for (var x = 0; x <= kPixelWidth; x += kPieceWidth) {
                	gDrawingContext.moveTo(0.5 + x, 0);
                	gDrawingContext.lineTo(0.5 + x, kPixelHeight);
                }
                
                /* horizontal lines */
                for (var y = 0; y <= kPixelHeight; y += kPieceHeight) {
                	gDrawingContext.moveTo(0, 0.5 + y);
                	gDrawingContext.lineTo(kPixelWidth, 0.5 +  y);
                }
                
                /* draw it! */
                gDrawingContext.strokeStyle = "#ccc";
                gDrawingContext.stroke();
                
                for (var i = 0; i < phraseArr.length; i++) {
            	   drawPiece(gPieces[i], phraseArr[i]);
                }


            }

            function drawPiece(p, letter) {
                var column = p.column;
                var row = p.row;
                var x = (column * kPieceWidth) + (kPieceWidth/2);
                var y = (row * kPieceHeight) + (kPieceHeight/2);
                var radius = (kPieceWidth/2) - (kPieceWidth/10);
                gDrawingContext.beginPath();
                gDrawingContext.arc(x, y, radius, 0, Math.PI*2, false);
                gDrawingContext.closePath();
                gDrawingContext.strokeStyle = "#fff";
                gDrawingContext.stroke();
                gDrawingContext.strokeText(letter, x, y);
                gDrawingContext.font="lighter 18px leto";
            }



            function newGame() {
                gPieces = [];
                //loop over row count, add a cell for each col
                for (var i = 0; i < kBoardHeight; i++) {
                    //if the row is odd, reverse for loop
                    if(i%2){
                        for (var j = kBoardWidth-1; j >= 0; j--) {
                           gPieces.push(new Cell(i,j));
                        }                        
                    }else{
                        for (var j = 0; j < kBoardWidth; j++) {
                           gPieces.push(new Cell(i,j));
                        }                        
                    }
                }
                gNumPieces = gPieces.length;
                drawBoard();
            }


            function initGame(canvasElement) {
                gCanvasElement = canvasElement;
                gCanvasElement.width = kPixelWidth;
                gCanvasElement.height = kPixelHeight;
                gDrawingContext = gCanvasElement.getContext("2d");
            	newGame();
            }
        }        
    };
}
