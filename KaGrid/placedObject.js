export default class placedObject {

	

	
	// w x h is size of placed object
	// kaboomObject is the final kaboom object (no sprite)?
	// visual displays the sprite seperately to the kaboom object?
	constructor(width, height, kaboomObject, visual) {
		this.width = width;
		this.height = height;
		
		this.kaboomObject = kaboomObject;
		this.visual = visual;
	}

	getRotationAngle(dir) {
		
	}

	getRotationOffset(dir) {
		
	}

	getGridPositions(offset, dir) {
		var gridPositionList = [];
		switch (dir) {
			default:
			case Dir.Down:
			case Dir.Up:
				for (var x = 0; x < width; x++) {
					for (var y = 0; y < height; y++) {
						gridPositionList.push(vec2(x,y));
					}
				}
				break;
			case Dir.Left:
			case Dir.Right:
				for (var x = 0; x < height; x++) {
					for (var y = 0; y < width; y++) {
						gridPositionList.push(vec2(x,y));
					}
				}
				break;
		}
		return gridPositionList;
	}
	
	// toString
	toString() {
		return "";
	}
	
}