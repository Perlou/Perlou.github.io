/**
 * Created by Administrator on 2015/9/10.
 */
function change(){

    var nav = document.getElementsByTagName('nav')[0];
    var aA = nav.getElementsByTagName('a');
    var num = 0;
    var num2 = 0;
    var arr = [document.getElementById('exp'),document.getElementById('work'),document.getElementById('description')];
    var mp3Sou = document.getElementById('sousou');
    var oExp = document.getElementById('exp');
    var oUl = oExp.getElementsByTagName('ul')[0];
    var aChild = oUl.children;
    var text = document.getElementById('text');
    var textChild = text.children;
    var lightLine = oExp.getElementsByClassName('lightLine')[0];

    for(var i=0; i<aA.length; i++){

        aA[i].index = i;
        aA[i].bOff = true;
        aA[i].onclick = function(){

            for(var i=0; i<aA.length; i++){

                aA[i].className = '';

            }
            this.className = 'active';
            if(this.index!==num) {

                mp3Sou.play();
                arr[num].style.webkitTransform = 'translateZ(1000px)';
                arr[num].style.transform = 'translateZ(1000px)';
                arr[num].style.opacity = 0;
                arr[this.index].style.display = 'block';
                arr[this.index].style.opacity = 1;
                merge(aChild[openNub]);
                bOff = true;
                oLi = null;
                lightLine.style.display = 'block';
                for(var i=0;i<textChild.length;i++){

                    textChild[i].style.display = 'none';

                }
                num = this.index;
                if (this.bOff) {

                    switch (this.index) {

                        case 1:
                            ufoFn();
                            break;
                        case 2:
                            myInfoFn();
                            break;

                    }
                    this.bOff = false;

                }

                setTimeout(function(){

                    arr[num2].style.webkitTransform = 'translateZ(0px)';
                    arr[num2].style.transform = 'translateZ(0px)';
                    arr[num2].style.zIndex = 1;
                    arr[num2].style.display = 'none';
                    num2 = num;
                    arr[num2].style.zIndex = 3;
                    console.log(num2);

                },500);

            }

        }

    }
    aA[0].bOff = false;

}