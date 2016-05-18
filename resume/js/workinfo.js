/**
 * Created by Administrator on 2015/8/12.
 */

function ufoFn(){

    var ufo = document.getElementById('ufo');
    var ufo_img = ufo.getElementsByTagName('img');
    var light = document.getElementsByClassName('light')[0];
    var mp3Ufo = document.getElementById('mp3ufo');
    ufo_img[0].style.webkitTransform = 'translateY(0) rotate(0)';
    ufo_img[0].style.transform = 'translateY(0) rotate(0)';
    light.className += ' light_shake';
    setTimeout(function(){

        light.style.display = 'none';

    },1500);
    setTimeout(function(){

        setTimeout(function(){

            mp3Ufo.play();

        },500);
        var ufoNum = 0;
        var ufoTimer = setInterval(function(){

            ufo_img[0].src = 'images/ufo/cutufo_'+ ufoNum +'.png';
            ufoNum++;
            if(ufoNum>13){

                clearInterval(ufoTimer);

            }

        },60);
        ufo_img[1].style.display = 'block';
        setTimeout(function(){

            ufo_img[1].className = 'light_shake';

        },12);
        setTimeout(function(){

            ufo_img[1].style.display = 'none';

        },1000);
        workInfoFn(ufo_img[0]);

    },1000);

}


function workInfoFn(){

    var work = document.getElementById('work');
    var svg = document.getElementById('work-svg');
    var aG = svg.getElementsByTagName('g');
    var work_middle = work.getElementsByClassName('work-middle')[0];
    var oImg = work_middle.getElementsByTagName('img')[0];
    var svgBj = document.getElementById('svgBj');
    var work_left = work.getElementsByClassName('work-left')[0];
    var work_right = work.getElementsByClassName('work-right')[0];
    var oP = work_right.getElementsByTagName('p')[0];
    var work_3D = work_right.getElementsByClassName('work-3D')[0];
    var work_3D_div = work_3D.getElementsByTagName('div');
    var work_jt = work_right.getElementsByClassName('jt')[0];
    var aA = work_jt.getElementsByTagName('a');
    var ufoLight = document.getElementById('ufo').getElementsByClassName('ufoLight')[0];
    var work_left_children = work_left.getElementsByClassName('work-left-children');
    var work_left_text = work_left.getElementsByClassName('work-left-text')[0];
    var pop = work.getElementsByClassName('pop')[0];
    var alert_bottom = pop.getElementsByClassName('alert-bottom')[0];
    var oA = pop.getElementsByTagName('a')[0];
    var showNum = 0;
    var textTimer = null;
    var mp3Rotation = document.getElementById('rotation');
    var mp3Zuan = document.getElementById('zuan');
    var arr = [];
    var num1 = work_3D_div.length;
    var angle = null;
    var hide = 4;
    if(num1<=8){

        angle = 360/num1;
        for(var i=0; i<num1; i++){

            arr.push(angle*i);

        }

    }else{

        angle = 45;
        for(var i=0; i<num1-1; i++){

            if(i<6){

                arr.push(angle*i);

            }else{

                arr.push(angle*6);

            }

        }
        arr.push(angle*7);

    }
    table(arr,work_3D_div);

    work_middle.style.webkitTransform = 'scale(1) rotate(0deg)';
    work_middle.style.transform = 'scale(1) rotate(0deg)';
    setTimeout(function(){

        aG[0].style.display = 'block';
        var workInfo = new Walkway({
            selector: '#workInfo',
            duration: 200,
            easing: 'linear'
        }).draw(function(){

                var num = 0;
                var num2 = 0;
                aG[1].style.display = 'block';
                aG[2].style.display = 'block';
                svgBj.style.opacity = 1;
                var iTimer = setInterval(function(){

                    aG[2].style.opacity = num%2;
                    num++;
                    if(num>=6){

                        clearInterval(iTimer);

                    }

                },100);
                work_right.style.webkitTransform = 'translate(0)';
                work_right.style.transform = 'translate(0)';
                work_right.style.opacity = 1;
                work_3D.style.webkitTransform = 'rotateX(0deg)';
                work_3D.style.transform = 'rotateX(0deg)';
                mp3Zuan.play();
                work_jt.style.opacity = 1;
                var iTimer2 = setInterval(function(){

                    work_left_children[num2].style.cssText = 'opacity: 1; -webkit-transform: translateX(0);' +
                        ' transform: translateX(0)';
                    num2++;
                    if(num2>=work_left_children.length){

                        clearInterval(iTimer2);

                    }

                },100);
                var workInfo2 = new Walkway({
                    selector: '#workInfo2',
                    duration: 50,
                    easing: 'linear'
                }).draw(function(){

                        aG[3].style.display = 'block';
                        var workInfo4 = new Walkway({
                            selector: '#workInfo4',
                            duration: 100,
                            easing: 'linear'
                        }).draw(function(){

                                aG[4].style.display = 'block';
                                var workInfo5 = new Walkway({
                                    selector: '#workInfo5',
                                    duration: 50,
                                    easing: 'linear'
                                }).draw(function(){

                                        setTimeout(function(){

                                            work_3D_div[hide].style.display = 'none';
                                            work_3D_div[showNum].className = 'show';
                                            var nowNum = 0;
                                            var ufoTimer = null;
                                            var lightTimer = null;
                                            work_left_children[3].onclick = function(){

                                                pop.style.display = 'block';

                                            };
                                            oA.onclick = function(){

                                                pop.style.display = 'none';

                                            };
                                            work_jt.bOff = true;
                                            aA[0].onclick = function(){

                                                if(work_jt.bOff){

                                                    work_jt.bOff = false;
                                                    mp3Rotation.pause();
                                                    mp3Rotation.currentTime = 0;
                                                    mp3Rotation.play();
                                                    clearInterval(ufoTimer);
                                                    nowNum--;
                                                    work_3D_div[hide].style.display = 'block';
                                                    hide--;
                                                    if(hide<0){

                                                        hide = work_3D_div.length -1;

                                                    }
                                                    work_3D_div[hide].style.display = 'none';
                                                    if(nowNum<0){

                                                        nowNum = work_3D_div.length -1;

                                                    }
                                                    work_3D_div[showNum].className = '';
                                                    showNum--;
                                                    if(showNum<0){

                                                        showNum = work_3D_div.length-1;

                                                    }
                                                    setTimeout(function(){

                                                        work_3D_div[showNum].className = 'show';
                                                        arr.push(arr.shift());
                                                        arr[arr.length-1]+=360;
                                                        table(arr,work_3D_div);
                                                        textTable(work_left_text,nowNum);
                                                        shakeLight();

                                                    },12)

                                                }

                                            };
                                            aA[1].onclick = function(){

                                                if(work_jt.bOff){

                                                    work_jt.bOff = false;
                                                    mp3Rotation.pause();
                                                    mp3Rotation.currentTime = 0;
                                                    mp3Rotation.play();
                                                    clearInterval(ufoTimer);
                                                    nowNum++;
                                                    work_3D_div[hide].style.display = 'block';
                                                    hide++;
                                                    if(hide>=work_3D_div.length){

                                                        hide = 0;

                                                    }
                                                    work_3D_div[hide].style.display = 'none';
                                                    if(nowNum>=work_3D_div.length){

                                                        nowNum = 0;

                                                    }
                                                    work_3D_div[showNum].className = '';
                                                    showNum++;
                                                    if(showNum>=work_3D_div.length){

                                                        showNum = 0;

                                                    }
                                                    setTimeout(function(){

                                                        work_3D_div[showNum].className = 'show';
                                                        arr.unshift(arr.pop());
                                                        arr[0]-=360;
                                                        table(arr,work_3D_div);
                                                        textTable(work_left_text,nowNum);
                                                        shakeLight();

                                                    },12)

                                                }

                                            };
                                            function shakeLight(){

                                                clearTimeout(lightTimer);
                                                ufoLight.style.opacity = '.65';
                                                lightTimer = setTimeout(function(){

                                                    ufoLight.style.opacity = '0';

                                                },300);

                                            }

                                        },1500);

                                    });

                            });

                    });

            });

    },300);

    function table(arr,obj){

        for(var i=0; i<arr.length; i++){

            obj[i].style.webkitTransform = 'rotateX('+arr[i]+'deg) translateZ(100px)';
            obj[i].style.transform = 'rotateX('+arr[i]+'deg) translateZ(100px)';

        }

    }
    function textTable(obj,num){

        clearTimeout(textTimer);
        obj.style.WebkitFilter = 'blur(20px)';
        obj.style.MozFilter = 'blur(20px)';
        obj.style.MsFilter = 'blur(20px)';
        obj.style.filter = 'blur(20px)';
        obj.style.webkitTransform = 'scale(1.5,0)';
        obj.style.transform = 'scale(1.5,0)';
        obj.style.opacity = 0;
        oImg.style.webkitTransform = 'scale(0) rotate(540deg)';
        oImg.style.transform = 'scale(0) rotate(540deg)';
        oP.innerHTML = Json.work[num].date;
        textTimer = setTimeout(function(){

            work_left_children[1].innerHTML = '工作职位：' + Json.work[num].job;
            work_left_children[2].innerHTML = alert_bottom.innerHTML =  Json.work[num].detail;
            oImg.src = Json.work[num].logo;
            obj.style.WebkitFilter = 'blur(0px)';
            obj.style.MozFilter = 'blur(0px)';
            obj.style.MsFilter = 'blur(0px)';
            obj.style.filter = 'blur(0px)';
            obj.style.webkitTransform = 'scale(1,1)';
            obj.style.transform = 'scale(1,1)';
            obj.style.opacity = 1;
            oImg.style.webkitTransform = 'scale(1) rotate(0deg)';
            oImg.style.transform = 'scale(1) rotate(0deg)';
            setTimeout(function(){

                work_jt.bOff = true;

            },350);

        },350);


    }

}

