
window.onload = function(){

	var m1 = new Main('main');
	m1.init();

};

function Main (id){

	this.oMain = $(id);
	this.oContent = $('content');
	this.oList = $('list');
	this.iNow = 0;
	this.preIndex = 0;
	this.oNav = $('nav');
	this.aNavLi = this.oNav.getElementsByTagName('li');
	this.oArrow = $('arrow');
	this.oHeader = $('header');
	this.oList = $('list');
	this.oListLi = getByClass(this.oList,'liList');
	this.oListDiv = getByClass(this.oList,'divList');
	this.iContentHeight = 0;
}

Main.prototype = {

	init : function(){

		this.set();
		this.bindNav();
		this.mousewheel();

	},

	set : function(){

		var _this=this;
		_this.iContentHeight = view().h - _this.oHeader.offsetHeight;

		window.onresize = fnResize;

		contentAuto();
		listenContentAuto();
		function contentAuto(){
			_this.oContent.style.height = _this.iContentHeight +'px';
			for(var i=0; i<_this.oListLi.length; i++){
				_this.oListLi[i].style.height = _this.iContentHeight +'px';

			}
			_this.oList.style.top = -(_this.iNow*_this.iContentHeight)+'px';

		}

		function listenContentAuto(){
			var mt = (_this.iContentHeight - 520)/2;
			for(var i=0; i<_this.oListDiv.length; i++){
				_this.oListDiv[i].style.marginTop = mt +'px';
			}
		}

		function fnResize(){
			_this.iContentHeight = view().h - _this.oHeader.offsetHeight;
			contentAuto();
			listenContentAuto();			
		}
		
	},

	bindNav : function(){

		var _this=this;
		var oDiv = this.aNavLi[0].getElementsByTagName('div')[0];
		oDiv.style.width = '100%';
		this.oArrow.style.left = this.aNavLi[0].offsetLeft + this.aNavLi[0].offsetWidth/2 - this.oArrow.offsetWidth/2 +'px';

		for(var i=0; i<this.aNavLi.length; i++){
			_this.aNavLi[i].index = i;

			_this.aNavLi[i].onmousedown = function(){
				_this.preIndex = _this.iNow; //记录上一屏是哪个页面
				_this.iNow =this.index;
				_this.move(_this.iNow );
			};
		}		

	},

	move : function(index){

		var _this=this;

		for(var i=0; i<_this.aNavLi.length; i++){
			var oDiv = _this.aNavLi[i].getElementsByTagName('div')[0];
			oDiv.style.width = 0;
		}

		var oDiv = _this.aNavLi[index].getElementsByTagName('div')[0];
		oDiv.style.width ='100%';
		this.oArrow.style.left = this.aNavLi[index].offsetLeft + this.aNavLi[index].offsetWidth/2 - this.oArrow.offsetWidth/2 +'px';
		setStyle(_this.oList,'transform','translateY('+-(_this.iNow*_this.iContentHeight)+'px)')

	},
	
	mousewheel : function(){
		var _this = this;
		var bBtn = true;
		var timer = null;

		if(_this.oContent.addEventListener){
			_this.oContent.addEventListener('DOMMouseScroll',function(ev){
				var ev = ev||window.event; //向下 > 0 , 向上 < 0
				clearTimeout(timer);
				timer = setTimeout(function(){
					toChange(ev);
				}, 200);
				
			},false);
		}

		_this.oContent.onmousewheel = function(ev){
			var ev = ev||window.event; //向下 < 0 , 向上 > 0
			clearTimeout(timer);
			timer = setTimeout(function(){
				toChange(ev);
			}, 200);
				
		};

		function toChange(ev){

			if(ev.detail){
				bBtn = ev.detail > 0 ? true : false;
			}
			else{
				bBtn = ev.wheelDelta < 0 ? true : false;
			}

			if(bBtn){
				if(_this.iNow != _this.oListLi.length-1){
					_this.iNow++;
				}
				
				_this.move(_this.iNow);
			}
			else{
				if(_this.iNow != 0){
					_this.iNow--;
				}
				_this.move(_this.iNow);
			}

			if(ev.preventDefault){
				ev.preventDefault();
			}
			else{
				return false;
			}

		}

	},




};

function $(id){
	return document.getElementById(id);
}

function view(){
	return {
		w : window.innerWidth || document.documentElement.clientWidth,
		h : window.innerHeight || document.documentElement.clientHeight
	}
}

function getByClass(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var aResult = [];
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

function setStyle(obj,attr,value){
	obj.style[attr] = value;
	obj.style['webkit'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
	obj.style['Moz'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
	obj.style['o'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
}