'use strict'

//css
require('./styles/reset.css');
require('./styles/index.css');

//js
var load = require('./js/load');
var init = require('./js/initial');
var loadCharts = require('./charts/charts');

window.onload = loadFn();
window.onresize = function(){
	loadCharts();
};

function loadFn(){
	var btn = document.getElementById('frontStart'),
		span = btn.getElementsByTagName('span')[0],
		div = document.getElementById('front');

	btn.onclick = function(){
		btn.className = 'frontStart';
		span.style.display = 'none';
		setTimeout(function(){
			div.style.display = 'none';
			load();
			init();
			loadCharts();
		},500);
	}	
}
