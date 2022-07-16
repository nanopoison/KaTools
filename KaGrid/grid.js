export default class Grid {

	constructor(width, height, cellSize, origin, createGridObject) {
		this.width = width;
		this.height = height;
		this.cellSize = cellSize;
		this.origin = origin;
		this.createGridObject = createGridObject;

		this.gridArray = [];

		for (var i = 0; i < this.width; i++) {
			this.gridArray.push([]);
			for (var j = 0; j < this.height; j++) {
				this.gridArray[i].push(createGridObject(this, i, j));
				//console.log(this.gridArray[i][j]);
			}
		}
	}

	// returns XY of grid from screen position
	getGridXY(pos) {
		var worldPos = toWorld(pos);
		worldPos.x = Math.floor((worldPos.sub(this.origin)).x / this.cellSize);
		worldPos.y = Math.floor((worldPos.sub(this.origin)).y / this.cellSize);
		return worldPos;
	}

	// returns world position from gridXY
	getWorldPos(x, y) {
		var vector2 = vec2(x * this.cellSize, y * this.cellSize).add(this.origin);
		return vector2;
	}

	// sets the value of the object at x, y
	setGridObjectXY(x, y, value) {
		if (x < this.width && x >= 0 && y < this.height && y >= 0)
			this.gridArray[x][y] = value;
	}

	// sets the value of the object at worldPos
	setGridObjectWP(worldPosition, value) {
		var gridXY = this.getGridXY(worldPosition);
		this.setGridObjectXY(gridXY.x, gridXY.y, value);
	}

	// gets the value of the object at x, y
	getGridObjectXY(x, y) {
		if (x < this.width && x >= 0 && y < this.height && y >= 0)
			return this.gridArray[x][y];
		else
			return null;
	}

	// gets the value of the object at worldPos
	getGridObjectWP(worldPosition) {
		var gridXY = this.getGridXY(worldPosition);
		this.getGridObjectXY(gridXY.x, gridXY.y);
	}

	// temporary not implemented
	// should change visual of the kaboom object
	triggerGridObjectChanged(x, y) {
		debug.log("Placed @"+x+","+y+"!");
	}

	// call once in your game, lets you handle grids
	gridHandler() {

		onMousePress("left", (mousePos) => {
			
		});
		
	}

	// draw lines, put inside onDraw() in your game.
	displayGridOutlines() {
		for (var i = 0; i <= this.height; i++) {

			var v1 = vec2(0, i * this.cellSize).add(this.origin);
			var v2 = vec2(this.width * this.cellSize, i * this.cellSize).add(this.origin);

			drawLine({
				p1: v1,
				p2: v2,
				width: 1,
				color: rgb(255,0,255),
			})
		}

		for (var j = 0; j <= this.width; j++) {
			var v1 = vec2(j * this.cellSize, 0).add(this.origin);
			var v2 = vec2(j * this.cellSize, this.height * this.cellSize).add(this.origin);

			drawLine({
				p1: v1,
				p2: v2,
				width: 1,
				color: rgb(255,0,255),
			})
		}
	}
	
}