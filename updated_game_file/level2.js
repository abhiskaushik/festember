 var falling_state1=false;
	var falling_state2=false;
function start_level2()
{

	state=2;


     
	function fly_birds(){ $(document).ready(function(){ 
	 $('#b1').animate({left:'80%'},10000).animate({left:'30%'},10000).animate({left:'100%',top:'40%'},10000).animate({left:'80%',top:'4%'},10000);
	 $('#b2').animate({left:'-20%',top:'30%'},10000).animate({left:'100%',top:'40%'},10000).animate({left:'80%'},10000).animate({left:'20%',top:'2%'},8000);
		  });

	}
	
	requestAnimationFrame(fly_birds);
		function call_freshiee(){
document.getElementById('samara').play();
var div=document.createElement('div');
div.id='dog';
div.style.width=85;
div.style.height=185;
div.style.position='absolute';
div.style.top='300px';
div.style.left='500px';
div.style.background='url(walk.png)';
document.body.appendChild(div);
var pos=0;iP=0;jP=350;
function start(){
if(iP%8==0){
div.style.backgroundPosition=pos+'px';
pos-=90;}iP+=2;
if(iP<=760){
div.style.left=iP+'px';
div.style.top=jP+'px';jP-=0.36;

if(iP==760){ 
falling_state1=true;
falling_state2=true;
$('#syn').animate({opacity:'1'},300);
$('#revenge').animate({opacity:'1'},300);
}
requestAnimationFrame(start);}
}

requestAnimationFrame(start);
}
function zombie_attack()
{ 


}
call_freshiee();
}
	function letter_writing(){   //function for letter writing
   
	 $('#letter').animate({opacity:'0.5'},1000);
	 $('.fire').fadeIn(3000);
	 
    var vLetter = document.getElementById('letter');
    var iSpeedInk = 1;

    // other variables
    var sText = document.getElementById('letter_src').innerHTML;
    var iCurChar = 0;
    var sChars = '<span>';
    var iCurInk = 0;
    var sCurCaret = '';
    var sCaret = "&nbsp;<img src='pen.gif' style='position:absolute' />";

    var doStep = function doStep() {
        // current char
		
        var sChar = sText.charAt(iCurChar);

        // default char delay
        var iDelay = 32;

        if (sChar == '') {
            sCurCaret = '';
        } else if (sChar == '|') { // we use | symbol to emulate 'error' symbol
            sChar = '';
            sChars = sChars.substring(0, sChars.length-1);
            iDelay = 64;
        } else if (sChar == '<') { // pass tags
            var iPos = sText.indexOf('>', iCurChar);
            sChar = sText.substring(iCurChar, iPos + 1);
            iCurChar = iPos;
        } else if (sChar == '&') { // pass html entities
            var iPos = sText.indexOf(';', iCurChar);
            sChar = sText.substring(iCurChar, iPos + 1);
            iCurChar = iPos;
        } else if (sChar == '.') { // custom delay in case of . symbol
            iDelay = 300;
        } else if (sChar == ',') { // custom delay in case of , symbol
            iDelay = 100;
        } else if (sChar == ' ') { // custom delay in case of space symbol
            iDelay = 32;
        } else if (iCurChar > 2) {
            sCurCaret = sCaret;
        }
        sChars += sChar;

        // hide the caret at the end of the letter
        if (iCurChar == sText.length - 1){
            sCurCaret = ''; $('#letter').fadeOut(5000); $('#Hanging_letter').animate({left:'1300px',top:'-100px',height:'10px',width:'5px'},9000);
			//$('#gunstringer').fadeIn(2000).animate({left:'800px',top:'290px'},5000);
			}

        // update letter with new chars
        vLetter.innerHTML = sChars + sCurCaret;

        // goto next char
        iCurChar++;
	

        // next step
        if (iCurChar < sText.length) {
		     if(iCurChar==5){ $('#reading_letter').fadeIn(5000);}
            setTimeout(doStep, 20 + iDelay);
        }
    }

    doStep();
	
}
