
var v=document.getElementById("Trailer");
var b=document.getElementById("Pause_Play");
var A = new Array("https://courses.cs.cityu.edu.hk/cs2204/barbecue.mp4","https://courses.cs.cityu.edu.hk/cs2204/chocolate.mp4","https://courses.cs.cityu.edu.hk/cs2204/sweets.mp4","https://courses.cs.cityu.edu.hk/cs2204/nature.mp4","https://courses.cs.cityu.edu.hk/cs2204/wonders.mp4");
var counter =0;

 function rotate()
        {	
            if (counter == 4)
                counter = 0;
            else
                counter++;
                
            v.src = A[counter];
            
            if (counter=="3" || counter=="4")
            {
                v.style.height='300px';
                v.style.width='400px';
            }
            else
            {
                v.style.height='450px';
                v.style.width='800px';
            }
        }
        
function ChangeVideo(n)
        {
            if (n!==10)
            {
                counter=n;
            }
            
            v.src=A[counter];
            if (counter=="3" || counter=="4" )
            {
                v.style.height='300px';
                v.style.width='400px';
            }
            else
            {
                v.style.height='450px';
                v.style.width='800px';
            }
        }
        
v.onended = function()
        {
            setTimeout("rotate()",3*1000);
        };
        
function Mute()
    {
        if (!v.muted)
        {
            v.muted=true;
        }
    }

function Unmute()
    {
        if (v.muted)
        {
            v.muted=false;
        }
    }
    
function Pause_Play()
    {
        if (v.paused)
        {
            v.play();
            b.innerHTML="Pause Video";
        }
        else
        {
            v.pause();
            b.innerHTML="Play Video";
        }
    }
    
