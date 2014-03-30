/* DOM Controller */
function D(select)
{
	return (new DOMController()).Select(select,document);
}
function DOMController()
{
	this.Select = function(select, par){
		var firstChar = select.split('')[0];
		if(firstChar == "#")
			this.DO = new Array(par.getElementById(select.substring(1)));
		else if(firstChar == ".")
			this.DO = par.getElementsByClassName(select.substr(1));
		else
			this.DO = par.getElementsByTagName(select);
		return this;
	}
	this.setCSS = function(attr, val)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
				this.DO[item].style[attr] = val;
	}
	this.getCSS = function(attr)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
				return this.DO[item].style[attr]; 
	}
	this.setAttr = function(attr, val)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].setAttribute)
				this.DO[item].setAttribute(attr, val);
	}
	this.getAttr = function(attr)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].getAttribute)
				return this.DO[item].getAttribute(attr); 
	}
	this.Find = function(select)
	{
		var res = new Array();
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
				res = res.concat((new DOMController()).Select(select, this.DO[item]).DO);
		this.DO = res;
		return this;
	}
}
