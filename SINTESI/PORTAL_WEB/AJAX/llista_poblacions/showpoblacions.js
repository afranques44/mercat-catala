function showPoblacions(str)
	{
	var url="AJAX/llista_poblacions/getpoblacions.php";
	url=url+"?q="+str;
	url=url+"&sid="+Math.random();

	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	}