/* Using */

addEventListener("DOMContentLoaded", function()
{
	console.log("loaded");
	D("#mydiv").setCSS("backgroundColor", "red");
	console.log(D("#mydiv").getCSS("height"));
});
