//为“testButton”按钮增加监听事件
document.getElementById("testButton").addEventListener("click",setExtensionID)

function setExtensionID(){
    let input_id = document.getElementById("extension_id_input").value;
    document.getElementById("test1").src="chrome-extension://"+input_id+"/images/test1.png";
    document.getElementById("test4").src="chrome-extension://"+input_id+"/images/test4.png";
}