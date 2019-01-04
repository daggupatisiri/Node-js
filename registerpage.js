
var http_util = require('../util/http_util');

exports.showRegisterPage = function (req, resp) {
    buildRegisterPage(req, resp, "");
}

exports.registerSubmit = function (req, resp) {

    resp.writeHead(200, {'Content-Type':'text/html'});

    var page_title = "Register Success";

    var page_menu = http_util.pageMenu();

    var page_content = "User info registration success.";

    var page_data = http_util.buildPage(page_title, page_menu, page_content);

    resp.end(page_data);
}

function buildRegisterPage(req, resp, error_message) {

    http_util.getUrlParams(req, resp);

    var page_title = "Register Page";

    var page_menu = http_util.pageMenu();

   // var register_form = "<h3>Input user data to register.</h3>";
     
    <h1><a href="loginpage.js"></a></h1>;  


    if(error_message!=='' && error_message!==null && error_message!==undefined)
    {
        register_form += "<font color=red>" + error_message + "</font><br/><br/>>";
    }

    register_form += "<form method='post' action='/register-submit'>" +
        "First Name : <input type='text' name='first_name' value='{first_name}'/><br/><br/>" +
        "Middle Name : <input type='text' name='middle_name' value='{middle_name}'/><br/><br/>" +
        "Last Name : <input type='text' name='last_name' value='{last_name}'/><br/><br/>" +
        "Email :<input type='text' name='email' value='{email}'/><br/><br/>" +
        "Mobile Number :<input type='mobilenumber' name='mobile_number' value='{mobile_number}'/><br/><br/>" +
        "Password :<input type='password' name='password' value='{password}'/><br/><br/>" +
        "Confirm Password :<input type='password' name='password' value='{password}'/><br/><br/>" +
        "<input type='submit' value='Register'/><br/><br/>" +
        "</form>";

    if(req.user_name==null || req.user_name==undefined)
    {
        req.user_name = '';
    }

    if(req.password==null || req.password==undefined)
    {
        req.password = '';
    }

    if(req.email==null || req.email==undefined)
    {
        req.email = '';
    }
    register_form = register_form.replace("{user_name}", req.user_name);

    register_form = register_form.replace("{password}", req.password);

    register_form = register_form.replace("{email}", req.email);

    var register_page_data = http_util.buildPage(page_title, page_menu, register_form);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(register_page_data);
}