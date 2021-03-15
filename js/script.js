function init() {

    //  VARIABLES:
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let ext = document.getElementById('ext');
    let email = document.getElementById('email');
    let department = document.getElementById('department');
    let submit = document.getElementById('empForm');
    let errMessageId = document.getElementById('errMessageId')
    let errMessageExt = document.getElementById('errMessageExt')

    // HANDLE SUBMIT:
    // 1st ERROR HANDLE
    submit.addEventListener('submit', e => errorHandle(e));

    const errorHandle = e => {
        e.preventDefault();
        if (id.value.length > 8) {
            errMessageId.innerHTML = '* Max Length is 8 characters';
        } else if (ext.value.length > 4) {
            errMessageId.innerHTML = '';
            errMessageExt.innerHTML = '* Max Length is 4 characters';
    } else {
            errMessageId.innerHTML = '';
            errMessageExt.innerHTML = '';
            // after checking the max length in the required fields: id and ext, proceed to submit
            handleSubmit();
        }
    }

    // 2nd DISPLAY INPUT VALUES
    const handleSubmit = () => {
        console.log(`ID: ${id.value} \nName: ${name.value} \nExtension: ${ext.value} \nEmail: ${email.value} \nDepartment: ${department.value}`)
    }
}

window.addEventListener("load", init);