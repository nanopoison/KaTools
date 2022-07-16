export default class GridObject {

	// should only contain these parameters
	constructor(grid, x, y) {
		this.grid = grid;
		this.x = x;
		this.y = y;

		// add value to gridObject to change object
		this.value = null;
	}

	// value is a kaboom object
	setValue(value) {
		this.destroy();
		this.value = add(value);
		this.value.pos = this.grid.getWorldPos(this.x, this.y);
		// trigger grid value changed
	}

	// returns kaboom object
	getValue() {
		return this.value;
	}

	// removes kaboom object
	destroy() {
		if (this.value != null) {
			destroy(this.value);
			this.value = null;
		}
	}

	// returns grid object toString
	toString() {
		return this.x + ", " + this.y;
	}
	
}