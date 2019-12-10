"use strict";

function redirect() {
    let stuid = document.getElementById("stuid").value;
    if(stuid.trim() == "") {
        alert("请输入学号再试试~");
        return;
    }
    if(!docCookies.hasItem("stuid")) {
        docCookies.setItem("stuid", stuid);
    }
    location.href = "send.html";
}