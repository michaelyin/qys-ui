 /*
 	*	上传数据
 	*/
		//alert("aaaaaaaaaaaaa");
	var path;
	//alert(path);
	function create_one_add(path)
	{
		//alert(path);
		//alert("aaaaaaa");
		var add_object={};
		
		
		add_object.form="";
		add_object.http;
		
		
		//检查函数
		add_object.check_fn=function()
		{
			alert("check");
			return true;	
		}
		
		//alert("a11");
		add_object.send_fn_ajax=function()
		{
			//alert("aaaaaaaa");
			if(add_object.check_fn()==false)
			{
				return;
			}    
			$("#"+add_object.form).ajaxSubmit({
				url: path,
            	type: 'POST',
				dataType: 'xml',
				success: function (xmlDoc) {
					//alert($(xmlDoc).text());
            		var retCode = $(xmlDoc).find('status').text();
					if(retCode=="1")
					{
						alert("上传成功");
					}else if(retCode=="0")
					{
						alert("上传失败");	
					}else
					{
						alert(retCode);
					}
          		},//submit success
			
				error: function (data)
				{
					//alert("bbbbb");
					displayProp(data);
				}
			}); //ajaxSubmit
			
		}
		return add_object;
	}
	//得到错误时运行的内容
	function displayProp(obj){    
		var names="";       
		for(var name in obj){       
		   names+=name+": "+obj[name]+", ";     
		}  
		alert(names);
	}
	/*删除左右两端的空格*/
	function trim(str)
	{ 
	　　   return str.replace(/(^s*)|(s*$)/g, "");
	}
	
	
	
	//获取日期与时间
	function getNowFormatDate() {
		var date = new Date();
		var seperator1 = "-";
		var seperator2 = ":";
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
				+ " " + date.getHours() + seperator2 + date.getMinutes()
				+ seperator2 + date.getSeconds();
		return currentdate;
	}
	//alert(getNowFormatDate());
	document.getElementById("createDate").value = getNowFormatDate();
	//alert(get_url_base());
	var path =get_url_base()+"/xml/add_policy_notes_xml.php";
	//alert(path);
	var notes_add=create_one_add(path);
	//alert("1234567");
	notes_add.form="form1";
	//alert(news_add.form);
	notes_add.check_fn=function()
	{
		//alert("aaaaaaaaaa");
		if($("#form1").find("input[name='policyName']").val()=="".trim())
		{
			alert("请输入政策名称！");
			return false;
		}
		if($("#form1").find("input[name='publishDept']").val()=="".trim())
		{
			alert("请输入发布部门！");
			return false;
		}
		if($("#form1").find("input[name='policyNum']").val()=="".trim())
		{
			alert("请输入文号！");
			return false;
		}
		if($("#form1").find("input[name='policyCategoryTxt']").val()=="".trim())
		{
			alert("请输入政策类别！");
			return false;
		}
		if($("#form1").find("input[name='tag']").val()=="".trim())
		{
			alert("请输入标签!");
			return false;
		}
		if($("#form1").find("textarea[name='policyTxt']").val()=="".trim())
		{
			alert("请输入政策原文！");
			return false;
		}
		if($("#form1").find("textarea[name='InterpretationTxt']").val()=="".trim())
		{
			alert("请输入政策解读！");
			return false;
		}
		return true;	
	}
	
	//alert(news_add.check_fn);
	function notes_add_touch()
	{
		//alert("aaaaaaaaaaaaaaaa");
		notes_add.send_fn_ajax();
	}
	var image_count=0;
	
	function file_add()
	{
		
		var div_list=document.getElementById("messages");
		var div_string=	"<div class=\"row\" style=\"margin-top:20px; padding-left:35%\">"+							
							"<div class=\"\" id=\"preview"+image_count+"\" >"+
								"<img src=\"img/use.jpg\" height=\"152\" width=\"200\"  id=\"imghead"+image_count+"\" class=\"img-responsive\" />"+
							"</div>"+
						"</div>"+
						"<div class=\"row\" style=\"margin-top:10px; padding-left:35%\">"+
							"<input type=\"file\"  name=\"uploadinput[]\" onChange=\"previewImage(this,"+image_count+")\" />"+
						"</div>";
			
		
		var div_one=document.createElement("div");
		div_one.innerHTML=div_string;
		div_list.appendChild(div_one);
		image_count+=1;
	}
	
	function file_delete()
	{
		
		if(image_count==0)
		{
			alert("图片列表为空");
			return;
		}
		
		var div_list=document.getElementById("messages");
		
		var has_child = div_list.hasChildNodes(); 
		
		if(has_child==false)
		{
			return;
		}
		
		div_list.removeChild(div_list.childNodes[div_list.childNodes.length-1]);
		
		image_count-=1;
		
	}
	
	
	var image_count2=100;
	
	function file_add2()
	{
		
		var div_list2=document.getElementById("messages2");
		var div_string2 =	"<div class=\"row\" style=\"margin-top:20px; padding-left:35%\">"+							
							"<div class=\"\" id=\"preview"+image_count2+"\" >"+
								"<img src=\"img/use.jpg\" height=\"152\" width=\"200\"  id=\"imghead"+image_count2+"\" class=\"img-responsive\" />"+
							"</div>"+
						"</div>"+
						"<div class=\"row\" style=\"margin-top:10px; padding-left:35%\">"+
							"<input type=\"file\"  name=\"uploadinput2[]\" onChange=\"previewImage(this,"+image_count2+")\" />"+
						"</div>";
			
		
		var div_one2=document.createElement("div");
		div_one2.innerHTML=div_string2;
		div_list2.appendChild(div_one2);
		image_count2+=1;
	}
	
	function file_delete2()
	{
		
		if(image_count2==0)
		{
			alert("图片列表为空");
			return;
		}
		
		var div_list=document.getElementById("messages2");
		
		var has_child = div_list.hasChildNodes(); 
		
		if(has_child==false)
		{
			return;
		}
		
		div_list.removeChild(div_list.childNodes[div_list.childNodes.length-1]);
		
		image_count2-=1;
		
	}
	
	
	//alert("aaaaaaaaaaaaa");
	var The_Year,The_Day,The_Month;
	var today;
	var Firstday;
	today = new Date();
	The_Year = today.getFullYear();
	//alert(The_Year);
	The_Month = today.getMonth() + 1;
	//alert(The_Month);
	
	
	//alert("上个月共"+bf_Days);
	//alert(Firstday);ShowCalendar
	ShowCalender(The_Year,The_Month);
	ShowCalender2(The_Year,The_Month);
	ShowCalender3(The_Year,The_Month);
	function RunNian(The_Year)
	{
		if ((The_Year%400==0) || ((The_Year%4==0) && (The_Year%100!=0)))
		return true;
		else
		return false;
	}
	function GetWeekday(The_Year,The_Month)
	{
	
		var startDay = new Date(The_Year, The_Month - 1, 1).getDay();
		//var Day1 = (new Date(The_Year, The_Month - 1, 1)-1).getDay();
		//alert(Day1);
		return startDay;
	}
	function ShowCalender(The_Year,The_Month)
	{
		var showstr;
		var Month_Day;
		var ShowMonth;
		var today;
		var Firstday;
		var bf_Days;
		var numRow = 0;
		Firstday = GetWeekday(The_Year,The_Month);
		bf_Days = new Date(The_Year, The_Month-1, 0).getDate();
		today = new Date();
		var year = today.getFullYear();      //本年
        var month = today.getMonth() + 1;    //本月
        var day = today.getDate();           //本日
		switch (The_Month)
		{
		case 1 : ShowMonth = "January"; Month_Day = 31; break;
		case 2 :
		ShowMonth = "February";
		if (RunNian(The_Year))
		Month_Day = 29;
		else
		Month_Day = 28;
		break;
		case 3 : ShowMonth = "March"; Month_Day = 31; break;
		case 4 : ShowMonth = "April"; Month_Day = 30; break;
		case 5 : ShowMonth = "May"; Month_Day = 31; break;
		case 6 : ShowMonth = "June"; Month_Day = 30; break;
		case 7 : ShowMonth = "July"; Month_Day = 31; break;
		case 8 : ShowMonth = "August"; Month_Day = 31; break;
		case 9 : ShowMonth = "September"; Month_Day = 30; break;
		case 10 : ShowMonth = "October"; Month_Day = 31; break;
		case 11 : ShowMonth = "November"; Month_Day = 30; break;
		case 12 : ShowMonth = "December"; Month_Day = 31; break;
		
		}
		showstr = "";
		showstr = "<h5 class=\"title clearfix\">"+
				     "<a data-original-title=\"Previous Month\" class=\"actionIcon pull-left\" onclick=\"prevmonth("+The_Year+","+The_Month+")\" rel=\"tooltip\" data-placement=\"right\">"+
    			       "<i class=\"uiIconMiniArrowLeft uiIconLightGray\"></i>"+
					 "</a>"+
				     "<span id=\"dateYM\">"+ShowMonth+", "+The_Year+"</span>"+
					 "<a data-original-title=\"Next Month\" class=\"actionIcon pull-right\" onclick=\"nextmonth("+The_Year+","+The_Month+")\" rel=\"tooltip\" data-placement=\"right\">"+
   					   "<i class=\"uiIconMiniArrowRight uiIconLightGray\" style=\"position:relative; top:-14px;\"></i>"+
					 "</a>"+
				  "</h5>"+
				  "<table class=\"weekList\">"+
                		"<tbody>"+
                    		"<tr>"+
                               "<td><font color=\"red\">S</font></td>"+
							   "<td>M</td>"+
							   "<td>T</td>"+
							   "<td>W</td>"+
							   "<td>T</td>"+
							   "<td>F</td>"+
							   "<td>S</td>"+
							"</tr>"+
						"</tbody>"+
					"</table>"+
					"<hr>"+
            		"<table cellspacing=\"0\" cellpadding=\"0\" class=\"weekDays\">"+
					"<tbody>";
					
		//alert(Firstday);
		if((day <= (7-Firstday))&&(The_Year == year)&&(The_Month == month))
		{
			showstr += "<tr class=\"currentWeek\">";
		}
		else
		{
			showstr += "<tr>";
		}
		for (i = Firstday; i >= 1; i--)
		{/**/
			showstr +="<td><a onclick=\"\" class=\"otherMonth\">"+(bf_Days-i+1)+"</a></td>";
			numRow++;
		}
		//alert(Month_Day);
		for (j=1; j<=Month_Day; j++)
		{
			//var dt = new Date(The_Year+"/"+The_Month, Month_Day).getDay());
			//alert(dt);
			if((day == j)&&(The_Year == year)&&(The_Month ==month))
			{
				showstr +="<td><a onclick=\"ShowCalendar("+j+")\" class=\"highLight today\">"+j+"</a></td>";
			}
			else
			{
				if(j<10)
				{
					showstr +="<td><a onclick=\"ShowCalendar("+j+")\" class=\"\">0"+j+"</a></td>";
				}
				else
				{
					showstr +="<td><a onclick=\"ShowCalendar("+j+")\" class=\"\">"+j+"</a></td>";
				}
			}
			
            numRow++;
            if (numRow == 7) {  //如果已经到一行（一周）了，重新创建tr
                numRow = 0;
				if((day <= (7+j))&&(day >= j)&&(The_Year == year)&&(The_Month == month))
				{
					showstr += "</tr><tr class=\"currentWeek\">";
				}
				else
				{
					showstr += '</tr><tr>';
				}
                
            } 
			
		}
		//alert("numRow"+numRow);
		if(numRow!=0)
		{
			var num = 7-numRow;
			for(i=1;i<=num;i++)
			{
				showstr +="<td><a onclick=\"\" class=\"otherMonth\">0"+i+"</a></td>";
				
			}
			showstr += '</tr>';
		}
		showstr += "</tbody></table>";
		showstr += "<div class=\"calendarTimeInput\">"+
                		"<span>"+
                    		"<input type=\"text\" onblur=\"this.parentNode.className=''\" onfocus=\"this.parentNode.className='focus'\" onkeyup=\"eXo.webui.UICalendar.setHour(this)\" value=\""+day+"\" maxlength=\"2\" class=\"InputTime\">:<input type=\"text\" onblur=\"this.parentNode.className=''\" onfocus=\"this.parentNode.className='focus'\" onkeyup=\"eXo.webui.UICalendar.setMinus(this)\" value=\"\" maxlength=\"2\" class=\"InputTime\">"+
                		"</span>"+
				"</div>";
		//alert(showstr);
		
		document.getElementById("cc").innerHTML = showstr;
		//document.getElementById("cc").style.visibility="visible";
	}
	function ShowCalender2(The_Year,The_Month)
	{
		
		var showstr;
		var Month_Day;
		var ShowMonth;
		var today;
		var Firstday;
		var bf_Days;
		var numRow = 0;
		Firstday = GetWeekday(The_Year,The_Month);
		bf_Days = new Date(The_Year, The_Month-1, 0).getDate();
		today = new Date();
		var year = today.getFullYear();      //本年
        var month = today.getMonth() + 1;    //本月
        var day = today.getDate();           //本日
		switch (The_Month)
		{
		case 1 : ShowMonth = "January"; Month_Day = 31; break;
		case 2 :
		ShowMonth = "February";
		if (RunNian(The_Year))
		Month_Day = 29;
		else
		Month_Day = 28;
		break;
		case 3 : ShowMonth = "March"; Month_Day = 31; break;
		case 4 : ShowMonth = "April"; Month_Day = 30; break;
		case 5 : ShowMonth = "May"; Month_Day = 31; break;
		case 6 : ShowMonth = "June"; Month_Day = 30; break;
		case 7 : ShowMonth = "July"; Month_Day = 31; break;
		case 8 : ShowMonth = "August"; Month_Day = 31; break;
		case 9 : ShowMonth = "September"; Month_Day = 30; break;
		case 10 : ShowMonth = "October"; Month_Day = 31; break;
		case 11 : ShowMonth = "November"; Month_Day = 30; break;
		case 12 : ShowMonth = "December"; Month_Day = 31; break;
		
		}
		showstr = "";
		showstr = "<h5 class=\"title clearfix\">"+
				     "<a data-original-title=\"Previous Month\" class=\"actionIcon pull-left\" onclick=\"prevmonth2("+The_Year+","+The_Month+")\" rel=\"tooltip\" data-placement=\"right\">"+
    			       "<i class=\"uiIconMiniArrowLeft uiIconLightGray\"></i>"+
					 "</a>"+
				     "<span id=\"dateYM2\">"+ShowMonth+", "+The_Year+"</span>"+
					 "<a data-original-title=\"Next Month\" class=\"actionIcon pull-right\" onclick=\"nextmonth2("+The_Year+","+The_Month+")\" rel=\"tooltip\" data-placement=\"right\">"+
   					   "<i class=\"uiIconMiniArrowRight uiIconLightGray\" style=\"position:relative; top:-14px;\"></i>"+
					 "</a>"+
				  "</h5>"+
				  "<table class=\"weekList\">"+
                		"<tbody>"+
                    		"<tr>"+
                               "<td><font color=\"red\">S</font></td>"+
							   "<td>M</td>"+
							   "<td>T</td>"+
							   "<td>W</td>"+
							   "<td>T</td>"+
							   "<td>F</td>"+
							   "<td>S</td>"+
							"</tr>"+
						"</tbody>"+
					"</table>"+
					"<hr>"+
            		"<table cellspacing=\"0\" cellpadding=\"0\" class=\"weekDays\">"+
					"<tbody>";
					
		//alert(Firstday);
		if((day <= (7-Firstday))&&(The_Year == year)&&(The_Month == month))
		{
			showstr += "<tr class=\"currentWeek\">";
		}
		else
		{
			showstr += "<tr>";
		}
		for (i = Firstday; i >= 1; i--)
		{/**/
			showstr +="<td><a onclick=\"\" class=\"otherMonth\">"+(bf_Days-i+1)+"</a></td>";
			numRow++;
		}
		//alert(Month_Day);
		for (j=1; j<=Month_Day; j++)
		{
			//var dt = new Date(The_Year+"/"+The_Month, Month_Day).getDay());
			//alert(dt);
			if((day == j)&&(The_Year == year)&&(The_Month ==month))
			{
				showstr +="<td><a onclick=\"ShowCalendar2("+j+")\" class=\"highLight today\">"+j+"</a></td>";
			}
			else
			{
				if(j<10)
				{
					showstr +="<td><a onclick=\"ShowCalendar2("+j+")\" class=\"\">0"+j+"</a></td>";
				}
				else
				{
					showstr +="<td><a onclick=\"ShowCalendar2("+j+")\" class=\"\">"+j+"</a></td>";
				}
			}
			
            numRow++;
            if (numRow == 7) {  //如果已经到一行（一周）了，重新创建tr
                numRow = 0;
				if((day <= (7+j))&&(day >= j)&&(The_Year == year)&&(The_Month == month))
				{
					showstr += "</tr><tr class=\"currentWeek\">";
				}
				else
				{
					showstr += '</tr><tr>';
				}
                
            } 
			
		}
		//alert("numRow"+numRow);
		if(numRow!=0)
		{
			var num = 7-numRow;
			for(i=1;i<=num;i++)
			{
				showstr +="<td><a onclick=\"\" class=\"otherMonth\">0"+i+"</a></td>";
				
			}
			showstr += '</tr>';
		}
		showstr += "</tbody></table>";
		showstr += "<div class=\"calendarTimeInput\">"+
                		"<span>"+
                    		"<input type=\"text\" onblur=\"this.parentNode.className=''\" onfocus=\"this.parentNode.className='focus'\" onkeyup=\"eXo.webui.UICalendar.setHour(this)\" value=\""+day+"\" maxlength=\"2\" class=\"InputTime\">:<input type=\"text\" onblur=\"this.parentNode.className=''\" onfocus=\"this.parentNode.className='focus'\" onkeyup=\"eXo.webui.UICalendar.setMinus(this)\" value=\"\" maxlength=\"2\" class=\"InputTime\">"+
                		"</span>"+
				"</div>";
		//alert(showstr);
		document.getElementById("cc2").innerHTML = showstr;
		
	}
	function ShowCalender3(The_Year,The_Month)
	{
		var showstr;
		var Month_Day;
		var ShowMonth;
		var today;
		var Firstday;
		var bf_Days;
		var numRow = 0;
		Firstday = GetWeekday(The_Year,The_Month);
		bf_Days = new Date(The_Year, The_Month-1, 0).getDate();
		today = new Date();
		var year = today.getFullYear();      //本年
        var month = today.getMonth() + 1;    //本月
        var day = today.getDate();           //本日
		switch (The_Month)
		{
		case 1 : ShowMonth = "January"; Month_Day = 31; break;
		case 2 :
		ShowMonth = "February";
		if (RunNian(The_Year))
		Month_Day = 29;
		else
		Month_Day = 28;
		break;
		case 3 : ShowMonth = "March"; Month_Day = 31; break;
		case 4 : ShowMonth = "April"; Month_Day = 30; break;
		case 5 : ShowMonth = "May"; Month_Day = 31; break;
		case 6 : ShowMonth = "June"; Month_Day = 30; break;
		case 7 : ShowMonth = "July"; Month_Day = 31; break;
		case 8 : ShowMonth = "August"; Month_Day = 31; break;
		case 9 : ShowMonth = "September"; Month_Day = 30; break;
		case 10 : ShowMonth = "October"; Month_Day = 31; break;
		case 11 : ShowMonth = "November"; Month_Day = 30; break;
		case 12 : ShowMonth = "December"; Month_Day = 31; break;
		
		}
		showstr = "";
		showstr = "<h5 class=\"title clearfix\">"+
				     "<a data-original-title=\"Previous Month\" class=\"actionIcon pull-left\" onclick=\"prevmonth3("+The_Year+","+The_Month+")\" rel=\"tooltip\" data-placement=\"right\">"+
    			       "<i class=\"uiIconMiniArrowLeft uiIconLightGray\"></i>"+
					 "</a>"+
				     "<span id=\"dateYM3\">"+ShowMonth+", "+The_Year+"</span>"+
					 "<a data-original-title=\"Next Month\" class=\"actionIcon pull-right\" onclick=\"nextmonth3("+The_Year+","+The_Month+")\" rel=\"tooltip\" data-placement=\"right\">"+
   					   "<i class=\"uiIconMiniArrowRight uiIconLightGray\" style=\"position:relative; top:-14px;\"></i>"+
					 "</a>"+
				  "</h5>"+
				  "<table class=\"weekList\">"+
                		"<tbody>"+
                    		"<tr>"+
                               "<td><font color=\"red\">S</font></td>"+
							   "<td>M</td>"+
							   "<td>T</td>"+
							   "<td>W</td>"+
							   "<td>T</td>"+
							   "<td>F</td>"+
							   "<td>S</td>"+
							"</tr>"+
						"</tbody>"+
					"</table>"+
					"<hr>"+
            		"<table cellspacing=\"0\" cellpadding=\"0\" class=\"weekDays\">"+
					"<tbody>";
					
		//alert(Firstday);
		if((day <= (7-Firstday))&&(The_Year == year)&&(The_Month == month))
		{
			showstr += "<tr class=\"currentWeek\">";
		}
		else
		{
			showstr += "<tr>";
		}
		for (i = Firstday; i >= 1; i--)
		{/**/
			showstr +="<td><a onclick=\"\" class=\"otherMonth\">"+(bf_Days-i+1)+"</a></td>";
			numRow++;
		}
		//alert(Month_Day);
		for (j=1; j<=Month_Day; j++)
		{
			//var dt = new Date(The_Year+"/"+The_Month, Month_Day).getDay());
			//alert(dt);
			if((day == j)&&(The_Year == year)&&(The_Month ==month))
			{
				showstr +="<td><a onclick=\"ShowCalendar3("+j+")\" class=\"highLight today\">"+j+"</a></td>";
			}
			else
			{
				if(j<10)
				{
					showstr +="<td><a onclick=\"ShowCalendar3("+j+")\" class=\"\">0"+j+"</a></td>";
				}
				else
				{
					showstr +="<td><a onclick=\"ShowCalendar3("+j+")\" class=\"\">"+j+"</a></td>";
				}
			}
			
            numRow++;
            if (numRow == 7) {  //如果已经到一行（一周）了，重新创建tr
                numRow = 0;
				if((day <= (7+j))&&(day >= j)&&(The_Year == year)&&(The_Month == month))
				{
					showstr += "</tr><tr class=\"currentWeek\">";
				}
				else
				{
					showstr += '</tr><tr>';
				}
                
            } 
			
		}
		//alert("numRow"+numRow);
		if(numRow!=0)
		{
			var num = 7-numRow;
			for(i=1;i<=num;i++)
			{
				showstr +="<td><a onclick=\"\" class=\"otherMonth\">0"+i+"</a></td>";
				
			}
			showstr += '</tr>';
		}
		showstr += "</tbody></table>";
		showstr += "<div class=\"calendarTimeInput\">"+
                		"<span>"+
                    		"<input type=\"text\" onblur=\"this.parentNode.className=''\" onfocus=\"this.parentNode.className='focus'\" onkeyup=\"eXo.webui.UICalendar.setHour(this)\" value=\""+day+"\" maxlength=\"2\" class=\"InputTime\">:<input type=\"text\" onblur=\"this.parentNode.className=''\" onfocus=\"this.parentNode.className='focus'\" onkeyup=\"eXo.webui.UICalendar.setMinus(this)\" value=\"\" maxlength=\"2\" class=\"InputTime\">"+
                		"</span>"+
				"</div>";
		//alert(showstr);
		document.getElementById("cc3").innerHTML = showstr;
	}
	function nextmonth(The_Year,The_Month) //下一月
	{
		if (The_Month==12)
		{	
			ShowCalender(The_Year+1,1);
		}
		else 
		{
			ShowCalender(The_Year,The_Month+1);
		}
		
	}
	
	function prevmonth(The_Year,The_Month) //上一月
	{
		if (The_Month==1)
		{
			ShowCalender(The_Year-1,12); 
		}
	 	else
		{
			ShowCalender(The_Year,The_Month-1);
		}
	}
	
	function prevyear(The_Year,The_Month) //上一年
	{
	 	ShowCalender(The_Year-1,The_Month);
	}
	
	function nextyear(The_Year,The_Month) //下一年
	{
	 	ShowCalender(The_Year+1,The_Month);
	}
	
	function nextmonth2(The_Year,The_Month) //下一月
	{
		if (The_Month==12)
		{	
			ShowCalender2(The_Year+1,1);
		}
		else 
		{
			ShowCalender2(The_Year,The_Month+1);
		}
		
	}
	
	function prevmonth2(The_Year,The_Month) //上一月
	{
		if (The_Month==1)
		{
			ShowCalender2(The_Year-1,12); 
		}
	 	else
		{
			ShowCalender2(The_Year,The_Month-1);
		}
	}
	
	
	function nextmonth3(The_Year,The_Month) //下一月
	{
		if (The_Month==12)
		{	
			ShowCalender3(The_Year+1,1);
		}
		else 
		{
			ShowCalender3(The_Year,The_Month+1);
		}
		
	}
	
	function prevmonth3(The_Year,The_Month) //上一月
	{
		if (The_Month==1)
		{
			ShowCalender3(The_Year-1,12); 
		}
	 	else
		{
			ShowCalender3(The_Year,The_Month-1);
		}
	}