document.getElementById('submit').onclick = function () {
    clearErrors();
    let name = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let flag = true;

    if (name.length == 0) {
        document.getElementById('error-name-1').style.display = 'block';
        flag = false;
    }

    if (name.indexOf('1') > -1 || name.indexOf('2') > -1 || name.indexOf('3') > -1 || name.indexOf('4') > -1 || name.indexOf('5') > -1 || name.indexOf('6') > -1 || name.indexOf('7') > -1 || name.indexOf('8') > -1 || name.indexOf('9') > -1 || name.indexOf('0') > -1) {
        document.getElementById('error-name-2').style.display = 'block';
        flag = false;
    }

    if (title.trim() === "") {
        document.getElementById('error-title').style.display = 'block';
        flag = false;
    }

    if (content.length <= 9) {
        document.getElementById('error-content').style.display = 'block';
        flag = false;
    }
    return flag;
}

function clearErrors()
{
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++)
    {
        errors[i].style.display = "none";
    }
}