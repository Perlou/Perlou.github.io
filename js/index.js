window.onload = function(){

	var m1 = new Main('main');
	m1.init();
};

function Main(id){
	this.oDiv = $(id);
	this.oNav = $('nav');
	this.iNow = 0;
	this.preIndex = 0;
	this.oLoading = $('loading');
	this.aNavLi = this.oNav.getElementsByTagName('li');
	this.oArrow = $('arrow');
	this.oHeader = $('header');
	this.oContent = $('content');
	this.oList = $('list');
	this.oListLi = getByClass(this.oList,'liList');
	this.oListDiv = getByClass(this.oList,'divList');
	this.iContentHeight = 0;
	this.oHomeContent = $('homeContent');
	this.oHomeContent1 = getByClass(this.oHomeContent,'homeContent1')[0];
	this.oHomeContent2 = getByClass(this.oHomeContent,'homeContent2')[0];
	this.oWorksContent = $('worksContent');
	this.oWorksContent2 = getByClass(this.oWorksContent,'worksContent2')[0];
	this.oCourseContent = $('courseContent');
	this.oCourseContent3 = getByClass(this.oCourseContent,'courseContent3')[0];
	this.oAboutContent = $('aboutContent');
	this.oAboutContent1 = getByClass(this.oAboutContent,'aboutContent1')[0];
	this.oAboutContent2 = getByClass(this.oAboutContent,'aboutContent2')[0];
	this.oAboutContent3 = getByClass(this.oAboutContent,'aboutContent3')[0];
	this.oAboutImg = getByClass(this.oAboutContent3,'aboutImg');
	this.oTeamContent = $('teamContent');
	this.oTeamContent1 = getByClass(this.oTeamContent,'teamContent1')[0];
	this.oTeamContent2 = getByClass(this.oTeamContent,'teamContent2')[0];
	this.oTeamContent3 = getByClass(this.oTeamContent,'teamContent3')[0];
	this.oMusic = $('music');
	this.oAudio = $('audio1');
	this.oMenu = $('menu');
	this.oMenuLi = this.oMenu.getElementsByTagName('li');
}

Main.prototype = {

	'init' : function(){
		this.loading();
		this.bindNav();
		this.set();
		this.create();
		this.mousewheel();
		this.homeContent();
		this.aboutContent();
		this.teamContent();
		this.animate();
		this.music();
	},

	'loading' : function(){

		var _this = this;
		var oSpan = _this.oLoading.getElementsByTagName('span')[0];
		var aDiv = _this.oLoading.getElementsByTagName('div');
		var imgArr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
		var iNow = 0;
		
		for(var i=0;i<imgArr.length;i++){
			
			var objImg = new Image();
			objImg.src = 'img/'+imgArr[i];
			objImg.onload = function(){
				iNow++;
				oSpan.style.width = iNow/imgArr.length*100 + '%';
			};
			
		}
		oSpan.addEventListener('webkitTransitionend',spanChange,false);
		oSpan.addEventListener('transitionend',spanChange,false);
		
		function spanChange(){
			if(oSpan.style.width == '100%'){
				oSpan.style.display = 'none';
				aDiv[0].style.height = 0;
				aDiv[1].style.height = 0;
			}
		}
		
		aDiv[0].addEventListener('webkitTransitionend',divChange,false);
		aDiv[0].addEventListener('transitionend',divChange,false);
		
		
		function divChange(){
			_this.oLoading.parentNode.removeChild(_this.oLoading);
			_this.oMusic.onclick();
			_this.animateModels[0].inAn();
		}

	},

	'set' : function(){

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

	'create' : function(){
		var _this = this;

		var homeData = [
			{ text : 'One layer'},
			{ text : 'Two layer'},
			{ text : 'Three layer'},
			{ text : 'Four layer'},
		];

		var worksData = [
			{ img : 'img/worksimg1.jpg' , text : '测试文本11111' },
			{ img : 'img/worksimg2.jpg' , text : '测试文本22222' },
			{ img : 'img/worksimg3.jpg' , text : '测试文本33333' },
			{ img : 'img/worksimg4.jpg' , text : '测试文本44444' },
		];

		var courseData = [
			{ bg :'img/binoli.png' ,  text : '测试文本111111' },
			{ bg :'img/bks.png' ,  text : '测试文本222222' },
			{ bg :'img/gu.png' ,  text : '测试文本333333' },
			{ bg :'img/hlx.png' ,  text : '测试文本444444' },
			{ bg :'img/hlx.png' ,  text : '测试文本555555' },
			{ bg :'img/gu.png' ,  text : '测试文本666666' },
			{ bg :'img/bks.png' ,  text : '测试文本777777' },
			{ bg :'img/binoli.png' ,  text : '测试文本888888' },
			{ bg :'img/binoli.png' ,  text : '测试文本999999' },
			{ bg :'img/bks.png' ,  text : '测试文本101010' },
			{ bg :'img/gu.png' ,  text : '测试文本111111' },
			{ bg :'img/hlx.png' ,  text : '测试文本121212' },
		];

		var cTeamContentUl = document.createElement('ul');

		for( var i=0; i<homeData.length; i++){
			var cLi = document.createElement('li');
			var cBtn = document.createElement('li');
			cLi.innerHTML = '<h1 class="commonTitle">'+homeData[i].text+'</h1>';
			_this.oHomeContent1.appendChild(cLi);
			_this.oHomeContent2.appendChild(cBtn);
		}

		for( var i=0; i<worksData.length; i++){
			var cWorksDiv = document.createElement('div');
			cWorksDiv.className = 'worksImgParent';
			cWorksDiv.innerHTML = '<img class="worksImg" src="'+(worksData[i].img)+'" /><div class="worksImgMark"><span>'+(worksData[i].text)+'</span><div></div></div>';
			_this.oWorksContent2.appendChild(cWorksDiv);
		}

		for( var i=0; i<5; i++){
			var cCourseLine = document.createElement('div');
			cCourseLine.className = 'courseLine';
			_this.oCourseContent3.appendChild(cCourseLine);
		}

		for( var i=0; i<courseData.length;i++ ){
			var cCourseLogo = document.createElement('div');
			cCourseLogo.className = 'courseLogo';
			cCourseLogo.innerHTML = '<div class="courseBefore" style="background-image:url('+courseData[i].bg+');"></div><div class="courseAfter">'+courseData[i].text+'</div>';
			_this.oCourseContent3.appendChild(cCourseLogo);
		}

		for(var i=0; i<8; i++){
			var cLi = document.createElement('li');
			cLi.style.backgroundPosition = -(i*118)+'px 0';
			cTeamContentUl.appendChild(cLi);
		}
		_this.oTeamContent3.appendChild(cTeamContentUl);
		
	},

	//顶部及侧边导航
	'bindNav' : function(){
		var _this=this;
		var oDiv = this.aNavLi[0].getElementsByTagName('div')[0];
		oDiv.style.width = '100%';
		this.oArrow.style.left = this.aNavLi[0].offsetLeft + this.aNavLi[0].offsetWidth/2 - this.oArrow.offsetWidth/2 +'px';

		for(var i=0; i<_this.aNavLi.length; i++){
			_this.aNavLi[i].index = i;

			_this.aNavLi[i].onmousedown = function(){
				_this.preIndex = _this.iNow; //记录上一屏是哪个页面
				_this.iNow =this.index;
				_this.move(_this.iNow );
			};
		}
		
		for(var i=0; i<_this.oMenuLi.length; i++){
			_this.oMenuLi[i].index = i;

			_this.oMenuLi[i].onclick = function(){
				_this.preIndex = _this.iNow; //记录上一屏是哪个页面
				_this.iNow =this.index;
				_this.move(_this.iNow );
			};
		}

	},

	//鼠标滚轮事件
	'mousewheel' : function(){
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

			if( (_this.iNow == 0 && !bBtn) || (_this.iNow == _this.oListLi.length-1 && bBtn) ){return;}
			_this.preIndex = _this.iNow; //记录上一屏是哪个页面
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

	'homeContent' : function(){

		var _this = this;

		var aLi = _this.oHomeContent1.getElementsByTagName('li');
		var oBtn = _this.oHomeContent2.getElementsByTagName('li');
		var oldIndex = 0;

		aLi[0].className = 'active';
		oBtn[0].className = 'active';

		for(var i=0; i<oBtn.length;i++){
			oBtn[i].index = i;
			oBtn[i].onclick = function(){
				homeSlide(this.index);
			};
		}

		function homeSlide(index){
			for(var i=0;i<oBtn.length;i++){
				oBtn[i].className = '';
			}
			oBtn[index].className = 'active';
			if(index > oldIndex){
				aLi[index].className = 'rightShow';
				aLi[oldIndex].className = 'leftHide';
			}
			else if(index < oldIndex){
				aLi[index].className = 'leftShow';
				aLi[oldIndex].className = 'rightHide';
			}
			oldIndex = index;
		}

	},

	'aboutContent' : function(){
		var _this = this;
		var oUl = _this.oAboutContent3.getElementsByTagName('ul');
		var oSpan = _this.oAboutContent3.getElementsByTagName('span');

		for(var i=0; i<oUl.length;i++){
			change(oUl[i]);
		}

		function change(ul){
			var w = ul.offsetWidth/2;
			var h = ul.offsetHeight/2;
			var src = ul.dataset.src;


			for(var i=0; i<4; i++){
				var cLi = document.createElement('li');
				cLi.style.width = w + 'px';
				cLi.style.height = h + 'px';
				var cImg = document.createElement('img');
				cImg.src = src;
				cImg.style.left = - i%2 * w + 'px';
				cImg.oldleft = - i%2 * w;
				cImg.style.top =  - Math.floor(i/2) * h + 'px'; 
				cImg.oldtop = - Math.floor(i/2) * h;
				cLi.appendChild(cImg);
				ul.appendChild(cLi);

			}

			var data = [
				{ direct : 'top' , value : h },
				{ direct : 'left' , value : - w*2 },
				{ direct : 'left' , value : w },
				{ direct : 'top' , value : - h*2 },
			];

			var aImg = ul.getElementsByTagName('img');

			ul.onmouseover = function(){
				for(i=0; i<aImg.length;i++){
					aImg[i].style[ data[i].direct ] = data[i].value + 'px';
				}
			};

			ul.onmouseout = function(){
				for(var i=0;i<aImg.length;i++){
					aImg[i].style[ data[i].direct ] = aImg[i]['old'+data[i].direct] + 'px';
				}

			};
		}


	},

	'teamContent' : function(){
		var _this=this;

		var oTeamLi = _this.oTeamContent3.getElementsByTagName('li');
		var oC = null;
		var w = 118;
		var h = 400;
		var timer1 = null;
		var timer2 = null;

		bindTeamList();

		_this.oTeamContent3.onmouseleave = function(){
			removeCanvas();
			for(var i=0;i<oTeamLi.length;i++){
				oTeamLi[i].style.opacity = 1;
			}			
		};

		function bindTeamList(){
			for(var i=0;i<oTeamLi.length; i++){
				oTeamLi[i].index = i;
				oTeamLi[i].onmouseover = function(){
					createCanvas();
					oC.style.left = this.index * w +'px';
					setStyle(oC,'transition','.4s');
					for(var i=0;i<oTeamLi.length;i++){
						oTeamLi[i].style.opacity = 0.3;
					}
					this.style.opacity = 1;
				};
			}
		}

		function createCanvas(){
			if(!oC){
				oC = document.createElement('canvas');
				oC.id = 'teamCanvas';
				oC.width = w;
				oC.height = h;
				_this.oTeamContent3.appendChild(oC);
				canvasAn(oC);
			}
		}

		function removeCanvas(){
			_this.oTeamContent3.removeChild(oC);
			clearInterval(timer1);
			clearInterval(timer2);
			oC = null;
		}

		function canvasAn(oC){
			var oGc = oC.getContext('2d');

			var arr =[];

			timer1 = setInterval(function(){

				console.log(arr.length);

				oGc.clearRect(0,0,oC.width,oC.height);

				for(var i=0;i<arr.length;i++){
					arr[i].num += 5;
					arr[i].x = arr[i].startX - Math.sin(arr[i].num*Math.PI/180)*arr[i].speed;
					arr[i].y = arr[i].startY - (arr[i].num*Math.PI/180)*arr[i].speed;

					if(arr[i].y <= 0) {
						arr.splice(i,1);
					}

				}


				for(var i=0; i<arr.length; i++){

					oGc.fillStyle = 'rgba('+arr[i].c1+','+arr[i].c2+','+arr[i].c3+','+arr[i].c4+')';
					oGc.beginPath();
						oGc.moveTo(arr[i].x,arr[i].y);
						oGc.arc(arr[i].x,arr[i].y,arr[i].r,0,360*Math.PI/180,false);
					oGc.closePath();
					oGc.fill();
				}

			},100/6);

			timer2 = setInterval(function(){

				var x = Math.random()*oC.width;
				var y = oC.height - 20;
				var r = Math.random()*6+2;
				var c1 = Math.floor(Math.random()*255);
				var c2 = Math.floor(Math.random()*255);
				var c3 = Math.floor(Math.random()*255);
				var c4 = 1;
				var num = 0;
				var speed = Math.random()*30 + 10;
				var startX = x;
				var startY = y;

				arr.push({
					x : x,
					y : y,
					r : r,
					c1 : c1,
					c2 : c2,
					c3 : c3,
					c4 : c4,
					num : num,
					speed : speed,
					startX : startX,
					startY : startY
				});

			},100);
		}
		
	},

	'animate' : function(){

		var _this = this;
		//各个页面的出入场动画
		this.animateModels = [

			//homeContent
			{
				inAn : function(){ //入场

					_this.oHomeContent1.style.opacity = _this.oHomeContent2.style.opacity = 1;
					setStyle(_this.oHomeContent1,'transform','translate(0,0)');
					setStyle(_this.oHomeContent2,'transform','translate(0,0)');	

				},

				outAn : function(){  //出场

					_this.oHomeContent1.style.opacity = _this.oHomeContent2.style.opacity = 0;
					setStyle(_this.oHomeContent1,'transform','translate(0,-150px)');
					setStyle(_this.oHomeContent2,'transform','translate(0,150px)');

				}
			},

			//courseContent
			{
				inAn : function(){

					var oPlane1 = getByClass(_this.oCourseContent,'plane1')[0];
					var oPlane2 = getByClass(_this.oCourseContent,'plane2')[0];
					var oPlane3 = getByClass(_this.oCourseContent,'plane3')[0];

					setStyle(oPlane1,'transform','translate(0,0)');
					setStyle(oPlane2,'transform','translate(0,0)');
					setStyle(oPlane3,'transform','translate(0,0)');

				},

				outAn : function(){

					var oPlane1 = getByClass(_this.oCourseContent,'plane1')[0];
					var oPlane2 = getByClass(_this.oCourseContent,'plane2')[0];
					var oPlane3 = getByClass(_this.oCourseContent,'plane3')[0];

					setStyle(oPlane1,'transform','translate(-200px,-200px)');
					setStyle(oPlane2,'transform','translate(-200px,200px)');
					setStyle(oPlane3,'transform','translate(200px,-200px)');

				}

			},

			//worksContent
			{

				inAn : function(){

					var oPencel1 = getByClass(_this.oWorksContent,'pencel1')[0];
					var oPencel2 = getByClass(_this.oWorksContent,'pencel2')[0];
					var oPencel3 = getByClass(_this.oWorksContent,'pencel3')[0];

					setStyle(oPencel1,'transform','translate(0,0)');
					setStyle(oPencel2,'transform','translate(0,0)');
					setStyle(oPencel3,'transform','translate(0,0)');

				},

				outAn : function(){

					var oPencel1 = getByClass(_this.oWorksContent,'pencel1')[0];
					var oPencel2 = getByClass(_this.oWorksContent,'pencel2')[0];
					var oPencel3 = getByClass(_this.oWorksContent,'pencel3')[0];

					setStyle(oPencel1 , 'transform','translate(0,-200px)');
					setStyle(oPencel2 , 'transform','translate(0,200px)');
					setStyle(oPencel3 , 'transform','translate(0,200px)');			

				}

			},

			//aboutContent
			{

				inAn : function (){

					_this.oAboutContent1.style.opacity = _this.oAboutContent2.style.opacity = 1;
					setStyle(_this.oAboutContent1,'transform','translate(0,0)');
					setStyle(_this.oAboutContent2,'transform','translate(0,0)');					
					setStyle(_this.oAboutImg[0],'transform','rotate(0)');
					setStyle(_this.oAboutImg[1],'transform','rotate(0)');

				},

				outAn : function(){

					_this.oAboutContent1.style.opacity = _this.oAboutContent2.style.opacity = 0;
					setStyle(_this.oAboutContent1,'transform','translate(0,-120px)');
					setStyle(_this.oAboutContent2,'transform','translate(0,120px)');						
					setStyle(_this.oAboutImg[0],'transform','rotate(45deg)');
					setStyle(_this.oAboutImg[1],'transform','rotate(-45deg)');

				}

			},

			//teamContent
			{

				inAn : function (){

					_this.oTeamContent1.style.opacity = _this.oTeamContent2.style.opacity = _this.oTeamContent3.style.opacity = 1;
					setStyle(_this.oTeamContent1,'transform','translate(0,0)');
					setStyle(_this.oTeamContent2,'transform','translate(0,0)');
					setStyle(_this.oTeamContent3,'transform','translate(0,0)');

				},

				outAn : function(){

					_this.oTeamContent1.style.opacity = _this.oTeamContent2.style.opacity = _this.oTeamContent3.style.opacity = 0;
					setStyle(_this.oTeamContent1,'transform','translate(-160px,0)');
					setStyle(_this.oTeamContent2,'transform','translate(160px,0)');
					setStyle(_this.oTeamContent3,'transform','translate(0,40px)');

				}

			}

		];

		for(var i=0;i<_this.animateModels.length;i++){
			_this.animateModels[i].outAn();
		}

	},

	'move' : function(index){
		var _this=this;

		for(var i=0; i<_this.aNavLi.length; i++){
			var oDiv = _this.aNavLi[i].getElementsByTagName('div')[0];
			oDiv.style.width = 0;
		}

		var oDiv = _this.aNavLi[index].getElementsByTagName('div')[0];
		oDiv.style.width ='100%';
		this.oArrow.style.left = this.aNavLi[index].offsetLeft + this.aNavLi[index].offsetWidth/2 - this.oArrow.offsetWidth/2 +'px';
		
		for(var i=0; i<_this.oMenuLi.length;i++){
			_this.oMenuLi[i].className = '';
		}

		_this.oMenuLi[index].className = 'active';

		setStyle(_this.oList,'transform','translateY('+-(_this.iNow*_this.iContentHeight)+'px)')
		//_this.oList.style.top = -(_this.iNow*_this.iContentHeight)+'px';

		if(_this.animateModels[index].inAn){
			_this.animateModels[index].inAn();
		}

		if(_this.animateModels[_this.preIndex].outAn &&  _this.preIndex != index){
			_this.animateModels[_this.preIndex].outAn();
		}

	},

	'music' : function(){

		var _this = this;
		var onoff = true;

		_this.oMusic.onclick = function(){
			if(onoff){
				_this.oMusic.style.background = 'url(img/musicon.gif)';
				_this.oAudio.play();
			}
			else{
				_this.oMusic.style.background = 'url(img/musicoff.gif)';
				_this.oAudio.pause();
			}
			onoff = !onoff;
		};


	}

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
