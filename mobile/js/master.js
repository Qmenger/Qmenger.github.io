function btnCall()
{
	var msgtitle=document.getElementById("msg_id");
	var calltitle=document.getElementById("call_id");
	msgtitle.className="hide";//当点击电话的时候msgtitle的className只有hide样式
	calltitle.className="msglist";//calltitle的时候calltitle的className只有msglist样式
}
function btnMsg()
{
	var msgtitle=document.getElementById("msg_id");
	var calltitle=document.getElementById("call_id");
	msgtitle.className="msglist";
	calltitle.className="hide";
}
