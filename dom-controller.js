/* DOM Controller */
function D(select)
{
	return (new DOMController()).Select(select,document);
}
function DOMController()
{
	this.Select = function(select, par){
		this.DO = Array.prototype.slice.call(par.querySelectorAll(select));
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
	this.Parent = function()
	{
		var res = new Array();
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
				res.push(this.DO[item].parentNode);
		this.DO = res;
		return this;
	}
	this.CreateChild = function(name)
	{
		var res = new Array();
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
			{
				var ch = document.createElement(name);
				this.DO[item].appendChild(ch);
				res.push(ch);
			}
		this.DO = res;
		return this;
	}
	this.css = function(attr, val)
	{
		if(val)
		{
			this.setCSS(attr, val);
			return this;
		}
		else
			return this.getCSS(attr);
	}
	this.attr = function(attr, val)
	{
		if(val)
		{
			this.setAttr(attr, val);
			return this;
		}
		else
			return this.getAttr(attr);
	}
	this.val = function(val)
	{
		return this.attr("value",val);
	}
	this.setHTML = function(html)
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
				this.DO[item].innerHTML = html;
		return this;
	}
	this.getHTML = function()
	{
		for(var item in this.DO)
			if(this.DO.hasOwnProperty(item) && this.DO[item].style)
				return this.DO[item].innerHTML;
	}
	this.html = function(html)
	{
		if(html)
		{
			this.setHTML(html);
			return this;
		}
		else
			return this.getHTML();
	}
}
