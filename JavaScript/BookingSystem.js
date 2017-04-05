var counter=8;
var O="orange", Y="yellow", G="green";
var h1=document.getElementById("Heading1");
var h2=document.getElementById("Heading2");

function MovieData(x)
{
    if (x==1)
        localStorage.setItem("moviedata", document.getElementById("Timing1").options[document.getElementById("Timing1").selectedIndex].value);    
    if (x==2)
        localStorage.setItem("moviedata", document.getElementById("Timing2").options[document.getElementById("Timing2").selectedIndex].value);
    if (x==3)
        localStorage.setItem("moviedata", document.getElementById("Timing3").options[document.getElementById("Timing3").selectedIndex].value);
}

//counter=localStorage.getItem("moviedata");

var movies_list = { 'movies':[
						{
							'Name':'THE SMURFS',
							'Data': ['1 November, Sunday - 9:00 AM, AUDI - 1','1 November, Sunday - 2:00 PM, AUDI - 1','1 November, Sunday - 8:00 PM, AUDI - 1',
                                     '2 November, Sunday - 9:00 AM, AUDI - 1','2 November, Sunday - 2:00 PM, AUDI - 1','2 November, Sunday - 8:00 PM, AUDI - 1']
						},
						{
							'Name':'MINIONS',
							'Data': ['1 November, Sunday - 9:00 AM, AUDI - 2','1 November, Sunday - 2:00 PM, AUDI - 2','1 November, Sunday - 8:00 PM, AUDI - 2',
                                     '2 November, Sunday - 9:00 AM, AUDI - 2','2 November, Sunday - 2:00 PM, AUDI - 2','2 November, Sunday - 8:00 PM, AUDI - 2']
						},
						{
							'Name':'INSIDE OUT',
							'Data': ['1 November, Sunday - 9:00 AM, AUDI - 3','1 November, Sunday - 2:00 PM, AUDI - 3','1 November, Sunday - 8:00 PM, AUDI - 3',
                                     '2 November, Sunday - 9:00 AM, AUDI - 3','2 November, Sunday - 2:00 PM, AUDI - 3','2 November, Sunday - 8:00 PM, AUDI - 3']
						}
					]
				};

if (h1!=null)
{
    var output=parseInt(counter/6);
    h1.innerHTML = movies_list.movies[output].Name;
    h2.innerHTML = movies_list.movies[output].Data[counter-(output*6)];    
}

var G1=document.getElementById("G.C.1"), G2=document.getElementById("G.C.2"), G3=document.getElementById("G.C.3"), G4=document.getElementById("G.C.4");

var A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4;

var T11 = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2,1,1,2];
var T12 = [1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,2,1,2,2];
var T13 = [0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1];
var T14 = [1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,2,1,2,1];
var T15 = [0,0,1,1,0,0,,1,1,0,1,0,1,0,1,0,1,2,1,1];
var T16 = [1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,2,2];

var T21 = [1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,2,1,2,2];
var T22 = [1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,2,1,2,1];
var T23 = [0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1];
var T24 = [0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,2,2,2,2];
var T25 = [1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,2,2,2,2];
var T26 = [0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1];

var T31 = [1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,2,2,2,2];
var T32 = [1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,2,2];
var T33 = [1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,2,1,1,1];
var T34 = [0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,2,2];
var T35 = [0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,2,2,2,2];
var T36 = [1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,2,1];

function Setup()
{
    sessionStorage.setItem(0,JSON.stringify(T11));
    sessionStorage.setItem(1,JSON.stringify(T12));
    sessionStorage.setItem(2,JSON.stringify(T13));
    sessionStorage.setItem(3,JSON.stringify(T14));
    sessionStorage.setItem(4,JSON.stringify(T15));
    sessionStorage.setItem(5,JSON.stringify(T16));
                
    sessionStorage.setItem(6,JSON.stringify(T21));
    sessionStorage.setItem(7,JSON.stringify(T22));
    sessionStorage.setItem(8,JSON.stringify(T23));
    sessionStorage.setItem(9,JSON.stringify(T24));
    sessionStorage.setItem(10,JSON.stringify(T25));
    sessionStorage.setItem(11,JSON.stringify(T26));
                
    sessionStorage.setItem(12,JSON.stringify(T31));
    sessionStorage.setItem(13,JSON.stringify(T32));
    sessionStorage.setItem(14,JSON.stringify(T33));
    sessionStorage.setItem(15,JSON.stringify(T34));
    sessionStorage.setItem(16,JSON.stringify(T35));
    sessionStorage.setItem(17,JSON.stringify(T36));
    
}

//localStorage.clear();

if (localStorage.getItem(counter)==null)
{
    Setup();
    var Timing=JSON.parse(sessionStorage.getItem(counter));
}
else
{
    var Timing=JSON.parse(localStorage.getItem(counter));
}

if (counter<6 && G1!=null)
{
    CreateA_D();
    SeatingPlanA_D();
    
    if (Timing[16]=='1')
    {
        G1.style.backgroundColor=G;
        G1.onclick='';
    }
    else
    {
        G1.style.backgroundColor=Y;
        G1.onclick=function() {Book(101)};
    }
    
    if (Timing[17]=='1')
    {
        G2.style.backgroundColor=G;
        G2.onclick='';
    }
    else
    {
        G2.style.backgroundColor=Y;
        G2.onclick=function() {Book(102)};
    }
    
    if (Timing[18]=='1')
    {
        G3.style.backgroundColor=G;
        G3.onclick='';
    }
    else
    {
        G3.style.backgroundColor=Y;
        G3.onclick=function() {Book(103)};
    }
    
    if (Timing[19]=='1')
    {
        G4.style.backgroundColor=G;
        G4.onclick='';
    }
    else
    {
        G4.style.backgroundColor=Y;
        G4.onclick=function() {Book(104)};
    }
}

if (counter>=6 && counter<=11 && G1!=null)
{
    CreateA_D();
    var table = document.getElementById("Seats");
    var row = table.insertRow(5);
    E = row.insertCell(0);
    E1 = row.insertCell(1);
    E2 = row.insertCell(2);
    E3 = row.insertCell(3);
    E4 = row.insertCell(4);
    E.innerHTML = "E";
    E.style.border="transparent";
    E1.innerHTML = "1";
    E2.innerHTML = "2";
    E3.innerHTML = "3";
    E4.innerHTML = "4";
    
    SeatingPlanA_D();
    SeatingPlanE();
    
    if (Timing[20]=='1')
    {
        G1.style.backgroundColor=G;
        G1.onclick='';
    }
    else
    {
        G1.style.backgroundColor=Y;
        G1.onclick=function() {Book(111)};
    }
    
    if (Timing[21]=='1')
    {
        G2.style.backgroundColor=G;
        G2.onclick='';
    }
    else
    {
        G2.style.backgroundColor=Y;
        G2.onclick=function() {Book(112)};
    }
    
    if (Timing[22]=='1')
    {
        G3.style.backgroundColor=G;
        G3.onclick='';
    }
    else
    {
        G3.style.backgroundColor=Y;
        G3.onclick=function() {Book(113)};
    }
    
    if (Timing[23]=='1')
    {
        G4.style.backgroundColor=G;
        G4.onclick='';
    }
    else
    {
        G4.style.backgroundColor=Y;
        G4.onclick=function() {Book(114)};
    }
}

if (counter>=12 && G1!=null)
{
    CreateA_D();
    var table = document.getElementById("Seats");
    var row = table.insertRow(5);
    var E = row.insertCell(0);
    E1 = row.insertCell(1);
    E2 = row.insertCell(2);
    E3 = row.insertCell(3);
    E4 = row.insertCell(4);
    E.innerHTML = "E";
    E1.innerHTML = "1";
    E2.innerHTML = "2";
    E3.innerHTML = "3";
    E4.innerHTML = "4";
    E.style.border="transparent";
    var row2 = table.insertRow(6);
    var F = row2.insertCell(0);
    F1 = row2.insertCell(1);
    F2 = row2.insertCell(2);
    F3 = row2.insertCell(3);
    F4 = row2.insertCell(4);
    F.innerHTML = "F";
    F1.innerHTML = "1";
    F2.innerHTML = "2";
    F3.innerHTML = "3";
    F4.innerHTML = "4";
    F.style.border="transparent";
    
    SeatingPlanA_D();
    SeatingPlanE();
    SeatingPlanF();
    
    if (Timing[24]=='1')
    {
        G1.style.backgroundColor=G;
        G1.onclick='';
    }
    else
    {
        G1.style.backgroundColor=Y;
        G1.onclick=function() {Book(121)};
    }
    
    if (Timing[25]=='1')
    {
        G2.style.backgroundColor=G;
        G2.onclick='';
    }
    else
    {
        G2.style.backgroundColor=Y;
        G2.onclick=function() {Book(122)};
    }
    
    if (Timing[26]=='1')
    {
        G3.style.backgroundColor=G;
        G3.onclick='';
    }
    else
    {
        G3.style.backgroundColor=Y;
        G3.onclick=function() {Book(123)};
    }
    
    if (Timing[27]=='1')
    {
        G4.style.backgroundColor=G;
        G4.onclick='';
    }
    else
    {
        G4.style.backgroundColor=Y;
        G4.onclick=function() {Book(124)};
    }
    
}

function CreateA_D()
{
    var table = document.getElementById("Seats");
    var row1 = table.insertRow(1);
    A = row1.insertCell(0);
    A1 = row1.insertCell(1);
    A2 = row1.insertCell(2);
    A3 = row1.insertCell(3);
    A4 = row1.insertCell(4);
    A.innerHTML = "A";
    A.style.border="transparent";
    A1.innerHTML = "1";
    A2.innerHTML = "2";
    A3.innerHTML = "3";
    A4.innerHTML = "4";
    
    var row2 = table.insertRow(2);
    B = row2.insertCell(0);
    B1 = row2.insertCell(1);
    B2 = row2.insertCell(2);
    B3 = row2.insertCell(3);
    B4 = row2.insertCell(4);
    B.innerHTML = "B";
    B.style.border="transparent";
    B1.innerHTML = "1";
    B2.innerHTML = "2";
    B3.innerHTML = "3";
    B4.innerHTML = "4";
    
    var row3 = table.insertRow(3);
    C = row3.insertCell(0);
    C1 = row3.insertCell(1);
    C2 = row3.insertCell(2);
    C3 = row3.insertCell(3);
    C4 = row3.insertCell(4);
    C.innerHTML = "C";
    C.style.border="transparent";
    C1.innerHTML = "1";
    C2.innerHTML = "2";
    C3.innerHTML = "3";
    C4.innerHTML = "4";
    
    var row4 = table.insertRow(4);
    D = row4.insertCell(0);
    D1 = row4.insertCell(1);
    D2 = row4.insertCell(2);
    D3 = row4.insertCell(3);
    D4 = row4.insertCell(4);
    D.innerHTML = "D";
    D.style.border="transparent";
    D1.innerHTML = "1";
    D2.innerHTML = "2";
    D3.innerHTML = "3";
    D4.innerHTML = "4";

}

function SeatingPlanA_D()
{
    if (Timing[0]=='1')
    {
        A1.style.backgroundColor=G;
        A1.onclick='';
    }
    else
    {
        A1.style.backgroundColor=O;
        A1.onclick=function() {Book(0)};
    }
    
    if (Timing[1]=='1')
    {
        A2.style.backgroundColor=G;
        A2.onclick='';
    }
    else
    {
        A2.style.backgroundColor=O;
        A2.onclick=function() {Book(1)};
    }
    
    if (Timing[2]=='1')
    {
        A3.style.backgroundColor=G;
        A3.onclick='';
    }
    else
    {
        A3.style.backgroundColor=O;
        A3.onclick=function() {Book(2)};
    }
    
    if (Timing[3]=='1')
    {
        A4.style.backgroundColor=G;
        A4.onclick='';
    }
    else
    {       
        A4.style.backgroundColor=O;
        A4.onclick=function() {Book(3)};
    }
    
    if (Timing[4]=='1')
    {
        B1.style.backgroundColor=G;
        B1.onclick='';
    }
    else
    {
        B1.style.backgroundColor=O;
        B1.onclick=function() {Book(4)};
    }
    
    if (Timing[5]=='1')
    {
        B2.style.backgroundColor=G;
        B2.onclick='';
    }
    else
    {
        B2.style.backgroundColor=O;
        B2.onclick=function() {Book(5)};
    }
    
    if (Timing[6]=='1')
    {
        B3.style.backgroundColor=G;
        B3.onclick='';
    }
    else
    {
        B3.style.backgroundColor=O;
        B3.onclick=function() {Book(6)};
    }
    
    if (Timing[7]=='1')
    {
        B4.style.backgroundColor=G;
        B4.onclick='';
    }
    else
    {
        B4.style.backgroundColor=O;
        B4.onclick=function() {Book(7)};
    }
    
    if (Timing[8]=='1')
    {
        C1.style.backgroundColor=G;
        C1.onclick='';
    }
    else
    {
        C1.style.backgroundColor=O;
        C1.onclick=function() {Book(8)};
    }
    
    if (Timing[9]=='1')
    {
        C2.style.backgroundColor=G;
        C2.onclick='';
    }
    else
    {
        C2.style.backgroundColor=O;
        C2.onclick=function() {Book(9)};
    }
    
    if (Timing[10]=='1')
    {
        C3.style.backgroundColor=G;
        C3.onclick='';
    }
    else
    {
        C3.style.backgroundColor=O;
        C3.onclick=function() {Book(10)};
    }
    
    if (Timing[11]=='1')
    {
        C4.style.backgroundColor=G;
        C4.onclick='';
    }
    else
    {
        C4.style.backgroundColor=O;
        C4.onclick=function() {Book(11)};
    }
    
    if (Timing[12]=='1')
    {
        D1.style.backgroundColor=G;
        D1.onclick='';
    }
    else
    {
        D1.style.backgroundColor=O;
        D1.onclick=function() {Book(12)};
    }
    
    if (Timing[13]=='1')
    {
        D2.style.backgroundColor=G;
        D2.onclick='';
    }
    else
    {
        D2.style.backgroundColor=O;
        D2.onclick=function() {Book(13)};
    }
    
    if (Timing[14]=='1')
    {
        D3.style.backgroundColor=G;
        D3.onclick='';
    }
    else
    {
        D3.style.backgroundColor=O;
        D3.onclick=function() {Book(14)};
    }
    
    if (Timing[15]=='1')
    {
        D4.style.backgroundColor=G;
        D4.onclick='';
    }
    else
    {
        D4.style.backgroundColor=O;
        D4.onclick=function() {Book(15)};
    }
    
    Clickable();
}

function SeatingPlanE()
{
    if (Timing[16]=='1')
    {
        E1.style.backgroundColor=G;
        E1.onclick='';
    }
    else
    {
        E1.style.backgroundColor=O;
        E1.onclick=function() {Book(16)};
    }
    
    if (Timing[17]=='1')
    {
        E2.style.backgroundColor=G;
        E2.onclick='';
    }
    else
    {
        E2.style.backgroundColor=O;
        E2.onclick=function() {Book(17)};
    }
    
    if (Timing[18]=='1')
    {
        E3.style.backgroundColor=G;
        E3.onclick='';
    }
    else
    {
        E3.style.backgroundColor=O;
        E3.onclick=function() {Book(18)};
    }
    
    if (Timing[19]=='1')
    {
        E4.style.backgroundColor=G;
        E4.onclick='';
    }
    else
    {
        E4.style.backgroundColor=O;
        E4.onclick=function() {Book(19)};
    }
}

function SeatingPlanF()
{
    if (Timing[20]=='1')
    {
        F1.style.backgroundColor=G;
        F1.onclick='';
    }
    else
    {
        F1.style.backgroundColor=O;
        F1.onclick=function() {Book(20)};
    }
    
    if (Timing[21]=='1')
    {
        F2.style.backgroundColor=G;
        F2.onclick='';
    }
    else
    {
        F2.style.backgroundColor=O;
        F2.onclick=function() {Book(21)};
    }
    
    if (Timing[22]=='1')
    {
        F3.style.backgroundColor=G;
        F3.onclick='';
    }
    else
    {
        F3.style.backgroundColor=O;
        F3.onclick=function() {Book(22)};
    }
    
    if (Timing[23]=='1')
    {
        F4.style.backgroundColor=G;
        F4.onclick='';
    }
    else
    {
        F4.style.backgroundColor=O;
        F4.onclick=function() {Book(23)};
    }
}

var B="blue";
function Book(seatnumber)
{
    var book=0;
    if (seatnumber==0)
    {
        if (A1.style.backgroundColor==O)
        {
            A1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            A1.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==1)
    {
        if (A2.style.backgroundColor==O)
        {
            A2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            A2.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==2)
    {
        if (A3.style.backgroundColor==O)
        {
            A3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            A3.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==3)
    {
        if (A4.style.backgroundColor==O)
        {
            A4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            A4.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==4)
    {
        if (B1.style.backgroundColor==O)
        {
            B1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            B1.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==5)
    {
        if (B2.style.backgroundColor==O)
        {
            B2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            B2.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==6)
    {
        if (B3.style.backgroundColor==O)
        {
            B3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            B3.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==7)
    {
        if (B4.style.backgroundColor==O)
        {
            B4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            B4.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==8)
    {
        if (C1.style.backgroundColor==O)
        {
            C1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            C1.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==9)
    {
        if (C2.style.backgroundColor==O)
        {
            C2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            C2.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==10)
    {
        if (C3.style.backgroundColor==O)
        {
            C3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            C3.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==11)
    {
        if (C4.style.backgroundColor==O)
        {
            C4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            C4.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==12)
    {
        if (D1.style.backgroundColor==O)
        {
            D1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            D1.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==13)
    {
        if (D2.style.backgroundColor==O)
        {
            D2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            D2.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==14)
    {
        if (D3.style.backgroundColor==O)
        {
            D3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            D3.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==15)
    {
        if (D4.style.backgroundColor==O)
        {
            D4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            D4.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==16)
    {
        if (E1.style.backgroundColor==O)
        {
            E1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            E1.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==17)
    {
        if (E2.style.backgroundColor==O)
        {
            E2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            E2.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==18)
    {
        if (E3.style.backgroundColor==O)
        {
            E3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            E3.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==19)
    {
        if (E4.style.backgroundColor==O)
        {
            E4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            E4.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==20)
    {
        if (F1.style.backgroundColor==O)
        {
            F1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            F1.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==21)
    {
        if (F2.style.backgroundColor==O)
        {
            F2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            F2.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==22)
    {
        if (F3.style.backgroundColor==O)
        {
            F3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            F3.style.backgroundColor=O;
            book=0;
        }
    }
    if (seatnumber==23)
    {
        if (F4.style.backgroundColor==O)
        {
            F4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            F4.style.backgroundColor=O;
            book=0;
        }
    }
    
    if (seatnumber==101 || seatnumber==111 || seatnumber==121)
    {
        if (G1.style.backgroundColor==Y)
        {
            G1.style.backgroundColor=B;
            book=1;
        }
        else
        {
            G1.style.backgroundColor=Y;
            book=0;
        }
        
        if (seatnumber==101)
        {
            seatnumber=16;
        }
        if (seatnumber==111)
        {
            seatnumber=20;
        }
        if (seatnumber==121)
        {
            seatnumber=24;
        }
    }
    if (seatnumber==102 || seatnumber==112 || seatnumber==122)
    {
        if (G2.style.backgroundColor==Y)
        {
            G2.style.backgroundColor=B;
            book=1;
        }
        else
        {
            G2.style.backgroundColor=Y;
            book=0;
        }
        
        if (seatnumber==102)
        {
            seatnumber=17;
        }
        if (seatnumber==112)
        {
            seatnumber=21;
        }
        if (seatnumber==122)
        {
            seatnumber=25;
        }
    }
    if (seatnumber==103 || seatnumber==113 || seatnumber==123)
    {
        if (G3.style.backgroundColor==Y)
        {
            G3.style.backgroundColor=B;
            book=1;
        }
        else
        {
            G3.style.backgroundColor=Y;
            book=0;
        }
        
        if (seatnumber==103)
        {
            seatnumber=18;
        }
        if (seatnumber==113)
        {
            seatnumber=22;
        }
        if (seatnumber==123)
        {
            seatnumber=26;
        }
    }
    if (seatnumber==104 || seatnumber==114 || seatnumber==124)
    {
        if (G4.style.backgroundColor==Y)
        {
            G4.style.backgroundColor=B;
            book=1;
        }
        else
        {
            G4.style.backgroundColor=Y;
            book=0;
        }
        
        if (seatnumber==104)
        {
            seatnumber=19;
        }
        if (seatnumber==114)
        {
            seatnumber=23;
        }
        if (seatnumber==124)
        {
            seatnumber=27;
        }
    }
    
    if (book==1)
    {
        Timing[seatnumber]=10;
    }
    else
    {
        Timing[seatnumber]=0;
    }
    
    Clickable();
}

function Display()
{
    var S1=["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","G.C.1","G.C.2","G.C.3","G.C.4"];
    var S2=["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4","G.C.1","G.C.2","G.C.3","G.C.4"];
    var S3=["A1","A2","A3","A4","B1","B2","B3","B4","C1","C2","C3","C4","D1","D2","D3","D4","E1","E2","E3","E4","F1","F2","F3","F4","G.C.1","G.C.2","G.C.3","G.C.4"];
    
    document.getElementById("Name").innerHTML=h1.innerHTML;
    document.getElementById("Timing").innerHTML=h2.innerHTML;
    
    var Seats=document.getElementById("Seat");
    Seats.innerHTML="Seats - ";
    
    for (i = 0; i < Timing.length; i++)
    { 
        if (Timing[i]==10)
        {
            if (counter<6)
            {
                Seats.innerHTML= Seats.innerHTML + S1[i] + " ";
            }
            else if (counter<12)
            {
                Seats.innerHTML= Seats.innerHTML + S2[i] + " ";
            }
            else
            {
                Seats.innerHTML= Seats.innerHTML + S3[i] + " ";
            }
        }
    }
}

function Clickable()
{
    var button = document.getElementById("button");
    var check=0;
    
    for (i = 0; i < Timing.length; i++)
    { 
        if (Timing[i]==10)
        {
            check++;
        }
    }
    
    if (check==0)
    {
        button.onclick='';
        button.href="#close";
    }
    else
    {
        button.onclick=function() {Display()};
        button.href="#Ticket";
    }
}

function Confirm()
{
    for (i = 0; i < Timing.length; i++)
    { 
        if (Timing[i]==10)
        {
            Timing[i]=1;
        }
    }
    
    localStorage.setItem(counter,JSON.stringify(Timing));
    window.location="NowShowing.html";
}

function Cancel()
{
    window.location="TicketPage.html";
}