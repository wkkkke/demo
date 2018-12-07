var oBtn=document.getElementsByClassName('btn')[0];
var oInput=document.getElementsByClassName('input')[0];
var oMain=document.getElementsByClassName('main')[0];
var mainW=oMain.offsetWidth;
oBtn.onclick=function(){
    send();
}
oInput.onkeyup=function(e){
    if(e.keyCode==13){
      send();
    }
}
function send(){
   if(oInput.value.length<=0||(/^\s+$/).test(oInput.value)){
     alert("内容不能为空");
     return;
   }else if(oInput.value.length>=20){
       alert("内容不能超过20字");
       return;
   }
   createText(oInput.value);
   oInput.value='';
}
function createText(str){
   var oSpan=document.createElement('span');
   oMain.appendChild(oSpan);
   oSpan.innerText=str;
   oSpan.className='text';
   oSpan.style.left=mainW+'px';
   
   slider(oSpan,{
       color:'rgb('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')',
       fontSize:Math.random()*14+16,
       top:Math.random()*150,
       timing:Math.floor(Math.random()*3)
   });
}

function slider(dom,opt){
    dom.style.color=opt.color;
    dom.style.fontSize=opt.fontSize+'px';
    dom.style.top=opt.top+'px';
    //Math.random在0-1间，要生成16-30间随机数，可以MAth.random()*14+16
 
    
dom.timer=setInterval(function(){
    if(dom.offsetLeft>=0&&dom.offsetLeft<=mainW){
    switch(opt.timing){
        case 0:
        dom.style.left=dom.offsetLeft-2+'px';
        break;
        case 1:
        dom.style.left=dom.offsetLeft-4+'px';
        break;
        case 2:
        dom.style.left=dom.offsetLeft-6+'px';
    }
    
}else{
    clearInterval(dom.timer);
    oMain.removeChild(dom);
}
        },60);
}
