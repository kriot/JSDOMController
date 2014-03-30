/* DOM Controller */
function D(select)
{
	return new DOMController(select,document);
}
function DOMController(select, par)
{
	var firstChar = select.split('')[0];
	if(firstChar == "#")
		this.DO = new Array(par.getElementById(select.substring(1)));
	else if(firstChar == ".")
		this.DO = par.getElementsByClass(select.substr(1));
	else
		this.DO = par.getElementsByTagName(select);
	this.setCSS = function(attr, val)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item))
				this.DO[item].style[attr] = val;
	}
	this.getCSS = function(attr)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item))
				return this.DO[item].style[attr]; 
	}
}
