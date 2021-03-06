<html>

<head>
	<title>Global Rich List</title>	
	<script src="_js/scriptaculous-js-1.6.1/lib/prototype.js" type="text/javascript"></script>
  	<script src="_js/scriptaculous-js-1.6.1/src/scriptaculous.js" type="text/javascript"></script>
	<script src="_js/project.js" type="text/javascript"></script>

  	
	
	<link rel='stylesheet' href='_style/default.css' type='text/css'>
</head>

<body marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" >
	
<br><br>
<TABLE class="main_table" BORDER=0 CELLPADDING=2 CELLSPACING=0 width=785>
	<TR>
		<TD valign="top" class="black">


    <!-- LANGUAGE HOLDER -->	
	<TABLE WIDTH=779 BORDER=0 CELLPADDING=2 CELLSPACING=0>	
		<TR>	
			<TD width="5">&nbsp;<br></TD>	
			<TD width="30"><!--<a href="index.php" class="small">Home</a>-->&nbsp;<br></TD>	
			<TD width="*">&nbsp;<br></TD><TD width="30"><!--<a href="index.php" class="small">English</a>--><br></TD>	
			<TD width="5">&nbsp;<br></TD><TD width="30"><!--<a href="index.php" class="small">Japanese</a>--><br></TD>	
			<TD width="5">&nbsp;<br></TD>	
		</TR>	
	</TABLE>
	
	
	<!--TOP HEADER IMAGE -->
	<TABLE WIDTH=779 BORDER=0 CELLPADDING=2 CELLSPACING=0>	
		<TR>	
			<TD><img src="_images/header.gif" width="775" height="137" border="0" alt="Global rich list logo"><br></TD>	
		</TR>	
	</TABLE>


    <!--HOW RICH HEADER -->	
	<TABLE WIDTH=779 BORDER=0 CELLPADDING=1 CELLSPACING=0>	
		<TR>	
			<TD width="28"><img src="_images/blank.gif" width="28" height="15" border="0" alt=""><br></TD>
			<TD align="left"><span class="blackheader">HOW RICH <em>ARE</em> YOU?</font><br></TD>	
		</TR>	
	</TABLE>
    

    <!-- TOP COPY -->	
	<TABLE border=0 WIDTH=779 BORDER=0 CELLPADDING=1 CELLSPACING=0>	
		<TR>
			<TD rowspan="2" width="28"><img src="_images/blank.gif" width="28" height="15" border="0" alt=""><br></TD>	
			<TD align="left" width="*"><font class=black>
				<br>Every year we gaze enviously at the lists of the richest people in world. 
				<br>Wondering what it would be like to have that sort of cash. But where 
				<br>would you sit on one of those lists? Here's your chance to find out.
				<br><br>
				<strong>Just enter your annual income into the box below and hit 'show me the money'</strong>
				<br></font>
			</TD>	
		</TR>
		<TR>
			<TD align="left">
				<form id="inputform" name="priceForm" action="index.php" method="post" onsubmit="fnSubmit(); return false;">	
					<div id="infield">
					<font class="black">	<br>
					<span class="yellowback">
						<strong>MY ANNUAL INCOME</strong>
						</span>&nbsp;&nbsp;	<SELECT NAME="currency" SIZE=1>
	   					<option value="uk">&pound; POUND</option>\n<option value="us">$ US</option>\n<option value="jpn">&yen; YEN</option>\n<option value="can">$ CAN</option>\n<option value="euro">&euro; EURO</option>\n						</SELECT>&nbsp;&nbsp;  
							<input type="text" name="strIn" class="" style="width:70px;" value="">	&nbsp;&nbsp;
							<input type="submit" onFocus="blur();" value="Show me the money!">
							</font>	<br>
						</div>
					</form>
					<strong><span id="error" class="red"></span></strong>
					<br><br>
				</TD>
			</TR>
		</TABLE>

    

<!-- INFORMATIONBOX -->
 <div id="resultblock" style="display: none; visibility: hidden;">
 <table border=0 WIDTH=779 BORDER=0 CELLPADDING=0 CELLSPACING=0>
    <tr>
        <td width="779" height="151" background="_images/bg_yellowbox.gif">
			<table width="100%" height="100" border="0">
				<tr>
					<td width="160" class="transparent"></td>
					<td width="340" class="transparent" valign="bottom">
						<br />
						<span id="nbrRichest1"></span><br />
						You are the <strong><span id="nbrRichest2" class="red"></span></strong> richest person in the world!
					</td>
					<td class="transparent" valign="bottom">
						<span class="blackbig">You're in the </span>
						<span class="redbig" id="nbrPercent"></span><br />
						<span class="blackbig">richest people in the world!</span>
					</td>
				</tr>
			</table>
			<!--  <span id='infobox1'></span> -->
        </td>
    </tr>
 </table>

 <!-- SCALE LINE -->
 <table border=0 WIDTH=779 CELLPADDING=0 CELLSPACING=0>
    <tr>
        <td width="779" height="124">
           <div id="scaleholder">
                <img src="_images/redman.gif" width="40" height="57" id="redman" alt="Rich list scale"/>
                <img  src="_images/scale_new.gif" width="779" height="124" id="scaleimg" alt="Rich list scale"/>
           </div>
        </td>
    </tr>
 </table>

 <!-- COPYBOX AND VOTE BOX-->
 <table border=0 width=779 cellpadding=0 cellspacing=0>
    <tr>
        <td width="28"><img src="_images/blank.gif" width="28" height="150" border="0" alt=""><br></td>
        <td align="left" valign="top">
			<br /><br />
            <span id="copybox">
				
            </span>
        </td>
        <td width="28" align="left" valign="top"><img src="_images/blank.gif" width="28" height="150" border="0" alt=""><br></td>
        <td width="370" align="left" valign="top">
            <br />
			<img src="_images/donate_new.gif" alt="Donate now. GRL are currently supporting..."/><br />
			<div id="donate_btn"><a href="http://www.justgiving.com/globalrichlist"><em>Care</em></a></div>
			<br /><br />
        </td>
    </tr>
 </table>
 
 
  <!--DID YOU KNOW - HELP US - BOX-->
 <table border=0 WIDTH=779 BORDER=0 CELLPADDING=1 CELLSPACING=0>
    <tr>
        <TD colspan="5" width="779" height="1" background="_images/dothor.gif"><img src="_images/blank.gif" width="15" height="1" border="0" alt=""></TD>
    </tr>
    <tr>
        <TD width="28"><img src="_images/blank.gif" width="28" height="15" border="0" alt=""><br></TD>
        <td width="230" style="padding-right:10px;" height="44" align="left" valign="top">
            <br><br>
            <span class="blackheader">
                DID YOU KNOW..?
            </span><br><br>
            
            <span id="didyou">
                
            </span><br><br>
        </td>
        <TD width="1" background="_images/dotvert.gif"><img src="_images/blank.gif" width="1" height="1" border="0" alt=""></TD>
        <TD width="28"><img src="_images/blank.gif" width="28" height="15" border="0" alt=""><br></TD>
        <td width="*" height="44" align="left" valign="top">
            <br><br>
           <table border="0" width="455" cellpadding="0" cellspacing="0">
            <tr>
                <td colspan="2">
                    <span class="blackheader">HELP US SPREAD THE WORD!</span>
                    <br>&nbsp;
                </td>
            </tr>
            <tr>
                <td width="235" style="padding-right:10px;" valign="top">
                    Add the box to the right to your own website. <span id="downloadlink"></span>
                    <br><br>
                    <a target="_blank" href="http://www.channel4.com/4money/funnymoney/richometer/index.html">Click here to see where you are on the UK rich list.</a>
                </td>
                <td  valign="top">
                   <!-- PUT ON WEBSITE CODE START -->
                   
                   <TABLE BORDER=0 CELLPADDING=8 CELLSPACING=1 style='border: 1px solid #000000; width:190px;' bgcolor='#ffffff'><TR><TD align=left style='font-size=12px; font-family:arial; color:#ffffff; background-color:#FFFF00; line-height: 120%;'><font style='font-size=12px; font-family:arial; color:#000000;'><strong>I'm</strong> the <font style='font-size=12px; font-family:arial; color:#cc0000;'><strong><span id="helpboxrichest">5,323,373,494</span></strong></font> richest person on earth!</font><br><br><a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #000000;'><img src='_images/logo.gif' width=102 height=10 border=0><br><font style='font-size=10px;'>Discover how rich you are!</font> >></a></TD></TR></TABLE>
                   
                   <!-- PUT ON WEBSITE CODE END -->
                </td>
            </tr>
           </table>
           <br><br>
        </td>
    </tr>
 </table>
 
 
 
 
 
 </div><!-- END OF SHOW AND HIDE -->






    <!-- FOOTER LINKS -->	<TABLE WIDTH=779 BORDER=0 CELLPADDING=1 CELLSPACING=0>	<TR>	<TD width="779" height="1" background="_images/dothor.gif"><img src="_images/blank.gif" width="15" height="1" border="0" alt=""></TD>	</TR><TR>	<TD width="779">	<img src="_images/blank.gif" width="150" height="5" border="0">	<a href="why.html" class="small"><u>Why</u> are we doing it?</a>	<img src="_images/blank.gif" width="30" height="5" border="0">	<a href="how.html" class="small"><u>How</u> do we calculate it?</a>	<img src="_images/blank.gif" width="30" height="5" border="0">	<a href="who.html" class="small"><u>Who's</u> behind this?</a>	<img src="_images/blank.gif" width="30" height="5" border="0">	<a href="mailto:&#105;&#110;&#102;&#111;&#64;&#103;&#108;&#111;&#98;&#97;&#108;&#114;&#105;&#99;&#104;&#108;&#105;&#115;&#116;&#46;&#99;&#111;&#109;" class="small"><u>Contact</u> us</a>	<br></TD>	</TR><TR>	<TD width="779" background="_images/dothor.gif"><img src="_images/blank.gif" width="15" height="1" border="0"><br></TD>	</TR><TR>	<TD width="779"><img src="_images/blank.gif" width="15" height="5" border="0"><br></TD>	</TR>	</TABLE></TD></TR></TABLE><br><br>

</body></html>