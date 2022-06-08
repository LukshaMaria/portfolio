function validateSize(fileInput, size) {
    var fileObj, oSize;
    if (typeof ActiveXObject == "function") {
        fileObj = (new ActiveXObject("Scripting.FileSystemObject")).getFile(fileInput.value);
    } else {
        fileObj = fileInput.files[0];
    }

    oSize = fileObj.size;
    if (oSize > size * 1024) {
        return false
    }
    return true;
}

function validateException(fileInput) {
    var textExtensions = "/(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i";
    var imgExtensions = "/(\.png|\.svg|\.jpg|\.jpeg|\.tiff|\.bmp|\.gif)$/i";

    if (!textExtensions.exec(fileInput.value)) {
        return false;
    }
    if (!imgExtensions.exec(fileInput.value)) {
        return false;
    }
}