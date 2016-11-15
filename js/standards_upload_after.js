
		var file_one=creat_file_upload();
		file_one.messages="messages";
		file_one.fileselect="fileselect";
		file_one.filedrag="filedrag";
		file_one.submitbutton="submitbutton";
		
		if (window.File && window.FileList && window.FileReader) {
			file_one.Init();
		}
		
		var _gauges = _gauges || [];
        (function() {
            var t = document.createElement('script');
            t.type = 'text/javascript';
            t.async = true;
            t.id = 'gauges-tracker';
            t.setAttribute('data-site-id', '4f0dc9fef5a1f55508000013');
            t.src = '//secure.gaug.es/track.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(t, s);
        })();
		
		
		
		$("#tcdPageCode").createPage({
        		pageCount:20,
        		current:1,
        		backFn:function(p){
					
			}
    	});
		
		function back()
		{
			window.location.href="standards.html";
		}
		
		
		
		window.onload=function()
		{
			/*
			var people=http_get("people");
			var department=http_get("department");
			
			$("#people").val(people);
			$("#department").val(department);
			*/
			$("#createDate").val(get_curr_time());
		}
		
		 /*
 	*	上传数据
 	*/
	var path;
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
	var path =get_url_base()+"/xml/add_standard_notes_xml.php";
	//alert(path);
	var notes_add=create_one_add(path);
	//alert("1234567");
	notes_add.form="form1";
	//alert(news_add.form);
	notes_add.check_fn=function()
	{
		//alert("aaaaaaaaaa");
		if($("#form1").find("input[name='standardName']").val()=="".trim())
		{
			alert("请输入标准名称！");
			return false;
		}
		if($("#form1").find("input[name='tag']").val()=="".trim())
		{
			alert("请输入标签")
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