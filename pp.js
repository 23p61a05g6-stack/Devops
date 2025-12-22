 var http=require(res);
 http.createServerRequest(function(req,res));
 {
 res.writeHead(200,{Content type='html/text'});
 res.write("this is a node js program with pre and post url");
 res.write(url);
 res.end();
 })listen(3000);
