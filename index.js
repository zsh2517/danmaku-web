function redirect() {
    let userid = document.getElementById("userid").value;
    let roomid = document.getElementById("roomid").value;
    if(roomid.trim() == "") {
        alert("房间号不能为空哦~");
        return;
    }
    if(userid.trim() == "") {
        alert("用户名不能为空哦~");
        return;
    }
    // if(!docCookies.hasItem("userid")) {
        docCookies.setItem("userid", userid);
    // } 
    location.href = "send.html?roomid="+roomid;
}