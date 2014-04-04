/* Using */

D(document).on("DOMContentLoaded", function()
{
	console.log("loaded");
	//D("a").setAttr("href","olo.html");
	console.log(D("ul").Find("li").Find("a").Parent().Find("span").CreateChild("input").attr("value","text").val());
	D("li").css("backgroundColor", "green");
	console.log(D("li").css("backgroundColor"));
	D("li").attr("type","square");
	console.log(D("li").attr("type"));
	D("body > a").html("olo");
	console.log(D("a").html());
	D(document.getElementById("myli")).css("color","grey");
	D(document.body).css("backgroundColor","black");
	D(document.documentElement).each(function(){
		alert(this.html());
	});
	console.log(document.documentElement.style);
	D(document.body).CreateChild("a").html("added span").attr("href","#");
});
