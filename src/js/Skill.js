/**
 * @author Perlou
 * @Skill.js
 * @exports {Func} Skill
 */

function Skill(){

	var oSkill = document.getElementById('skill'),
		oSkillUl = document.getElementById('skillUl'),
		oSkillTable = document.getElementById('skillTable'),
		aSkillLi = oSkillUl.getElementsByTagName('li'),
		aSkillA = oSkillTable.getElementsByTagName('a'),
		oldIndex = 0;

	Skilltable();
	ChartsMove();

	function Skilltable(){

	    for(var i=0; i<aSkillLi.length; i++){

	        var oA = document.createElement('a');
	        oA.href = 'javascript:;';
	        oSkillTable.appendChild(oA);
	        aSkillLi[i].index = i;

	    }

	    aSkillLi[0].className = 'active';
	    aSkillA[0].className = 'active';

	}

	function ChartsMove(){

		for(var i=0; i<aSkillA.length; i++){

			aSkillA[i].index = i;
			aSkillA[i].onclick = function(){
				Move(this.index);
			}

		}

	}

	function Move(index){

		for(var i=0; i<aSkillA.length; i++){

			aSkillA[i].className = '';

		}

		aSkillA[index].className = 'active';

		if(index > oldIndex){
			aSkillLi[index].className = 'rightShow';
			aSkillLi[oldIndex].className = 'leftHide';
		}else if(index < oldIndex){
			aSkillLi[index].className = 'leftShow';
			aSkillLi[oldIndex].className = 'rightHide';
		}

		oldIndex = index;

	}

		// 	var aLi = _this.oHomeContent1.getElementsByTagName('li');
		// var oBtn = _this.oHomeContent2.getElementsByTagName('li');
		// var oldIndex = 0;

		// aLi[0].className = 'active';
		// oBtn[0].className = 'active';

		// for(var i=0; i<oBtn.length;i++){
		// 	oBtn[i].index = i;
		// 	oBtn[i].onclick = function(){
		// 		homeSlide(this.index);
		// 	};
		// }

		// function homeSlide(index){
		// 	for(var i=0;i<oBtn.length;i++){
		// 		oBtn[i].className = '';
		// 	}
		// 	oBtn[index].className = 'active';
		// 	if(index > oldIndex){
		// 		aLi[index].className = 'rightShow';
		// 		aLi[oldIndex].className = 'leftHide';
		// 	}
		// 	else if(index < oldIndex){
		// 		aLi[index].className = 'leftShow';
		// 		aLi[oldIndex].className = 'rightHide';
		// 	}
		// 	oldIndex = index;
		// }

}

module.exports = Skill;
