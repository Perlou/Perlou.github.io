/**
 * Created by Administrator on 2015/8/12.
 */

function myInfoFn(){

    var description = document.getElementById('description');
    var oBg = document.getElementById('bg');
    var oItem = document.getElementById('item');
    var headPortrait = oItem.getElementsByClassName('headPortrait')[0];
    var circle = oItem.getElementsByClassName('circle')[0];
    var text = oItem.getElementsByClassName('text')[0];
    var userInfo = oItem.getElementsByClassName('userInfo')[0];
    var oBg2 = document.getElementById('bg2');
    var oP = oBg2.getElementsByTagName('p')[0];
    var aSpan = oP.getElementsByTagName('span');
    var svg = document.getElementById('info-svg');
    var aG = svg.getElementsByTagName('g');
    var hope = document.getElementsByClassName('hope')[0];
    var iTimer = null;
    var num = 0;
    var mp3Transform2 = document.getElementById('transform-2');
    var mp3Type = document.getElementById('type');

    mp3Transform2.play();
    for(var i=0; i< Json.myInfo.work.length;i++){

        var span = document.createElement('span');
        span.innerHTML = Json.myInfo.work[i];
        oP.appendChild(span);

    }
    //鑷垜鎻忚堪
    setTimeout(function(){

        aG[0].style.display = 'block';
        var myInfo = new Walkway({
            selector: '#myInfo',
            duration: 1000,
            easing: 'linear'
        }).draw(function(){

                hope.style.display = 'block';
                setTimeout(function(){

                    hope.style.transform = 'translateY(0)';
                    text.style.display = 'block';
                    userInfo.style.display = 'block';
                    setTimeout(function(){

                        aG[5].style.display = 'block';
                        var myInfo = new Walkway({
                            selector: '#hope',
                            duration: 400,
                            easing: 'linear'
                        }).draw(function(){

                                oBg2.style.height = '73px';
                                setTimeout(function(){

                                    aG[6].style.display = 'block';
                                    mp3Type.play();
                                    iTimer = setInterval(function(){

                                        if(num>=aSpan.length-1){

                                            aSpan[num].className = 'shake';
                                            clearInterval(iTimer);

                                        }
                                        aSpan[num].style.visibility = 'visible';
                                        if(num>0){

                                            aSpan[num-1].style.borderRightColor = 'transparent';

                                        }
                                        num++;

                                    },50);

                                },300);

                            });

                    },300);

                },12);

            });
        setTimeout(function(){

            oBg.style.height = '242px';
            aG[1].style.display = 'block';
            var myInfo = new Walkway({
                selector: '#myInfo2',
                duration: 300,
                easing: 'linear'
            }).draw(function(){

                    headPortrait.style.webkitTransform = 'rotate(0deg) scale(1)';
                    headPortrait.style.transform = 'rotate(0deg) scale(1)';
                    setTimeout(function(){

                        circle.className += ' round';

                    },300);
                    aG[2].style.display = 'block';
                    var myInfo = new Walkway({
                        selector: '#myInfo3',
                        duration: 400,
                        easing: 'ease'
                    }).draw(function(){

                            setTimeout(function(){

                                aG[3].style.display = 'block';
                                aG[4].style.display = 'block';

                            },100);

                        });

                });

        },600);

    },300);

}