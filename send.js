"use strict";
function GetRequest() {   
    var url = location.search; //获取url中"?"符后的字串   
    var theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
       var str = url.substr(1);   
       strs = str.split("&");   
       for(var i = 0; i < strs.length; i ++) {   
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
       }   
    }   
    return theRequest;   
 } 

 function getQueryString(name) {
    var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

function init() {
    if (!docCookies.hasItem("userid")) {
        alert("请先输入学号~");
        // redirect 
        location.href = "index.html";
    }
    document.getElementById("title").innerText="弹幕发射器（房间号："+roomid+"）";
    document.getElementById("userid").value = docCookies.getItem("userid");
}

function submit() {
    let text = document.getElementById("text").value.trim();
    if (text == '') {
        alert("弹幕内容为空~");
        return;
    }
    let userid = docCookies.getItem("userid");
    let type = $('input[name=type]:checked').val();
    let color = $('input[name=color]').val();
    let fontsize = $('input[name=fontsize]:checked').val();
    text = Base64.encode(text);
    $.post(BACKEND_URL, {
        userid: userid,
        type: type,
        color: color,
        fontsize: fontsize,
        text: text
    }, (res) => {
        res = JSON.parse(res);
        console.log(res);
        if (res.status == "OK") {
            alert("弹幕发送成功");
            document.getElementById("text").innerText = "";
        } else {
            alert("弹幕发送失败...原因如下\n" + res.message);
        }
    });

}