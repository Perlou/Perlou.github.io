define(function(require, exports, module) {
	function init() {
		$.df.done(function() {
			$("#main").get(0).className = "pageBg1 pageBg2";
			var iBodyH = $(document).height() - 84 - $(window).height();
			if (iBodyH > 0) {
				$("html,body").animate({
					scrollTop: iBodyH
				}, 300)
			}
			var bL = false;
			setTimeout(function() {
				$.fn.bHash = true
			}, 100);
			$('.about_nav div').eq(0).addClass('active').siblings().removeClass('active');
			$('.about-main').fadeIn(100);
			$('#about').css({
				'opacity': 1
			});

			function sNav() {
				$('#about aside').css({
					'left': 0,
					'opacity': 1
				});
				var aDiv = $('#about aside div');
				setTimeout(function() {
					var tn = null;
					var ic = 0;
					tn = setInterval(function() {
						if (aDiv.eq(ic).attr('class') != 'active') {
							aDiv.eq(ic).css({
								'margin-left': -87
							})
						}
						ic++;
						if (ic > aDiv.length) {
							ic = 0;
							clearInterval(tn)
						}
					}, 300)
				}, 1200)
			};~
			function() {
				var aBlock = $('#about aside div');
				var aDd = $('.about-main dd');
				$('#about aside').fadeIn(2000);
				for (var i = 0; i < aDd.length; i++) {
					if (i == 0) {
						aDd[i].pos = 'center'
					} else {
						aDd[i].pos = 'right'
					};
					aDd[i].style.Transition = aDd[i].style.MozTransition = aDd[i].style.WebkitTransition = '1s all ease'
				}
				aBlock.click(function() {
					if ($(this).attr('class') != 'active') {
						aBlock.css({
							'margin-left': -87
						});
						$(this).addClass('active').siblings().removeClass('active');
						Moves($(this).index())
					}
				});

				function addCss(obj, Trans, Form) {
					$.setCss($(obj), {
						$Transition: Trans,
						$Transform: Form
					})
				};

				function Moves(i) {
					if (aDd[i].pos == 'right') {
						var ctr = 0;
						for (var c = 0; c < aDd.length; c++) {
							if (aDd[c].pos == 'center') {
								ctr = c;
								$.setCss($(aDd).eq(c), {
									$Transition: '',
									$Transform: "translateZ(0) rotateY(180deg)",
									$TransformOrigin: "center"
								})
							}
						};
						setTimeout(function() {
							aDd[ctr].pos = 'left';
							aDd[ctr].style.opacity = 0;
							$.setCss($(aDd).eq(ctr), {
								$Transition: '1s all ease',
								$Transform: "translateZ(100px) rotateY(210deg)",
								$TransformOrigin: "left"
							});
							aDd[i].pos = 'center';
							aDd[i].style.opacity = 1;
							$.setCss($(aDd).eq(i), {
								$Transition: '1s all ease',
								$Transform: "translateZ(0) rotateY(180deg)",
								$TransformOrigin: "center"
							})
						}, 0)
					} else if (aDd[i].pos == 'left') {
						var ctr = 0;
						for (var c = 0; c < aDd.length; c++) {
							if (aDd[c].pos == 'center') {
								ctr = c;
								$.setCss($(aDd).eq(c), {
									$Transition: '',
									$Transform: "translateZ(0) rotateY(180deg)",
									$TransformOrigin: "center"
								})
							}
						};
						setTimeout(function() {
							aDd[ctr].pos = 'right';
							aDd[ctr].style.opacity = 0;
							$.setCss($(aDd).eq(ctr), {
								$Transition: '1s all ease',
								$Transform: "translateZ(100px) rotateY(150deg)",
								$TransformOrigin: "right"
							});
							aDd[i].pos = 'center';
							aDd[i].style.opacity = 1;
							$.setCss($(aDd).eq(i), {
								$Transition: '1s all ease',
								$Transform: "translateZ(0) rotateY(180deg)",
								$TransformOrigin: "center"
							})
						}, 0)
					}
				}
			}();
			var cP1 = $('.acont-masge .center').eq(0);
			var cC1 = $('.acont-masge .center div').eq(0);
			var bP1 = $('.acont-masge var').eq(0);
			var bC1 = $('.acont-masge var i').eq(0);
			miaovScroll(cP1, cC1, bP1, bC1);
			var cP2 = $('.acont-us .center').eq(0);
			var cC2 = $('.acont-us .center div').eq(0);
			var bP2 = $('.acont-us var').eq(0);
			var bC2 = $('.acont-us var i').eq(0);
			miaovScroll(cP2, cC2, bP2, bC2);
			var iWs = $(document).width();
			var iTarg = [-298, -171, -44, 84, 211, 338];
			var Tween = {
				Linear: function(t, b, c, d) {
					return c * t / d + b
				},
				Elastic: function(t, b, c, d, a, p) {
					if (t == 0) return b;
					if ((t /= d) == 1) return b + c;
					if (!p) p = d * .23;
					if (!a || a < Math.abs(c)) {
						a = c;
						var s = p / 3
					} else var s = p / (2 * Math.PI) * Math.asin(c / a);
					return (a * Math.pow(2, -20 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b)
				}
			};

			function Move(obj, i) {
				var t = 0,
					c = iWs / 2 + iTarg[i],
					d = 100 + i * 20;
				obj.css('left', 0);
				clearTimeout(obj._t);

				function _run() {
					if (t < d) {
						t++;
						obj.css('left', Math.ceil(Tween.Elastic(t, 0, c, d)));
						obj._t = setTimeout(_run, 10)
					} else {
						obj.css('left', c)
					}
				}
				_run()
			}
			function inPtr() {
				var aNav = $('.about_nav div');
				var iN = aNav.length;
				var oNav = $('.about_nav').eq(0);
				$(oNav).css({
					'left': -(iWs - 1000) / 2,
					'width': iWs,
					'min-width': 1000
				});
				iT = setInterval(function() {
					if (iN <= 0) {
						iN = aNav.length;
						clearInterval(iT)
					} else {
						iN--;
						Move($(aNav).eq(iN), iN)
					}
				}, 200);
				resethtml(0);
				showptr(0);

				function resethtml(iN) {
					var iNbr = 63;
					var str = '';
					for (var i = 0; i < iNbr; i++) {
						str += '<b style="background-position:center ' + (-i * 10 - 10) + 'px;top:' + (i * 10 - 10) + 'px;opacity:0;"></b>'
					};
					$('.aContent1 li').eq(iN).children('div').html(str)
				};

				function showptr(ic) {
					var aLis = $('.aContent1 li');
					aLis.fadeOut().eq(ic).fadeIn();
					resethtml(ic);
					var set = $('.aContent1 li section blockquote');
					set.parent().css({
						opacity: 0,
						top: 230
					});
					set.children('h2').children('b').css({
						top: 0
					});
					set.children('p').children('b').css({
						top: 0
					});
					var aB = $('.aContent1 li div').eq(ic).children('b');
					var i = 0;
					var ptr = setInterval(function() {
						aB.eq(i).css({
							'opacity': 1,
							'background-position': 'center ' + (-i * 10) + 'px',
							'top': i * 10 + 'px'
						}).opacity = 1;
						i++;
						if (i == 63) {
							shownews(ic);
							setTimeout(function() {
								sNav()
							}, 1500);
							clearInterval(ptr)
						}
					}, 10)
				}
				function shownews(i) {
					var set = $('.aContent1 li').eq(i).children('section').eq(0);
					set.css({
						'opacity': 1,
						'top': 170
					});
					setTimeout(function() {
						set.children().children('h2').children('b').css({
							top: 28
						});
						set.children().children('p').children('b').css({
							top: 16
						})
					}, 400)
				};
				$(aNav).mousedown(function() {
					bL = $(this).attr('class') != 'active' ? true : false;
					$(this).addClass('active').siblings().removeClass('active');
					$.setCss($(this), {
						$Transition: '.4s all ease',
						$Transform: 'scale(0.8)'
					})
				});
				$(aNav).mouseup(function() {
					$.setCss($(this), {
						$Transition: '.6s all cubic-bezier(0.285, 1.650, 0.745, 1.650)',
						$Transform: 'scale(1)'
					});
					if (bL == true) {
						showptr($(this).index());
						bL = false
					}
				})
			};
			inPtr()
		})
	};
	exports.init = init
});