
var http_util = require('../util/http_util');

exports.showHomePage = function buildLoginPage(req, resp, error_message) {

    var page_title = "Home Page";

    var page_menu = http_util.pageMenu();
   
    form += "<form method='post' action='/check-login'>" +
        "Email Id : <input type='text' name='email_id' value='{email_id}'/><br/><br/>" +
        "Password :<input type='password' name='password' value='{password}'/><br/><br/>" +
        "<input type='submit' value='Login'/><br/><br/>" +
        "<input type='submit' value='Register'/><br/><br/>"
        "</form>";
    <h1><a href="registration.js"> New Registration</a></h1>;
    var page_data = http_util.buildPage(page_title, page_menu, page_content);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(page_data);
}

