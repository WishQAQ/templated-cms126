var issubmit = false;
$(document).ready(function () {	
	$("#ibtnReset").click(function(){
		var imputelement = $("#Resumefrom").find("input:text");
		var inputCount = imputelement.size();
		for (var j = 0; j < inputCount; j++) {
			imputelement.eq(j).val("");
		}

		imputelement = $("#Resumefrom textarea");
		inputCount = imputelement.size();
		for (var j = 0; j < inputCount; j++) {
			imputelement.eq(j).val("");
		}		
		
		//$("#Resumefrom").find("input:radio").eq(0).attr("checked","checked");		
	});

	function checkSubmitMobil(tel){ //验证电话号码
	  var reg=/^(0?1[358]\d{9})|((0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7})$/;
 		if(!reg.test(tel)){
            return false;
        }
		return true;
    } 

	function checkSubmitEmail(){ //验证电子邮箱		
		if(!$("#userEmail").val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){ 
			return false; 
		} 
		return true; 
    } 
	if ($("#Resumefrom").size() > 0) {
		$("#ibtnSubmit").click(function () {			
			 try {

				 if (trim($("#content").val()).length == 0 || trim($("#userPhone").val()).length == 0|| trim($("#title").val()).length == 0|| trim($("#userName").val()).length == 0) {
					alert("请填写完整信息");
					return false;
				}		
							
				if(!checkSubmitMobil($("#userPhone").val())){
					alert("手机号码输入不正确！");
					return false;
				}
				
				if(trim($("#userEmail").val()).length != 0){
					if(!checkSubmitEmail())
					{
						alert("电子邮箱信息有误！");
						return;
					}
				}
				
				
				$('body').append("<div id='solutionfromdiv' style='display:none;'></div>");
				$("#solutionfromdiv").html($("#Resumefrom").clone().attr("id", "solutionfromcopy"));
				var imputelement = $("#solutionfromcopy").find("input:text");
					var inputCount = imputelement.size();
					for (var j = 0; j < inputCount; j++) {
						imputelement.eq(j).replaceWith(imputelement.eq(j).val());
					}
					
					imputelement = $("#solutionfromcopy textarea");
					inputCount = imputelement.size();
					for (var j = 0; j < inputCount; j++) {
						imputelement.eq(j).replaceWith($("#Resumefrom textarea").eq(j).val());
					}
					
					/*imputelement = $("#solutionfromcopy input:radio");
					inputCount = imputelement.size();
					for(var i=0;i<inputCount;i++){
						if(imputelement.eq(i).attr("checked")=="checked" || imputelement.eq(i).attr("checked")=="true"){
							imputelement.eq(i).parent().html(imputelement.eq(i).val());
						}else{
							imputelement.eq(i).parent().html("");
						}
					}	*/				
					
					//var imputelement3=$("#solutionfromcopy select#sex").find("option:selected").text();
					var imputelement3=$("#sex option:selected").val();
					$("#sex option:selected").html(imputelement3);
					
					
					/*var imputelement=$("#solutionfromcopy select#number:selected").val();
					$("#solutionfromcopy select#number").parent().html(imputelement);*/
					
					/* imputelement = $("#solutionfromcopy").find("tr#noUpload")
					imputelement.remove(); */
										
					var imputelement1 = $("#solutionfromcopy").find("img")
					imputelement1.remove();
					var imputelement2 = $("#solutionfromcopy").find("#red")
					imputelement2.remove();
					var content = $("#solutionfromdiv").html();
				var title = $("#title").val();
				var link = "/IHandler/submitmsg.ashx?timespan=" + new Date().getTime();
				$.post(link, {
					"wid" : 1,
					"scid" : 24,
					"title" : escape(title),									
					"content" : escape(content)
				}, function (data) {
				//var data = eval("(" + data + ")");
				if (data.success == true) {						
						alert("提交成功");						
						var imputelement = $("#Resumefrom").find("input:text");
						var inputCount = imputelement.size();
						for (var j = 0; j < inputCount; j++) {
							imputelement.eq(j).val("");
						}

						imputelement = $("#Resumefrom textarea");
						inputCount = imputelement.size();
						for (var j = 0; j < inputCount; j++) {
							imputelement.eq(j).val("");
						}						
						
						//$("#Resumefrom").find("input:radio").eq(0).attr("checked","checked");
						
					} else {
						alert(data.error);
					}
				})
			} catch (e) {
				alert(e);
			} 
		})
	}
	
})

//-------------------------------------------------------------处理空格----------------------------------------------------------
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}