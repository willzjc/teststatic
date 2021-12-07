<!--

/*
*	Author: Simon Kallgard
*	Revised by Mattias Gunneras 2005-11-15
*   Revised by Mattias Gunneras 2006-06-19
*/

// declare variables
var ourpoor;
var ourrich;
var strInput;
var strIncome;
var strPlace2;
var redman_startpos = 21;
var redman_lastpos = 714;
var redman_stepsize = 7;
var minDollarToCalc = 100;
var maxDollarToCalc = 200000;


// Detect browser
ns4 = (document.layers)? true:false
ns6 = (document.getElementById)? true:false
ie4 = (document.all)? true:false


// the os
var agt = navigator.userAgent.toLowerCase();
var iswin = (agt.indexOf("win")!=-1);
var ismac = (agt.indexOf("mac")!=-1);
var isopera = (agt.indexOf("opera")!=-1);

// setup for calculations further down.
totalPopulation = 6000000000;
avarageYearlyIncome = 5000;
totalWorldwideYearlyIncome = totalPopulation * avarageYearlyIncome;

// Setup relationship between money and population
peopleBlock = new Array(0, 600000, 1200000, 3000000, 4500000, 5100000, 5395000, 5700000, 5940000, 5999990);  // (X axel)
moneyBlock  = new Array(50, 400,    500,     850,     1486.67, 2182.35, 25000,   33700,   47500,   202000); // (Y axel)



// returns array with
//  [0] = SLOPE, m
//  [1] = y-int, b
//  [2] = R
function calcTrendRSquare (arrX, arrY) {
    
    var n = arrX.length;    
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumX2 = 0;
    var sumY2 = 0;
        
    for (var i = 0; i < arrX.length; i++){
        sumX += arrX[i];
        sumY += arrY[i];
        sumXY += arrX[i] * arrY[i];
        sumX2 += Math.pow(arrX[i],2);
        sumY2 += Math.pow(arrY[i],2);
    }
    
    var sumX2_2 = Math.pow(sumX,2); 
    var sumY2_2 = Math.pow(sumY,2);
    
    var slope_m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX2_2);
    var yInt_b  = (sumY - slope_m * sumX) / n;
    var r       = (n * sumXY - sumX * sumY) / Math.sqrt((n * sumX2 - sumX2_2) * (n * sumY2 - sumY2_2));
    
    var returnArray = new Array(slope_m, yInt_b, r); 
    return returnArray;
}

                          
function getPeoplePoorer(bIndex, income) {
        
        // get the R-square Trend
        var people = new Array(peopleBlock[bIndex], peopleBlock[bIndex+1]);
        var money  = new Array(moneyBlock[bIndex], moneyBlock[bIndex+1]);
        
        var rSquare = calcTrendRSquare(people, money);
        
        
        var peoplePoorer = ((income + (rSquare[1]*-1)) / rSquare[0]) * 1000;
        return peoplePoorer;
       // peoplePoorer = (((strInput*1) - 253.95)/0.0002) * 1000
}    


arrDidYouKnow = new Array();
arrDidYouKnow[0] = "The world's 225 richest people now have a combined wealth of $1 trillion. That's equal to the combined annual income of the world's 2.5 billion poorest people";
arrDidYouKnow[1] = "Three billion people live on less than $2 per day while 1.3 billion get by on less than $1 per day. Seventy percent of those living on less than $1 per day are women.";
arrDidYouKnow[2] = "Three decades ago, the people in well-to-do countries were 30 times better off than those in countries where the poorest 20 percent of the world's people live. By 1998, this gap had widened to 82 times.";
arrDidYouKnow[3] = "Microsoft CEO Bill Gates has more wealth than the bottom 45 percent of American households combined.";


// open popup window
function open_window(qs) {

	// the width and height
	width = 400;
	height = 300;
	
	//get the top left corner for the popup
	sx = screen.width/2 - width/2;
	sy = screen.height/2 - height/2;
	
	// open the popup window
	window.open('download.php?'+escape(qs),'','width='+width+',height='+height+',resizable=no,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=auto,screenX='+sx+',screenY='+sy+',top='+sy+',left='+sx);
}


// if submitted
function fnSubmit() {
	
	// error check
	if (document.priceForm.strIn.value == "") {
		new Effect.Shake('infield');
		layerWrite('error', null, 'Please type in your income.');
		return false;
	}else{
		layerWrite('error', null, '');
	}
	
	ourpoor = false;
	ourrich = false;
	
	// array
	arrPlace = new Array();
	strPlace2 = "";
	
	arrPlaceRicher = new Array();
	strPlaceRicher2 = "";
	
	// the input
	strInput = document.priceForm.strIn.value;
	currency = document.priceForm.currency.value;
	
	// remove dots
	strInput = strInput.replace(".","");
	strInput = strInput.replace(",","");
	strInput = strInput.replace(" ","");
	strIncome = strInput.toString(); 
	
	strHourly=(Math.floor((strInput / 1440)* 100)/ 100);

	// convert currency so we can calculate with us dollars.
	// currancy rates updated June 20th 2006. source: http://www.di.se
	if (currency == "uk") {
		strInput = strInput * 1.8412;
		strCurrency = "£";
	} else if (currency == "can") {
		strInput = strInput * 0.8961;
		strCurrency = "$";
	} else if (currency == "euro") {
		strInput = strInput * 1.257;
		strCurrency = "&euro;";	
	} else if (currency == "jpn") {
		strInput = strInput * 0.008698;
		strCurrency = "&yen;";	
	} else if (currency == "us") {
		strCurrency = "$";
	}

	// validate input	
	if (isNaN(strInput)) {
		
		// not valid
		new Effect.Shake('infield');
		layerWrite('error', null, 'Please type in your income.');

		
	} else {

		layerWrite('error', null, '');
		
		
       /*
		* strPlace is actually how many people that are poorer than you.
		* calculate place and percent
		*/ 
		
		
		
		
        // get the index to play with
		var blockIndex = 0;
        for (var i = 0; i < moneyBlock.length; i++) {
            if(strInput < moneyBlock[i]){
                blockIndex = i-1;
                break;
            }
        }

		
			
		    strPlace = getPeoplePoorer(blockIndex, (strInput * 1));

			// convert to string
			strPlace = strPlace.toString();
	
			// get the right digits
			strPlace = strPlace.substring(0,10);
			
			// make number again
			strPlace = (strPlace * 1);

			strPlace_1 = strPlace;
			strPlace = 6000000000 - strPlace;
			
			// calculate percentage	
			strPercentagePoorer = (strPlace / 6000000000) * 100;
			strPercentagePoorer = Math.floor(strPercentagePoorer * 100) / 100;
				
			// people richer
            strPlaceRicher = strPlace;
				
            // people poorer
            strPlace = strPlace_1;
			
			// convert to string again
			strPlace = strPlace.toString();
			strPlaceRicher = strPlaceRicher.toString();
			strIncome = strIncome.toString();
			
			// for the popupwindow
			tempPlace = strPlaceRicher;
			
			strPlace2 = addSpaces(strPlace);
			strPlaceRicher2 = addSpaces(strPlaceRicher);
			
			
		if (strInput <=minDollarToCalc) { // no output if less than $100 / day
			ourpoor = true;
			strPercentagePoorer = 1;  
		} else if (strInput >maxDollarToCalc ) {  // no output if more than 200 000 dollars / day
			ourrich = true;
			strPercentagePoorer = 99;
		}
		
		//  calc hour salary
		var hourSalary = strInput / 1872;
			
		
		// set text for the copybox
		var copybox = "<span class='blackheader'>RICHER THAN YOU THINK? </span><br/><br/>";
	
		copybox += "How do you feel about that? A bit richer we hope. Richer and ready to give some of your newly found wealth to those who need it most. It not hard - just slip your hand in your pocket and pull out something special. Something that can help redress the balance - and also make you feel uncommonly good. Many peoples lives could be happier if you donated just";
		copybox += "<strong> one hour's salary </strong> (approx <strong><span class='red'>$"+ addDecimals(hourSalary, 2) +"</span></strong> - UK estimate).<br/><br/>";
		
		copybox += "All you have to do is make a choice.<br/><br/>";
		
		copybox += "<strong><span class='red'>$8</span></strong> could buy you 15 organic apples OR 25 fruit trees for farmers in Honduras to grow and sell fruit at their local market.<br/><br/>";
		
		copybox += "<strong><span class='red'>$30</span></strong> could buy you an ER DVD Boxset OR a First Aid kit for a village in Haiti.<br/><br/>";
		
		copybox += "<strong><span class='red'>$73</span></strong> could buy you a new mobile phone OR a new mobile health clinic to care for AIDS orphans in Uganda.<br/><br/>";

		copybox += "<strong><span class='red'>$2400</span></strong> could buy you a second generation High Definition TV OR schooling for an entire generation of school children in an Angolan village.<br/><br/>";
		
		
		
		
		
		
		if (ourpoor == true ) {
			// if you are poor
		
			// change copybox copy if poor
			var copybox = "<br><br>";
	        copybox += "";
			copybox += "<strong>Poor countries lose around &pound;1.3 billion everyday as a direct result of trade policies that put profits before people.</strong><br><br>";
		
			copybox += "People whose lives could be dramatically improved or even saved if global trade rules were made fairer.<br><br>";
			copybox += "<strong>By working together - through Make Poverty History we can help make the difference between poverty and prosperity for millions of people.</strong><br><br>";
			copybox += "This is a crucial time to campaign for trade justice. The World Trade Organisation - one of the main organisations governing international trade - holds its biennial summit on 13-18 December 2005, in Hong Kong.<br><br>";
	
			strPlaceRicher2 = "5,780,722,892"; 	
            strPercentagePoorer = "99.9";

			tempPlace = "5780722892";
			strPlace2 = "5,780,722,892";
			currpos = redman_startpos;
			
		} else if (ourrich == true ) {
		
			// if you are very rich
			
			strPlaceRicher2 = "107,565"; 
			strPercentagePoorer = "0.001";
			tempPlace = "107565";
			strPlace2 = "107,565";
			currpos = redman_lastpos;

			
		
		} else if (ourpoor == false && ourrich == false) {
			// if you are within the acceptable range
			     
									
			// get the stepnumber
			var stepNbr = Math.round(((100 - strPercentagePoorer) * 0.01) * 100);
			
			// get the pixel pos for arrow redman
			currpos = Math.round(stepNbr * redman_stepsize) + redman_startpos;
		
		}
		
		
		// set DID YOU KNOW?  text
		var didyou = arrDidYouKnow[Math.round(Math.random() * 3)];
		
		var downloadlink = "<a href='download.php?"+tempPlace+"' onFocus='blur();'>Click here</a> to download the code you'll need";		
		
		var tmpIncome = addSpaces(strIncome);
		
		//remove comma if less then 999.
		if(strIncome <= 999){
		  tmpIncome = tmpIncome.replace(",","");
        }		
		
		// set html for boxes
		var nbrRichest1 = "= "+ strPlaceRicher2;
		var nbrRichest2 = strPlaceRicher2;
		var nbrPercent = "TOP "+ strPercentagePoorer +"%";
		
		
		// dont print infoboxes to page if poor
		if(!ourpoor){
		  layerWrite('nbrRichest1', null, nbrRichest1);
		  layerWrite('nbrRichest2', null, nbrRichest2);
		  layerWrite('nbrPercent', null, nbrPercent);
		}
		
		
		// main box with lots of copy
		layerWrite('copybox', null, copybox);
		
		// Did you know
		layerWrite('didyou', null, didyou);
		
		// link to download page.
		layerWrite('downloadlink', null, downloadlink);
		
		
		// the little box down on page.
		layerWrite('helpboxrichest', null, strPlaceRicher2);
		
		// move to right place on line
		// and shows the resultblock
			
		fn_move_pos(currpos);
		
		
	}

}



// reverses a string of text
function reverse(value) {

   for (var text = '',i=value.length-1;i>-1;i=i-1){
       text += value.charAt(i);
      }
 
   return text;
}

function addDecimals(value, nbrOfDecimals) {
	value = value.toString();
	var dotIndex = value.lastIndexOf('.'); 
	if (dotIndex < 0){
		var decimal = "";
		for (i=0;i<nbrOfDecimals;i++)
			decimal += "0";
	}else{
		return value.substring(0,dotIndex+nbrOfDecimals+1);
	}			
}


// display answer
function layerWrite(id,nestref,text) {
	
	if (ns4) {
		var lyr = (nestref)?
		eval('document.'+nestref+'.document.'+id+'.document') : document.layers[id].document
		lyr.open()
		lyr.write(text)
		lyr.close()
	}
	
	if (ie4) {
		document.all[id].innerHTML = text;
	}
	
	// NS 6
	if (ns6) {
		document.getElementById(id).innerHTML = text;
	}
}


function addSpaces(str) {
      
      // reverse the string
      str = reverse(str);
			
			// make array
			for (i=0; i<str.length; i++) {
				arrPlace[i] = str.charAt(i);
		    }
			
			var str2 = "";
			// add spaces
			for (i=0; i < str.length; i++) {
				if ((i == 2) || (i == 5 && (str.length != 6)) || (i == 8 && (str.length != 9))) {
					str2 = str2 + arrPlace[i] + ","
				} else {
					str2 = str2 + arrPlace[i];
				}
			}
				
			// reverse it back again and return.
			
		str = reverse(str2);
			
			return str;
}

// includes the news
function fnInclude() {
	
	if (ie4) {
		document.all.news.style.visibility = 'visible';
		if (iswin) {
		document.all.news.style.top = 795;
		} else {
		document.all.news.style.top = 775;
		}
     } else if (ns4) {
		document.news.visibility = 'show';
		document.news.top = 795;
    } else if (ns6) {
		document.getElementById('news').style.visibility = 'visible';
		document.getElementById('news').style.top = 795;
	}
}

// hides the news
function fnIncludeHide() {
	
	if (ie4) {
		document.all.news.style.visibility = 'hidden';
		if (iswin) {
		document.all.news.style.top = 795;
		} else {
		document.all.news.style.top = 775;
		}
     } else if (ns4) {
		document.news.visibility = 'hide';
		document.news.top = 795;
    } else if (ns6) {
		document.getElementById('news').style.visibility = 'hidden';
		document.getElementById('news').style.top = 795;
	}

}

// moves the position graphic AND shows the resultblock
function fn_move_pos(topos) {
	
	var nowpos = 0;
	
	if (ie4) {
	 	nowpos = document.all.redman.style.left;
		document.all.resultblock.style.display = 'block';
		document.all.resultblock.style.visibility = 'visible';
    } else if (ns4) {
        nowpos = document.redman.left;
		document.resultblock.visibility = 'show';
		document.resultblock.display = 'block';
    } else if (ns6) {
		nowpos = document.getElementById('redman').style.left;
		document.getElementById('resultblock').style.display = 'block';
		document.getElementById('resultblock').style.visibility = 'visible';
	}
	
	if(!nowpos){
		nowpos = redman_startpos;
	}else{
		nowpos = nowpos.substring(0, nowpos.indexOf('p'));
	}
	 
	if(ie4 && ismac && !isopera){
		document.all.redman.style.left = topos;
	}else{
		endpos = topos - nowpos;
		new Effect.ScrollTo('resultblock',{duration: 1.0});
		new Effect.MoveBy('redman', 0, endpos,{duration: 1.3, queue: 'end'});
	}
	
	return false;
	
}

function hide_pos() {
	if (ie4) {
		document.all.arr.style.visibility = 'hidden';
		document.all.line.style.visibility = 'hidden';
	} else if (ns4) {
		document.arr.visibility = 'hide';
		document.line.visibility = 'hide';
    } else if (ns6) {
		document.getElementById('arr').style.visibility = 'hidden';
		document.getElementById('line').style.visibility = 'hidden';
	}
}

function whatkey() {
	if (ie4 || ns6) {
		thekey = window.event.keyCode;
				
		if (thekey == 13 && iswin) {
			fnSubmit();
		}
	}
}

//-->
