function load()
{
var canvas=document.getElementById('loading_bar1');
var ctx=canvas.getContext('2d');
ctx.clearRect(0,0,500,400);
ctx.beginPath();
//ctx.moveTo(100,100);
ctx.arc(100,100,80,0,Math.PI*2,false);
ctx.lineWidth=26;
ctx.strokeStyle='rgba(0,112,0,0.5)';
ctx.stroke();
var cute=0;var cutie=0;var dot=1;var core=0;
function draw_loading()
{
if(core++%40==0)
{
if(dot==1)
{
document.getElementById('loading_status').innerHTML='Loading . .';
dot=2;
}
else if(dot==2)
{
document.getElementById('loading_status').innerHTML='Loading . . .';
dot=3;
}
else
{document.getElementById('loading_status').innerHTML='Loading .';
dot=1;
}
document.getElementById('loading_status_in').innerHTML=Math.floor((cute-cutie)/Math.PI*50)+'%';
}
cute+=0.01;cutie+=0.005; if(cute-cutie>=Math.PI*2) { document.getElementById('first').remove();$('#part2').animate({opacity:'1'},3000);start_level2();}//first_level();}
else
setTimeout(draw_loading,8);
var canvas=document.getElementById('loading_bar');
var ctx=canvas.getContext('2d');
ctx.clearRect(0,0,500,400);
ctx.beginPath();
//ctx.moveTo(100,100);
ctx.arc(100,100,80,cutie,cute,false);
ctx.lineWidth=26;
ctx.strokeStyle='red';
ctx.stroke();

}
draw_loading();
}