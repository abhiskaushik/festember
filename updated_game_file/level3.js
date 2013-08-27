var x=0;var tr=10;var aw=-100;var bo=0;var a=[],length=0;var animat=0;var crea=0;var set=0; var movement=false; var kim;
var anime=window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
function run()
{
state=3;
for(var c=0;c<length;c++)
{
if(movement==true)
{ movement=false;
stop();
}
a[c][7]=a[c][3]-a[c][4]/a[c][8];
var xe=document.getElementById('tree'+c).style;
var col=a[c][4]/a[c][3];
a[c][2]+=col*a[c][6];  //zooming about the center
a[c][1]+=a[c][6];
xe.width=a[c][1]+"%";
xe.height=a[c][2]+"%";
xe.left=a[c][4]-a[c][1]/2+"%";
xe.top=a[c][3]-a[c][2]/2+"%";
//end of zooming
a[c][3]+=a[c][5]; //shifting the center
a[c][4]=(a[c][3]-a[c][7])*a[c][8];
a[c][5]+=a[c][9];
if(a[c][0]==1)
{ 

if(a[c][3]>65&&a[c][3]<80&&((a[c][4]-cpc)<11)&&((a[c][4]-cpc)>-1)&&animat==0)
{
var sound=document.getElementById('coin_music');
sound.currentTime=0;
sound.play();
a[c][5]=0-3*a[c][5];
a[c][8]=0.3;
a[c][9]=0.1;
}  
}
}

if(tr%50==0)
{
if(crea==1)
crea=0;
else
crea=1;
}
if(crea==1)
{
if(tr%3==0)
{
create_coin();}
}
else
{
if(tr%10==0)
create_stone();
}
if(animat==0)
{
if(tr%4==0)
{
if(set==1)
{
document.getElementById('zombie').style.backgroundPosition='150px 0px';
set=0;
}
else
{
set=1;
document.getElementById('zombie').style.backgroundPosition='0px 0px';
}
}
}
x=x+5;tr+=1;aw+=2;bo-=1;
//document.getElementById('div2').style.borderRadius=bo+'%';
//document.getElementById('div1').style.left=aw+'px';
document.getElementById('div2').style.backgroundPosition='0px '+x+'px';
if(x>=95)
x=0;
if(tr<100)
document.getElementById('div2').style.webkitTransform='rotateX('+tr+'deg)';
anime(run);
}
function turn_left()
{
if(te<50)
document.getElementById('div2').style.borderRadius=(te++)+'%';
if(tm<100)
document.getElementById('div1').style.left=aw+'px';
}
function straight()
{

}
var airr=[0,0,0,0,0,0,0,0,0];var count_coin=0;
function create_coin()
{
airr[count_coin++]=length;
if(count_coin<20)
{
var x=document.createElement('img');
x.id='tree'+length;
x.src='coin2.png';
var y=x.style;
y.height='2%';y.width='1%';y.position='absolute';y.top='10%';y.left='30%';
document.getElementById('main').appendChild(x);
var xq=Math.floor(Math.random()*3);

length=a.push([1,2,2,7,12,0.1,0.1,0,0.9,0.05,1]);
}
else
{
a[airr[(count_coin++%19)]]=[1,2,2,7,12,0.1,0.1,0,0.9,0.05,1];
}
}
var cpc=50;
function stop()
{
if(kim==97&&cpc>40)
{
cpc-=3;
document.getElementById('zombie').style.left=cpc+'%';
}
else if(kim==100&&cpc<85)
{
cpc+=3;
document.getElementById('zombie').style.left=cpc+'%';
}
else if(kim==119)
{
if(animat==0)
{
animat=1;
$('#zombie').animate({top:'20%'},500).animate({top:'60%'},700,reverse_animate);
}
}
else if(kim==115)
{
if(animat==1)
{
$('#zombie').stop();
document.getElementById('zombie').style.background='';
document.getElementById('zombie').src='roll.png';
$('#zombie').animate({top:'60%'},100,reverse_animate);
}
}
}
function reverse_animate()
{

document.getElementById('zombie').style.background='zombie2.png';
document.getElementById('zombie').src="";
animat=0;
}
var airt=[0,0,0,0];var count_stone=0;
function create_stone()
{
airt[count_stone++]=length;
if(count_stone<4)
{
var x=document.createElement('img');
x.id='tree'+length;
x.src='obstacle1.png';
var y=x.style;
y.height='2%';y.width='1%';y.position='absolute';y.top='10%';y.left='30%';
document.getElementById('main').appendChild(x);
var xq=Math.floor(Math.random()*3);

length=a.push([2,10,10,10,20,0.1,0.2,0,1,0.1,0]);
}
else
{
a[airt[(count_stone++%3)]]=[2,10,10,10,20,0.01,0.2,0,1,0.1,0];
}
//else if(xq%3==3)
//length=a.push([0,2,2,10,51,0.5,0.1,0,-0.03,0.3,1]);
//else 
//length=a.push([0,2,2,10,49,0.5,0.1,0,0.2,0.3,1]);
}
