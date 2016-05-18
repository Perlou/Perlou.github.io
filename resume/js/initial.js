/**
 * Created by Administrator on 2015/9/17.
 */
function init(){

    var exp = document.getElementById('exp');
    var oUl = exp.getElementsByTagName('ul')[0];
    var work = document.getElementById('work');
    var work3D = work.getElementsByClassName('work-3D')[0];
    var workRight = work.getElementsByClassName('work-right')[0];
    var oP = workRight.getElementsByTagName('p')[0];
    var workText = work.getElementsByClassName('work-left-text')[0];
    var aP = workText.getElementsByTagName('p');
    var oAlert = work.getElementsByClassName('alert-bottom')[0];
    var info = document.getElementById('description');
    var oHead = info.getElementsByTagName('img')[0];
    var oText = info.getElementsByClassName('text')[0];
    var oH3 = oText.getElementsByTagName('h3')[0];
    var oP2 = oText.getElementsByTagName('p')[0];
    var aLi = info.getElementsByTagName('ul')[0].getElementsByTagName('li');

    for(var i=0; i<Json.project.length; i++){

        var oLi = document.createElement('li');
        oLi.innerHTML = '<div class="line"></div><div class="upper"><div class="upper-item"><svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280"><g class="upperSvg1"><path d="M240,140c0-37.4-20.5-70-51-87.2"/></g><g class="upperSvg2"><path d="M89.4,53.7C59.8,71.1,40,103.2,40,140"/></g><g class="upperSvg3"><path d="M89,226c14.9,8.9,32.4,14,51,14c18,0,34.8-4.7,49.4-13"/></g></svg><div class="upper-indicate"></div><div class="upper-delta"></div></div></div><div class="middle"><div class="exp-info"><svg class="exp-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 240 240"><path class="st0" d="M149.9,8.4c-9.5-2.5-19.6-3.9-29.9-3.9c-10.3,0-20.4,1.4-29.9,3.9"/><path class="st0" d="M231.6,149.9c2.5-9.5,3.9-19.6,3.9-29.9s-1.4-20.4-3.9-29.9"/><path class="st0" d="M90.1,231.6c9.5,2.5,19.6,3.9,29.9,3.9c10.3,0,20.4-1.4,29.9-3.9"/><path class="st0" d="M8.4,90.1c-2.5,9.5-3.9,19.6-3.9,29.9c0,10.3,1.4,20.4,3.9,29.9"/><circle class="st1" cx="120" cy="120" r="96.6"/><path class="st2" d="M223.5,77.1c-11.4-27.4-33.3-49.3-60.6-60.6"/><path class="st2" d="M162.9,223.5c27.4-11.4,49.3-33.2,60.6-60.6"/><path class="st2" d="M16.5,162.9c11.4,27.4,33.3,49.3,60.6,60.6"/><path class="st2" d="M77.1,16.5C49.7,27.9,27.9,49.8,16.5,77.1"/><path class="st3" d="M18,120c0,56.3,45.7,102,102,102s102-45.7,102-102S176.3,18,120,18S18,63.7,18,120"/><path class="st4" d="M226.5,120c0-58.8-47.7-106.5-106.5-106.5S13.5,61.2,13.5,120S61.2,226.5,120,226.5S226.5,178.8,226.5,120"/></svg><svg class="circle-img" xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"><g class="circle-img-g"><defs><clipPath id="SVGID1_1_1"><path d="M0,89c0.4,-22.3 9,-43.6 24.2,-59.8l 32.9 30.7c-7.6 8.1-11.9 18.8-12.1 29.9L1,89z"/></clipPath></defs><g style="clip-path:url(#SVGID1_1_1)"><image style="overflow:visible; -webkit-transform: translate(-10px,25px); transform: translate(-10px,25px)" width="70" height="70" xlink:href="'+ Json.project[i].image[0] +'"></image></g></g><g class="circle-img-g"><defs><clipPath id="SVGID1_1_2"><path d="M151,25c-16.4-15.8-38.2-24.8-60.9-25.2l-0.8,45c11.4,0.2,22.3,4.7,30.5,12.6L151,25z"/></clipPath></defs><g style="clip-path:url(#SVGID1_1_2)"><image style="overflow:visible; -webkit-transform: translate(85px,-10px); transform: translate(85px,-10px)" width="70" height="70" xlink:href="'+ Json.project[i].image[1] +'"></image></g></g><g class="circle-img-g"><defs><clipPath id="SVGID1_1_3"><path d="M180,91c-0.4,22.3-9,43.6-24.2,59.8l-32.9-30.7c7.6-8.1,11.9-18.8,12.1-29.9L180,91z"/></clipPath></defs><g style="clip-path:url(#SVGID1_1_3)"><image style="overflow:visible; -webkit-transform: translate(120px,80px); transform: translate(120px,80px)" width="70" height="70" xlink:href="'+ Json.project[i].image[2] +'"></image></g></g><g class="circle-img-g"><defs><clipPath id="SVGID1_1_4"><path d="M28,154c 16.4 15.8 38.2 24.8 60.9 25.2l 0.8-45c-11.4-0.2-22.3-4.7-30.5-12.6L28,154z"/></clipPath></defs><g style="clip-path:url(#SVGID1_1_4)"><image style="overflow:visible; -webkit-transform: translate(25px,115px); transform: translate(25px,115px)" width="70" height="70" xlink:href="'+ Json.project[i].image[3] +'"></image></g></g></svg><div class="inside-circle"><ul><li><div></div></li><li><div></div></li><li><div></div></li><li><div></div></li><li><div></div></li><li><div></div></li><li><div></div></li><li><div></div></li></ul><img src="images/icons/play.png" alt=""/></div></div><div class="exp-text"><img src="images/icons/textbj.png" alt=""/><div><span></span><span></span></div><div class="exp-item"><h3>'+ Json.project[i].name +'</h3><p>'+ Json.project[i].date +'</p></div></div></div><div class="below"><div class="fan1 fan"><img src="images/icons/fan2.png" alt=""/><img src="images/icons/fan.png" alt=""/></div><div class="fan-dotted fan"></div><div class="fan2 fan"></div><div class="fan-dotted2 fan"></div><div class="below-circle fan"></div><div class="below-circle2 fan"></div><div class="below-time fan"><span>2012</span><span>2013</span><span>2014</span><span>2015</span><span>2016</span></div><div class="fan3 fan">'+ Json.project[i].name +'</div><svg class="fan4 fan" xmlns="http://www.w3.org/2000/svg" width="520" height="520" viewBox="0 0 520 520"><path xmlns="http://www.w3.org/2000/svg" d="M127.9,123.6c34.2-33,80.7-53.3,132-53.3c104.9,0,190,85,190,190c0,25.8-5.1,50.4-14.4,72.8"/></svg><svg class="fan5 fan" xmlns="http://www.w3.org/2000/svg" width="520" height="520" viewBox="0 0 520 520"><g class="fan-g"><defs><clipPath id="SVGID2_1_1"><path d="M39,166.5c11.5-27.1,27.9-51.8,48.3-72.9l57.5,55.6c-13.6,14.1-24.5,30.6-32.2,48.6L39,166.5z"/></clipPath></defs><g style="clip-path:url(#SVGID2_1_1);"><image style="overflow:visible; -webkit-transform: translate(35px,90px); -webkit-transform: translate(35px,90px); transform: translate(35px,90px);" width="110" height="110" xlink:href="'+ Json.project[i].image[0] +'"></image></g></g><g class="fan-g"><defs><clipPath id="SVGID2_1_2"><path d="M19.9,256.1c0.5-28,5.9-55.7,15.9-81.8l74.7,28.7c-6.7,17.4-10.3,35.9-10.6,54.5L19.9,256.1z"/></clipPath></defs><g style="clip-path:url(#SVGID2_1_2);"><image style="overflow:visible; -webkit-transform: translate(5px,165px); transform: translate(5px,165px);" width="110" height="110" xlink:href="'+ Json.project[i].image[1] +'"></image></g></g><g class="fan-g"><defs><clipPath id="SVGID2_1_3"><path d="M37.4,350.2c-11-27.3-16.9-56.3-17.4-85.7l80-1.4c0.3,19.6,4.3,39,11.6,57.1L37.4,350.2z"/></clipPath></defs><g style="clip-path:url(#SVGID2_1_3);"><image style="overflow:visible; -webkit-transform: translate(10px,240px); transform: translate(10px,240px);" width="110" height="110" xlink:href="'+ Json.project[i].image[2] +'"></image></g></g><g class="fan-g"><defs><clipPath id="SVGID2_1_4"><path d="M87.3,427c-19.5-20.1-35.2-43.5-46.6-69.1l73.1-32.5c7.6,17,18.1,32.6,31.1,46.1L87.3,427z"/></clipPath></defs><g style="clip-path:url(#SVGID2_1_4);"><image style="overflow:visible; -webkit-transform: translate(40px,320px); transform: translate(40px,320px);" width="110" height="110" xlink:href="'+ Json.project[i].image[3] +'"></image></g></g></svg></div>';
        if(i==1) oLi.className = 'initial';
        oUl.appendChild(oLi);

    }

    if(Json.work.length<8){

        var workNum = Json.work.length;
        for(var i=0; i<(8-workNum); i++){

            Json.work.push({
                company:'34242',
                job:'',
                date:'',
                detail:'23424324',
                logo:'images/icons/header1.png'
            });

        }

    }
    for(var i=0; i<Json.work.length; i++){

        var oDiv = document.createElement('div');
        oDiv.innerHTML = '<i></i><span>'+ Json.work[i].company +'</span>';
        work3D.appendChild(oDiv);

    }
    oP.innerHTML = Json.work[0].date;
    aP[0].innerHTML = '23432423' + Json.work[0].job;
    aP[1].innerHTML = oAlert.innerHTML = Json.work[0].detail;

    oHead.src = Json.myInfo.head;
    oH3.innerHTML = Json.myInfo.name;
    oP2.innerHTML = Json.myInfo.slogan;
    aLi[0].getElementsByTagName('span')[0].innerHTML = Json.myInfo.edu;
    aLi[1].getElementsByTagName('span')[0].innerHTML = Json.myInfo.time;
    aLi[2].getElementsByTagName('span')[0].innerHTML = Json.myInfo.sex;
    aLi[3].getElementsByTagName('span')[0].innerHTML = Json.myInfo.city;
    aLi[4].getElementsByTagName('span')[0].innerHTML = Json.myInfo.phone;
    aLi[5].getElementsByTagName('span')[0].innerHTML = Json.myInfo.mail;
    //for(var i=0; i<Json.myInfo.work.length; i++){
    //
    //    oP3.innerHTML += '<span style="visibility: visible; border-right-color: transparent;">' + Json.myInfo.work[i] + '</span>';
    //
    //}
    //oP3.innerHTML += '<span class="shake" style="visibility: visible;">銆€</span>';

}