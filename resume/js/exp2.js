/**
 * Created by Administrator on 2015/8/27.
 */
var sLine = '<div class="lineCase"><div class="lightCase"></div><div class="imgCase"><img src="images/fractal.jpg" alt="" /></div></div>';

function ground(){

    var oExp = document.getElementById('exp');
    var initial = oExp.getElementsByClassName('initial')[0];
    var middle = initial.getElementsByClassName('middle')[0];
    var circle = initial.getElementsByClassName('inside-circle')[0];
    var aLi = circle.getElementsByTagName('li');
    var oImg = circle.getElementsByTagName('img')[0];
    var expSvg = initial.getElementsByClassName('exp-svg')[0];
    var circleSvg = initial.getElementsByClassName('circle-img')[0];
    var aG = circleSvg.getElementsByClassName('circle-img-g');
    var expText = initial.getElementsByClassName('exp-text')[0];
    var oImg2 = expText.getElementsByTagName('img')[0];
    var aSpan = expText.getElementsByTagName('span');
    var expItem = expText.getElementsByClassName('exp-item')[0];
    var oUl = oExp.getElementsByTagName('ul')[0];
    var aChild = oUl.children;
    var lightLine = oExp.getElementsByClassName('lightLine')[0];
    var lineCase = lightLine.getElementsByClassName('lineCase');
    var imgCase = lightLine.getElementsByClassName('imgCase');
    var aImg = lightLine.getElementsByTagName('img');
    var text = document.getElementById('text');
    var textTop = oExp.getElementsByClassName('textTop')[0];
    var backBg = document.getElementById('backBg');
    var photo = backBg.getElementsByClassName('photo')[0];
    var aLi2 = backBg.getElementsByTagName('li');
    var oClose = backBg.getElementsByClassName('close')[0];
    var xq = textTop.getElementsByTagName('a')[0];
    var textChild = text.children;
    var textH = textTop.getElementsByTagName('h3')[0];
    var textItem = textTop.getElementsByClassName('textItem')[0];
    var bOff2 = true;
    oLi = null;
    var iNub = 0;
    var iHeight = 200;
    var iWidth = 520;
    var iLeft = 0;
    var iDeg = 360*Math.atan(iHeight/iWidth)/(2*Math.PI);
    var lineCaseWidth = iHeight/Math.sin(iDeg*2*Math.PI/360);
    var wWidth = document.documentElement.clientWidth||document.body.offsetWidth;
    var nav = document.getElementsByTagName('nav')[0];
    var mp3Click = document.getElementById('click');
    var mp3CircleTransform = document.getElementById('transform-1');
    var mp3Info = document.getElementById('info');
    var mp3Laser = document.getElementById('laser-beam');
    var oTable = document.getElementById('table');
    var aA = oTable.getElementsByTagName('a');
    for(var i=0; i<aChild.length; i++){

        var oA = document.createElement('a');
        oA.href = 'javascript:;';
        oTable.appendChild(oA);
        aChild[i].index = i;

    }
    //if(screen.height>=900){

        oUl.style.top = '50%';
        lightLine.style.top = '50%';
        oUl.style.marginTop = '-300px';
        lightLine.style.marginTop = '-300px';
        text.style.top = '50%';
        text.style.marginTop = '-240px';

    //}
    nav.style.top = 0;
    console.log(screen.height);
    //if(screen.height<700){

        oTable.style.top = oUl.offsetTop + 300 + 'px';

    //}
    expSvg.style.display = 'block';
    text.style.left = wWidth/2 + 200 + 'px';
    oUl.style.width = lightLine.style.width = aChild.length*520 + 'px';
    var ulLeft = (wWidth-iWidth)/2-iWidth;
    oUl.style.left = lightLine.style.left = ulLeft + 'px';
    mp3CircleTransform.play();
    for(var i=0; i<aChild.length; i++){

        aChild[i].style.webkitTransform = 'translateY(' + ((i+1)%2)*iHeight + 'px)';
        aChild[i].style.transform = 'translateY(' + ((i+1)%2)*iHeight + 'px)';
        aChild[i].posTop = ((i+1)%2)*iHeight;

    }
    for(var i=0; i<aChild.length-1; i++){

        lightLine.innerHTML += sLine;

    }
    for(var i=0; i<lineCase.length; i++){

        lineCase[i].style.top = aChild[i].posTop + 260 + 'px';
        lineCase[i].style.webkitTransform = 'rotate('+ (iDeg*(1-2*((i+1)%2))) +'deg)';
        lineCase[i].style.transform = 'rotate('+ (iDeg*(1-2*((i+1)%2))) +'deg)';
        imgCase[i].style.webkitTransform = 'rotate('+ (-1*(iDeg*(1-2*((i+1)%2)))) +'deg)';
        imgCase[i].style.transform = 'rotate('+ (-1*(iDeg*(1-2*((i+1)%2)))) +'deg)';
        lineCase[i].style.width = lineCaseWidth + 'px';

    }
    setInterval(function(){

        iLeft -= 1;
        for(var i=0; i<aImg.length; i++){

            aImg[i].style.left = iLeft + 'px';

        }
        if(iLeft<=iWidth-1920){

            iLeft = 0;

        }

    },50);
    var aa = new Walkway({

        selector: '.exp-svg',
        duration: 1500,
        easing: 'linear'

    }).draw(function(){

            oImg2.style.height = '86px';
            setTimeout(function(){

                oImg2.style.width = '272px';
                setTimeout(function(){

                    aSpan[0].style.webkitTransform = 'translate(0)';
                    aSpan[0].style.transform = 'translate(0)';
                    aSpan[1].style.webkitTransform = 'translate(0)';
                    aSpan[1].style.transform = 'translate(0)';
                    expItem.style.display = 'block';
                    setTimeout(function(){

                        lightLine.style.display = 'block';
                        mp3Laser.play();
                        var aNum = null;
                        for(var i=0; i<aChild.length; i++){

                            aChild[i].style.visibility = 'visible';
                            aChild[i].index = i;
                            aA[i].index = i;
                            aChild[i].onclick = function(){

                                console.log(bOff2);
                                if(bOff2){

                                    mp3CircleTransform.pause();
                                    mp3Click.play();
                                    mp3CircleTransform.currentTime = 0;
                                    mp3CircleTransform.play();
                                    textTop.style.opacity = 0;
                                    setTimeout(function(){

                                        textTop.style.display = 'none';

                                    },300);
                                    for(var i=1;i<textChild.length;i++){

                                        textChild[i].style.display = 'none';

                                    }
                                    lightLine.style.display = 'none';
                                    bOff2 = false;
                                    if(oLi!==this){

                                        bOff = true;
                                        if(oLi!==null){

                                            merge(oLi);

                                        }
                                        oLi = this;
                                        aNum = this.index;
                                        openNub = this.index;
                                        spread(this);
                                        setTimeout(function(){

                                            bOff2 = true;

                                        },1000);

                                    }else{

                                        if(bOff){

                                            bOff = false;
                                            oLi = this;
                                            aNum = null;
                                            merge(oLi);
                                            setTimeout(function(){

                                                lightLine.style.display = 'block';
                                                mp3Laser.play();
                                                bOff2 = true;

                                            },1000);

                                        }else{

                                            bOff = true;
                                            oLi = this;
                                            aNum = this.index;
                                            openNub = this.index;
                                            spread(oLi);
                                            lightLine.style.display = 'none';
                                            setTimeout(function(){

                                                bOff2 = true;

                                            },1000);

                                        }

                                    }

                                }

                            };
                            aA[i].onclick = function(){

                                if(aNum==null){

                                    bOff = true;
                                    mp3CircleTransform.pause();
                                    mp3Click.play();
                                    mp3CircleTransform.currentTime = 0;
                                    mp3CircleTransform.play();
                                    textTop.style.opacity = 0;
                                    setTimeout(function(){

                                        textTop.style.display = 'none';

                                    },300);
                                    for(var i=1;i<textChild.length;i++){

                                        textChild[i].style.display = 'none';

                                    }
                                    lightLine.style.display = 'none';
                                    aNum = this.index;
                                    oLi = aChild[aNum];
                                    spread(oLi);

                                }else if(aNum !== this.index){

                                    mp3CircleTransform.pause();
                                    mp3Click.play();
                                    mp3CircleTransform.currentTime = 0;
                                    mp3CircleTransform.play();
                                    textTop.style.opacity = 0;
                                    setTimeout(function(){

                                        textTop.style.display = 'none';

                                    },300);
                                    for(var i=1;i<textChild.length;i++){

                                        textChild[i].style.display = 'none';

                                    }
                                    lightLine.style.display = 'none';
                                    merge(oLi);
                                    aNum = this.index;
                                    oLi = aChild[aNum];
                                    spread(oLi);

                                }

                            };
                            xq.onclick = function(){

                                backBg.style.display = 'block';

                            };
                            oClose.onclick = function(){

                                backBg.style.display = 'none';

                            };

                        }

                    },500);

                },100);

            },200);

        });
    oImg.style.webkitTransform = 'scale(1)';
    oImg.style.transform = 'scale(1)';

    var iTimer = setInterval(function(){

        aLi[iNub].style.webkitTransform = 'rotate('+ iNub*45 +'deg) skew(47deg) scale(1)';
        aLi[iNub].style.transform = 'rotate('+ iNub*45 +'deg) skew(47deg) scale(1)';
        iNub++;
        if(iNub>=aLi.length){

            clearInterval(iTimer);
            iNub = 0;
            iTimer = setInterval(function(){

                aG[iNub].style.webkitTransform = 'translate(0,0) scale(1)';
                aG[iNub].style.transform = 'translate(0,0) scale(1)';
                iNub++;
                if(iNub>=aG.length){

                    clearInterval(iTimer);

                }

            },80);

        }

    },80);

    function spread(obj){

        var aFan = obj.getElementsByClassName('fan');
        var aImg = aFan[0].getElementsByTagName('img');
        var oLine = obj.getElementsByClassName('line')[0];
        var oUpper = obj.getElementsByClassName('upper')[0];
        var aUpperSvg = oUpper.getElementsByTagName('g');
        var aDiv = oUpper.getElementsByClassName('upper-item')[0].getElementsByTagName('div');
        var aG = obj.getElementsByClassName('circle-img-g');
        var expText = obj.getElementsByClassName('exp-text')[0];
        var oImg2 = expText.getElementsByTagName('img')[0];
        var aSpan = expText.getElementsByTagName('span');
        var expItem = expText.getElementsByClassName('exp-item')[0];

        oUl.style.webkitTransform = lightLine.style.webkitTransform = 'translate(' + (-iWidth*(obj.index-1)) + 'px)';
        oUl.style.transform = lightLine.style.transform = 'translate(' + (-iWidth*(obj.index-1)) + 'px)';
        obj.style.opacity = '1';
        obj.style.webkitTransform = 'translateY(50px) rotateX(45deg) rotateY(-18deg)';
        obj.style.transform = 'translateY(50px) rotateX(45deg) rotateY(-18deg)';
        for(var i=0; i<aG.length; i++){

            aG[i].style.webkitTransform = 'translate(90px,90px) scale(0)';
            aG[i].style.transform = 'translate(90px,90px) scale(0)';

        }
        aA[obj.index].className = 'active';
        aSpan[0].style.webkitTransform = 'translate(-63px)';
        aSpan[0].style.transform = 'translate(-63px)';
        aSpan[1].style.webkitTransform = 'translate(63px)';
        aSpan[1].style.transform = 'translate(63px)';
        expItem.style.display = 'none';
        oImg2.style.width = '136px';
        setTimeout(function(){

            oImg2.style.height = '0';

        },200);
        oLine.style.display = 'block';
        oUpper.style.display = 'block';
        aImg[0].style.webkitTransform = 'scale(1)';
        aImg[0].style.transform = 'scale(1)';
        aUpperSvg[0].style.display = 'block';
        setTimeout(function(){

            aDiv[0].style.webkitTransform = 'scale(1)';
            aDiv[0].style.transform = 'scale(1)';

        },12);
        setTimeout(function(){

            aDiv[1].style.display = 'block';

        },800);
        var c = new Walkway({

            selector: '.upperSvg1',
            duration: 300,
            easing: 'linear'

        }).draw(function(){

                aUpperSvg[1].style.display = 'block';
                var c = new Walkway({

                    selector: '.upperSvg2',
                    duration: 300,
                    easing: 'linear'

                }).draw(function(){

                        aUpperSvg[2].style.display = 'block';
                        var c = new Walkway({

                            selector: '.upperSvg3',
                            duration: 300,
                            easing: 'linear'

                        }).draw();

                    });

            });
        setTimeout(function(){

            aImg[1].style.webkitTransform = 'scale(1)';
            aImg[1].style.transform = 'scale(1)';
            setTimeout(function(){

                aFan[1].style.webkitTransform = 'scale(1)';
                aFan[1].style.transform = 'scale(1)';
                setTimeout(function(){

                    aFan[2].style.webkitTransform = 'rotate(0)';
                    aFan[2].style.transform = 'rotate(0)';
                    aFan[2].style.opacity = '1';
                    aFan[3].style.webkitTransform = 'scale(1)';
                    aFan[3].style.transform = 'scale(1)';
                    setTimeout(function(){

                        aFan[4].style.webkitTransform = 'scale(1)';
                        aFan[4].style.transform = 'scale(1)';
                        setTimeout(function(){

                            aFan[5].style.webkitTransform = 'scale(1)';
                            aFan[5].style.transform = 'scale(1)';
                            setTimeout(function(){

                                aFan[6].style.webkitTransform = 'scale(1)';
                                aFan[6].style.transform = 'scale(1)';
                                setTimeout(function(){

                                    aFan[7].style.webkitTransform = 'scale(1)';
                                    aFan[7].style.transform = 'scale(1)';
                                    setTimeout(function(){

                                        aFan[8].style.display = 'block';
                                        var a = new Walkway({

                                            selector: '.fan4',
                                            duration: 200,
                                            easing: 'linear'

                                        }).draw();
                                        var aG2 = aFan[9].getElementsByClassName('fan-g');
                                        var iNub = 0;
                                        var iTimer = setInterval(function(){

                                            aG2[iNub].style.webkitTransform = 'translate(0,0) scale(1)';
                                            aG2[iNub].style.transform = 'translate(0,0) scale(1)';
                                            iNub++;
                                            if(iNub>=aG2.length){

                                                clearInterval(iTimer);
                                                for(var i=0;i<textChild.length;i++){

                                                    textChild[i].style.display = 'block';

                                                }
                                                setTimeout(function(){

                                                    textTop.style.opacity = 1;

                                                },12);
                                                textH.innerHTML = Json.project[obj.index].name;
                                                textItem.innerHTML = Json.project[obj.index].detail;
                                                photo.innerHTML = '';
                                                for(var i=0; i<Json.project[obj.index].image.length; i++){

                                                    var img = document.createElement('img');
                                                    img.src = Json.project[obj.index].image[i];
                                                    photo.appendChild(img);

                                                }
                                                aLi2[0].getElementsByTagName('span')[0].innerHTML = Json.project[obj.index].name;
                                                aLi2[1].getElementsByTagName('span')[0].innerHTML = Json.project[obj.index].date;
                                                aLi2[2].getElementsByTagName('a')[0].innerHTML = Json.project[obj.index].link;
                                                aLi2[2].getElementsByTagName('a')[0].href = 'http://' + Json.project[obj.index].link;
                                                aLi2[3].getElementsByTagName('p')[0].innerHTML = Json.project[obj.index].detail;
                                                mp3Info.play();

                                            }

                                        },50);

                                    },100);

                                },100);

                            },100);

                        },100);

                    },100);

                },100);

            },100);

        },100);

    }


}
function merge(obj){

    obj.style.opacity = '';
    obj.style.webkitTransform = 'translateY(' + obj.posTop + 'px) rotateX(0deg) rotateY(0deg)';
    obj.style.transform = 'translateY(' + obj.posTop + 'px) rotateX(0deg) rotateY(0deg)';
    var aFan = obj.getElementsByClassName('fan');
    var aImg = aFan[0].getElementsByTagName('img');
    var oLine = obj.getElementsByClassName('line')[0];
    var oUpper = obj.getElementsByClassName('upper')[0];
    var aUpperSvg = oUpper.getElementsByTagName('g');
    var aDiv = oUpper.getElementsByClassName('upper-item')[0].getElementsByTagName('div');
    var aG = obj.getElementsByClassName('circle-img-g');
    var expText = obj.getElementsByClassName('exp-text')[0];
    var oImg2 = expText.getElementsByTagName('img')[0];
    var aSpan = expText.getElementsByTagName('span');
    var expItem = expText.getElementsByClassName('exp-item')[0];
    var oTable = document.getElementById('table');
    var aA = oTable.getElementsByTagName('a');

    for(var i=0; i<aG.length; i++){

        aG[i].style.webkitTransform = 'translate(0,0) scale(1)';
        aG[i].style.transform = 'translate(0,0) scale(1)';

    }
    aSpan[0].style.webkitTransform = 'translate(0)';
    aSpan[0].style.transform = 'translate(0)';
    aSpan[1].style.webkitTransform = 'translate(0)';
    aSpan[1].style.transform = 'translate(0)';
    oImg2.style.width = '272px';
    aA[obj.index].className = '';
    setTimeout(function(){

        oImg2.style.height = '86px';
        expItem.style.display = 'block';

    },200);
    aImg[0].style.webkitTransform = 'scale(0)';
    aImg[0].style.transform = 'scale(0)';
    aUpperSvg[0].style.display = 'none';
    aUpperSvg[1].style.display = 'none';
    aUpperSvg[2].style.display = 'none';
    aDiv[0].style.webkitTransform = 'scale(0)';
    aDiv[0].style.transform = 'scale(0)';
    aDiv[1].style.display = 'none';
    setTimeout(function(){

        aImg[1].style.webkitTransform = 'scale(0)';
        aImg[1].style.transform = 'scale(0)';
        setTimeout(function(){

            aFan[1].style.webkitTransform = 'scale(0)';
            aFan[1].style.transform = 'scale(0)';
            setTimeout(function(){

                aFan[2].style.webkitTransform = 'rotate(180deg)';
                aFan[2].style.transform = 'rotate(180deg)';
                aFan[2].style.opacity = '0';
                aFan[3].style.webkitTransform = 'scale(0)';
                aFan[3].style.transform = 'scale(0)';
                setTimeout(function(){

                    aFan[4].style.webkitTransform = 'scale(0)';
                    aFan[4].style.transform = 'scale(0)';
                    setTimeout(function(){

                        aFan[5].style.webkitTransform = 'scale(0)';
                        aFan[5].style.transform = 'scale(0)';
                        setTimeout(function(){

                            aFan[6].style.webkitTransform = 'scale(0)';
                            aFan[6].style.transform = 'scale(0)';
                            setTimeout(function(){

                                aFan[7].style.webkitTransform = 'scale(0)';
                                aFan[7].style.transform = 'scale(0)';
                                setTimeout(function(){

                                    aFan[8].style.display = 'none';
                                    var aG2 = aFan[9].getElementsByClassName('fan-g');
                                    var iNub = 0;
                                    var iTimer = setInterval(function(){

                                        aG2[iNub].style.webkitTransform = 'translate(260px,260px) scale(0)';
                                        aG2[iNub].style.transform = 'translate(260px,260px) scale(0)';
                                        iNub++;
                                        if(iNub>=aG2.length){

                                            clearInterval(iTimer);
                                            oLine.style.display = 'none';
                                            oUpper.style.display = 'none';

                                        }

                                    },50);

                                },50);

                            },50);

                        },50);

                    },50);

                },50);

            },50);

        },50);

    },50);

}