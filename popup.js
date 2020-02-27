function saveHandler() {
    var url = document.getElementById("url").value
    var interval = document.getElementById("url").value
    chrome.runtime.sendMessage({directive:'save-event', reporturl: url, reportinterval: interval }, function(){
        console.log("saveHandler");
        
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('save-button').addEventListener('click', saveHandler);

})