"use strict";
function init() {
    if (!docCookies.hasItem("stuid")) {
        alert("请先输入学号~");
        // redirect 
        location.href = "index.html";
    }
    document.getElementById("stuid").value = docCookies.getItem("stuid");
}

function submit() {
    let text = document.getElementById("text").value.trim();
    if (text == '') {
        alert("弹幕内容为空~");
        return;
    }
    let stuid = docCookies.getItem("stuid");
    let type = $('input[name=type]:checked').val();
    let color = $('input[name=color]').val();
    let fontsize = $('input[name=fontsize]:checked').val();
    text = Base64.encode(text);
    $.post(BACKEND_URL, {
        stuid: stuid,
        type: type,
        color: color,
        fontsize: fontsize,
        text: text
    }, (res) => {
        res = JSON.parse(res);
        console.log(res);
        if (res.status == "OK") {
            alert("弹幕发送成功");
        } else {
            alert("弹幕发送失败...原因如下\n" + res.message);
        }
    });

}