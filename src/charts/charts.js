/**
 * @author Perlou
 * @charts.js
 * @exports {Func} loadCharts
 */

'use strict';

// echarts module
var echarts = require('echarts/lib/echarts');
// 引入雷达图
require('echarts/lib/chart/radar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/radar');

// data
var feSkillOption = require('./FrontEndSkill'),
	beSkillOption = require('./BackEndSkill'),
	fefSkillOption = require('./FrontEndFrame');

// 图表数据渲染
function loadCharts(){
	// 图表初始化
	var feSkillChart = echarts.init(document.getElementById('feSkillChart')),
		beSkillChart = echarts.init(document.getElementById('beSkillChart')),
		fefSkillChart = echarts.init(document.getElementById('fefSkillChart'));

	feSkillChart.setOption(feSkillOption);
	beSkillChart.setOption(beSkillOption);
	fefSkillChart.setOption(fefSkillOption);
}

module.exports = loadCharts();

