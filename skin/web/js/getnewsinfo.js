$(document).ready(function () {
	//if ($("#newsnext") != null) {
		Getnewsprenext();
	//}
})

function Getnewsprenext() {
	var link = "../../../IHandler/newsprenext.ashx?newsno=" + $("#thisaticle").html() + "&timespan=" + new Date().getTime();
	$.post(link, function (data) {
		var lhref=window.location.href;
var file = lhref.substring(0,lhref.lastIndexOf("_")+1);

		if (data["preid"] != "-1") {
			$("#newspre").attr("href", file  + data["preid"] + ".htm");
			//$("#newspre").html(data["pretitle"]);
		} else {
			$("#newspre").html("无").removeAttr("href");
		}
		
		if (data["nextid"] != "-1") {
			$("#newsnext").attr("href", file  + data["nextid"] + ".htm");
			//$("#newsnext").html(data["nexttitle"]);
		} else {
			$("#newsnext").html("无").removeAttr("href");
		}
		$("#readcount").html(data["readcount"]);
	})
}


$(document).ready(function () {
	if ($("#newsnext") != null) {
		Getnewsprenext();
	}
})

