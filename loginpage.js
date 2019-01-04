
var http_util = require('../util/http_util');

exports.showLoginPage = function(req, resp){
   buildLoginPage(req, resp, '');
}

exports.checkLoginAccount = function(req, resp){

   var query_string = require('querystring');

    if (req.method == 'POST') {

       var req_body = '';

        req.on('data', function (data) {
            req_body += data;

            if (req_body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {

            var post_data = query_string.parse(req_body);

            var user_name = post_data["user_name"];

            var password = post_data["password"];

            if(user_name === 'jerry' && password === 'dev2qa.com')
            {
                resp.writeHead(200, {'Content-Type':'text/html'});

                var page_title = "Login success";

                var page_menu = http_util.pageMenu();

                var page_content = "<font color=red>User name and password is correct, login success.</font>";

                var login_success_page = http_util.buildPage(page_title, page_menu, page_content);

                resp.end(login_success_page);
            }else
            {
               
               req.user_name = user_name;
               req.password = password;

            buildLoginPage(req, resp, 'User name or password is not correct.')
            }
        });
    }
}

function buildLoginPage(req, resp, error_message) {

    http_util.getUrlParams(req, resp);

    var page_title = "Login Page";

    var page_menu = http_util.pageMenu();

   // var login_form = "<h3>Input user name and password to login.</h3>";

    if(error_message!=='' && error_message!==null && error_message!==undefined)
   {
      login_form += "<font color=red>" + error_message + "</font><br/><br/>";
   }

   login_form += "<form method='post' action='/check-login'>" +
        "Email Id : <input type='text' name='email_id' value='{email_id}'/><br/><br/>" +
        "Password :<input type='password' name='password' value='{password}'/><br/><br/>" +
        "<input type='submit' value='Login'/><br/><br/>" +
        "</form>";

    if(req.user_name==null || req.user_name==undefined)
    {
        req.user_name = '';
    }

    if(req.password==null || req.password==undefined)
    {
        req.password = '';
    }

    login_form = login_form.replace("{user_name}", req.user_name);

    login_form = login_form.replace("{password}", req.password);

    var login_page_data = http_util.buildPage(page_title, page_menu, login_form);

    resp.writeHead(200, {'Content-Type':'text/html'});

    resp.end(login_page_data);
}


