import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
import Grid from "./KaGrid/grid.js";
import GridObject from "./KaGrid/gridObject.js";

var can = document.querySelector("#myCanvas");

// initialize kaboom
let k = kaboom({
	width: can.clientWidth,
	height: can.clientHeight,
	canvas: can, 
	background: [63,63,63],
	font: "sinko",
	logMax: 3,
});

add([
	text("Hi"),
	pos(center()),
	origin("center"),
])

// creating an empty grid
var grid = new Grid(10,10,16, vec2(0), (g, x, y) => new GridObject(g, x, y));