<html>
<head>
	<title>Global Rich List</title>
	<link rel='stylesheet' href='_style/default.css' type='text/css'>
	
	<script>

// array
arrPlace = new Array();
strPlace2 = "";

// reverses a string of text
function reverse(value) {

   for (var text = '',i=value.length-1;i>-1;i=i-1)
       text += value.charAt(i);

   return text;
}

//get the querystring
querystr = window.location.search.slice(1);
//split it
nameValues = querystr.split("&");
//get the first string (before the next &
strPlace = nameValues[0];

// convert to string again
strPlace = strPlace.toString();

// reverse it
strPlace = reverse(strPlace);

// make array
for (i=0; i<strPlace.length; i++) {
	arrPlace[i] = strPlace.charAt(i);
   }

// add spaces
for (i=0; i<strPlace.length; i++) {

	if ((i == 2) || (i == 5 && (strPlace.length != 6)) || (i == 8 && (strPlace.length != 9))) {

		strPlace2 = strPlace2 + arrPlace[i] + ","
	} else {
		strPlace2 = strPlace2 + arrPlace[i];
	}
}

// reverse it back
strPlace2 = reverse(strPlace2);
</script>
	
</head>

<body  marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" background="_images/cash_tile.gif">


<br><br>

<TABLE class="main_table" BORDER=0 CELLPADDING=2 CELLSPACING=0 width=785>
<TR>
<TD valign="top" class="black">


    <!-- LANGUAGE HOLDER -->
	<TABLE WIDTH=779 BORDER=0 CELLPADDING=2 CELLSPACING=0>
	<TR>
	<TD width="5">&nbsp;<br></TD>
	<TD width="30"><a href="index.php" class="small">Home</a>&nbsp;<br></TD>
	<TD width="*">&nbsp;<br></TD>
	<TD width="30"><!--<a href="index.php" class="small">English</a>--><br></TD>
	<TD width="5">&nbsp;<br></TD>
	<TD width="30"><!--<a href="index.php" class="small">Japanese</a>--><br></TD>
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
	<TD align="left"><span class="blackheader">HELP SPREAD THE WORD!</font><br></TD>
	</TR>
	</TABLE>








<TABLE BORDER=0 CELLPADDING=1 CELLSPACING=0 style='width:779px;'>
    <TR>
        <TD width='28'><img src='_images/blank.gif' width='28' height='15' border='0' alt=''><br></TD>
        <TD colspan=2><font class=black><br>
        Support us by putting one of the boxes below on your web site.
<br><br>
To download one of the personalized 'boxes', copy the code to the right of the box and add it to your site. To download one of the images, right click on the image and choose 'Save Picture as'. Then add it to your web site.
</font>
<br><br>

</td>
</tr><tr>
<TD width='28'><img src='_images/blank.gif' width='28' height='15' border='0' alt=''><br></TD>
<td valign='top'>
<strong><em>Personalised Boxes:</em></strong><br><br>
<script>
// write the page
document.write ("<TABLE BORDER=0 CELLPADDING=8 CELLSPACING=0 style='border: 2px solid #000000;width:140px;'>");
document.write ("<TR>");
document.write ("<TD align=left style='font-size=12px; font-family:arial; color:#000000; line-height: 120%;'>");
document.write ("<strong>I'm loaded.<br>It's official.<br></strong>I'm the <font style='font-size=12px; font-family:arial; color:#ff0000;'>" + strPlace2 + "</font> richest person on earth!<br><br><br>");
document.write ("<a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #000000;'><img src='http://globalrichlist.com/_images/logo.gif' width=102 height=10 border=0><br>");
document.write ("How rich are you? &rsaquo;&rsaquo;</a>");
document.write ("</TD></TR></TABLE>");

document.write ("</td><td valign='top' style='font-size=10px;'>");
document.write ("<font style='font-size=12px;'><strong><em>&nbsp;</em></strong><br><br></font>");
document.write ("<textarea style='font-size: 10px;color:#000;font-family: arial; border: 1px solid #000000; width:250; height:148;'>");

document.write ("<TABLE BORDER=0 CELLPADDING=8 CELLSPACING=0 style='border: 2px solid #000000;width:140px;'&rsaquo;");
document.write ("<TR>");
document.write ("<TD align=left style='font-size=12px; font-family:arial; color:#000000; line-height: 120%;'>");
document.write ("<strong>I'm loaded.<br>It's official.<br></strong>I'm the <font style='font-size=12px; font-family:arial; color:#ff0000;'>" + strPlace2 + "</font> richest person on earth!<br><br><br>");
document.write ("<a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #000000;'><img src='http://globalrichlist.com/_images/logo.gif' width=102 height=10 border=0><br>");
document.write ("How rich are you? >></a>");
document.write ("</TD></TR></TABLE>");
document.write ("</textarea>");

document.write ("</td></tr><tr><TD width='28'><img src='_images/blank.gif' width='28' height='15' border='0' alt=''><br></TD><td valign='top'>");

document.write ("<TABLE BORDER=0 CELLPADDING=8 CELLSPACING=1 style='border: 1px solid #000000; width:140px;' bgcolor='#ffffff'>");
document.write ("<TR>");
document.write ("<TD align=left style='font-size=12px; font-family:arial; color:#ffffff; background-color:#6C5955; line-height: 120%;'>");
document.write ("<a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #ffffff;'><img src='http://globalrichlist.com/_images/logo.gif' width=102 height=10 border=0><br>");
document.write ("How rich are you? >></a><br><br>");
document.write ("<font style='font-size=12px; font-family:arial; color:#D1BEB9;'><strong>I'm loaded.<br>It's official.<br></strong>I'm the <font style='font-size=12px; font-family:arial; color:#ffffff;'>" + strPlace2 + "</font> richest person on earth!</font><br>");
document.write ("</TD></TR></TABLE>");

document.write ("</td><td valign='top' style='font-size=10px;'>");

document.write ("<textarea style='font-size: 10px;color:#000;font-family: arial; border: 1px solid #000000; width:250; height:134;'>");
document.write ("<TABLE BORDER=0 CELLPADDING=8 CELLSPACING=1 style='border: 1px solid #000000; width:140px;' bgcolor='#ffffff'>");
document.write ("<TR>");
document.write ("<TD align=left style='font-size=12px; font-family:arial; color:#ffffff; background-color:#6C5955; line-height: 120%;'>");
document.write ("<a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #ffffff;'><img src='http://globalrichlist.com/_images/logo.gif' width=102 height=10 border=0><br>");
document.write ("How rich are you? >></a><br><br>");
document.write ("<font style='font-size=12px; font-family:arial; color:#D1BEB9;'><strong>I'm loaded.<br>It's official.<br></strong>I'm the <font style='font-size=12px; font-family:arial; color:#ffffff;'>" + strPlace2 + "</font> richest person on earth!</font><br>");
document.write ("</TD></TR></TABLE>");
document.write ("</textarea>");

document.write ("</td></tr><tr><TD width='28'><img src='_images/blank.gif' width='28' height='15' border='0' alt=''><br></TD><td valign='top'>");


document.write ("<TABLE BORDER=0 CELLPADDING=8 CELLSPACING=1 style='border: 1px solid #000000; width:190px;' bgcolor='#ffffff'>");
document.write ("<TR>");
document.write ("<TD align=left style='font-size=12px; font-family:arial; color:#cc0000; background-color:#FFFF00; line-height: 120%;'>");
document.write ("<font style='font-size=12px; font-family:arial; color:#000000;'><strong>I'm</strong> the <font style='font-size=12px; font-family:arial; color:#cc0000;'><strong>" + strPlace2 + "<strong></font> richest person on earth!</font><br><br>");
document.write ("<a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #000000;'><img src='http://globalrichlist.com/_images/logo.gif' width=102 height=10 border=0><br>");
document.write ("<font style='font-size=10px;'>Discover how rich you are!</font> >></a>");
document.write ("</TD></TR></TABLE>");


document.write ("</td><td valign='top' style='font-size=10px;'>");

document.write ("<textarea style='font-size: 10px;color:#000;font-family: arial; border: 1px solid #000000; width:250; height:89;'>");
document.write ("<TABLE BORDER=0 CELLPADDING=8 CELLSPACING=1 style='border: 1px solid #000000; width:190px;' bgcolor='#ffffff'>");
document.write ("<TR>");
document.write ("<TD align=left style='font-size=12px; font-family:arial; color:#cc0000; background-color:#FFFF00; line-height: 120%;'>");
document.write ("<font style='font-size=12px; font-family:arial; color:#000000;'><strong>I'm</strong> the <font style='font-size=12px; font-family:arial; color:#cc0000;'><strong>" + strPlace2 + "<strong></font> richest person on earth!</font><br><br>");
document.write ("<a href='http://www.globalrichlist.com' onFocus='blur();' style='text-decoration: none; font-weight: bold; color: #000000;'><img src='http://globalrichlist.com/_images/logo.gif' width=102 height=10 border=0><br>");
document.write ("<font style='font-size=10px;'>Discover how rich you are!</font> >></a>");
document.write ("</TD></TR></TABLE>");document.write ("</textarea>");

document.write ("<br>");
document.write ("</TD></TR></TABLE>");


</script>

<TABLE WIDTH=779 BORDER=0 CELLPADDING=1 CELLSPACING=0>
	<TR>
	<TD width='28'><img src='_images/blank.gif' width='28' height='15' border='0' alt=''><br></TD>
	<TD>
	<br><br>
	<strong><em>Images:</em></strong>
	<br><br>
	<img src='http://globalrichlist.com/_images/rich_list_1.gif' width=192 height=51 border=0>&nbsp;&nbsp;&nbsp;&nbsp;
	<img src='http://globalrichlist.com/_images/rich_list_3.gif' width=143 height=36 border=0>
	&nbsp;&nbsp;&nbsp;&nbsp;
	<img src='http://globalrichlist.com/_images/rich_list_2.gif' width=143 height=54 border=0>
	<br><br><br>
	</TD>
	</TR>
	</TABLE>


    <!-- FOOTER LINKS -->
	<TABLE WIDTH=779 BORDER=0 CELLPADDING=1 CELLSPACING=0>
	<TR>
	<TD width="779" height="1" background="_images/dothor.gif"><img src="_images/blank.gif" width="15" height="1" border="0" alt=""></TD>
	</TR><TR>
	<TD width="779">
	<img src="_images/blank.gif" width="150" height="5" border="0">
	<a href="why.html" class="small"><u>Why</u> are we doing it?</a>
	<img src="_images/blank.gif" width="30" height="5" border="0">
	<a href="how.html" class="small"><u>How</u> do we calculate it?</a>
	<img src="_images/blank.gif" width="30" height="5" border="0">
	<a href="who.html" class="small"><u>Who's</u> behind this?</a>
	<img src="_images/blank.gif" width="30" height="5" border="0">
	<a href="mailto:&#105;&#110;&#102;&#111;&#64;&#103;&#108;&#111;&#98;&#97;&#108;&#114;&#105;&#99;&#104;&#108;&#105;&#115;&#116;&#46;&#99;&#111;&#109;" class="small"><u>Contact</u> us</a>
	<br></TD>
	</TR><TR>
	<TD width="779" background="_images/dothor.gif"><img src="_images/blank.gif" width="15" height="1" border="0"><br></TD>
	</TR><TR>
	<TD width="779"><img src="_images/blank.gif" width="15" height="5" border="0"><br></TD>
	</TR>
	</TABLE>
	
	
</TD>
</TR>
</TABLE>

</body>
</html>


