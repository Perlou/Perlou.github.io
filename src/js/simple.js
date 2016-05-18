/**
 * Created by Administrator on 2015/10/27.
 */
window.onload = function(){

    var myInfo = document.getElementById('myInfo');
    var exp = document.getElementById('exp');
    var work = document.getElementById('work');
    var backBg = document.getElementById('backBg');

    var myInfoChild = myInfo.children;
    var aDiv = myInfoChild[0].getElementsByTagName('div');
    var img = document.createElement('img');
    img.src = Json.myInfo.head;
    aDiv[0].appendChild(img);

    var h3 = document.createElement('h3');
    h3.innerHTML = Json.myInfo.name;
    var p = document.createElement('p');
    p.innerHTML = Json.myInfo.slogan;
    aDiv[1].appendChild(h3);
    aDiv[1].appendChild(p);

    var aLi = myInfoChild[1].getElementsByTagName('li');
    aLi[0].getElementsByTagName('span')[0].innerHTML = Json.myInfo.edu;
    aLi[1].getElementsByTagName('span')[0].innerHTML = Json.myInfo.work1;
    aLi[2].getElementsByTagName('span')[0].innerHTML = Json.myInfo.time;
    aLi[3].getElementsByTagName('span')[0].innerHTML = Json.myInfo.nature;
    aLi[4].getElementsByTagName('span')[0].innerHTML = Json.myInfo.sex;
    aLi[5].getElementsByTagName('span')[0].innerHTML = Json.myInfo.hopeCity;
    aLi[6].getElementsByTagName('span')[0].innerHTML = Json.myInfo.city;
    aLi[7].getElementsByTagName('span')[0].innerHTML = Json.myInfo.money;
    aLi[8].getElementsByTagName('span')[0].innerHTML = Json.myInfo.phone;
    aLi[9].getElementsByTagName('span')[0].innerHTML = Json.myInfo.ps;
    aLi[10].getElementsByTagName('span')[0].innerHTML = Json.myInfo.mail;

    var oBox = exp.getElementsByTagName('div')[1];

    for(var i=0; i<Json.project.length; i++){

        var item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = '<div class="img"><div class="circle"></div><div class="photo"><img src="'+ Json.project[i].image[0] +'" alt=""/><div class="shadow"></div></div></div><div class="text"><h4>'+ Json.project[i].name +'</h4><p>'+ Json.project[i].date +'</p></div>';
        oBox.appendChild(item);

    }

    var aItem = oBox.children;
    var photo = backBg.getElementsByClassName('photo')[0];
    var aLi2 = backBg.getElementsByTagName('li');
    var oClose = backBg.getElementsByClassName('close')[0];

    for(var i=0; i<aItem.length; i++){

        aItem[i].index = i;
        aItem[i].onclick = function(){

            photo.innerHTML = '';
            for(var i=0; i<Json.project[this.index].image.length; i++){

                var img = document.createElement('img');
                img.src = Json.project[this.index].image[i];
                photo.appendChild(img);

            }
            aLi2[0].getElementsByTagName('span')[0].innerHTML = Json.project[this.index].name;
            aLi2[1].getElementsByTagName('span')[0].innerHTML = Json.project[this.index].date;
            aLi2[2].getElementsByTagName('a')[0].innerHTML = Json.project[this.index].link;
            aLi2[2].getElementsByTagName('a')[0].href = 'http://' + Json.project[this.index].link;
            aLi2[3].getElementsByTagName('p')[0].innerHTML = Json.project[this.index].detail;
            backBg.style.display = 'block';

        };

    }
    oClose.onclick = function(){

        backBg.style.display = 'none';

    };

    var workBox = work.children[1];

    for(var i=0; i<Json.work.length; i++){

        var item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = '<div class="content"><div class="head"><img src="'+ Json.work[i].logo +'" alt=""/><div class="sta"></div><div class="name"><h4>'+ Json.work[i].company +'</h4><p>'+ Json.work[i].date +'</p></div></div><dl class="text"><dt>宸ヤ綔鎻忚堪锛�</dt><dd>'+ Json.work[i].detail +'</dd></dl></div><i></i>';
        workBox.appendChild(item);

    }



};