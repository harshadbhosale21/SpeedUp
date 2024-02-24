
// ------------------------------ Form Validations -----------------------------------
const createUserId = () => {

    var mobileNo = document.getElementById("number").value;
    var Bdate = document.getElementById("date").value;

    var Bdate_prefix = Bdate.substring(0, 4);
    var mobile_prefix = mobileNo.substring(mobileNo.length - 4);

    var userId = Bdate_prefix + mobile_prefix;
    var user_Pass = UserPassword();

    document.getElementById("userId").value = userId;


}

const UserPassword = () => {
    let fname = document.getElementById("fname").value;
    let mobileNo = document.getElementById("number").value;

    let fname_prefix = fname.substring(0, 4);
    mobile_prefix = mobileNo.substring(0, 4);

    let Password = fname_prefix + mobile_prefix;
    document.getElementById("Password").value = Password;
}

//---------------------------------- Page Navigations --------------------------------------------

function navigateHtml() {
    window.location.href = "./HTML.html";
}
function navigateJS() {
    window.location.href = "./JS.html";
}
function navigateREACT() {
    window.location.href = "./REACT.html";
}
function navigateTechMH() {
    window.location.href = "./Callwise_Status.html"
}
function navigateMock() {
    window.location.href = "./mock.html";
}
function navigateBack() {
    window.location.href = "./index.html#cont2"
}
function navigateMsgBack() {
    window.location.href = "./index.html"
}
function navigateShortButNotAttend() {
    window.location.href = "./Shortlist_but_not_attended.html"
}
function navigateShort() {
    window.location.href = "./Shortlisted.html"
}
function navigateApplied() {
    window.location.href = "./Call_Status.html"
}