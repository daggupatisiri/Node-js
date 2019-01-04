
var http_url = require('url');

exports.getUrlParams = function(req, resp){
   
   req.query_url = http_url.parse(req.url, true);
   
   console.log(req.query_url);
   
   req.user_name = req.query_url.user_name;
   
   req.password = req.query_url.password;
   
   req.email = req.query_url.email;
   
   req.mobile_phone = req.query_url.mobile_phone;
   
   req.home_phone = req.query_url.home_phone;
   
}

exports.pageMenu = function(){

   var ret = '<a href="/">Home</a>';
   ret += '&nbsp&nbsp';
   ret += '<a href="/register">Register</a>';
   ret += '&nbsp&nbsp';
   ret += '<a href="/login">Login</a>';
   
   return ret;
}

exports.buildPage = function(page_title, page_menu, page_content){
   
   var page_template = "<html>" +
         "<head>" +
         "<title>{page_title}</title>" +
         "</head>" +
         "<body>" +
         "<table>" +
         "<tr><td>{page_menu}</td></tr><tr>" +
         "<tr><td>{page_content}</td></tr>" +
         "</table>" +
         "</body></html>";
   
   var ret = page_template;
   ret = ret.replace("{page_title}", page_title, "g");
    ret = ret.replace("{page_title}", page_title, "g");
    ret = ret.replace("{page_menu}", page_menu, "g");
    ret = ret.replace("{page_content}", page_content, "g");

   return ret;
      
}

