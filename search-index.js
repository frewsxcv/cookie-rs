var searchIndex = {};
searchIndex["cookie"] = {"doc":"","items":[[3,"CookieJar","cookie","A jar of cookies for managing a session",null,null],[3,"Cookie","","",null,null],[12,"name","","",0,null],[12,"value","","",0,null],[12,"expires","","",0,null],[12,"max_age","","",0,null],[12,"domain","","",0,null],[12,"path","","",0,null],[12,"secure","","",0,null],[12,"httponly","","",0,null],[12,"custom","","",0,null],[3,"AttrVal","","",null,null],[12,"0","","",1,null],[12,"1","","",1,null],[11,"new","","Creates a new empty cookie jar with the given signing key.",2,null],[11,"add_original","","Adds an original cookie from a request.",2,{"inputs":[{"name":"cookiejar"},{"name":"cookie"}],"output":null}],[11,"add","","Adds a new cookie to this cookie jar.",2,{"inputs":[{"name":"cookiejar"},{"name":"cookie"}],"output":null}],[11,"remove","","Removes a cookie from this cookie jar.",2,{"inputs":[{"name":"cookiejar"},{"name":"str"}],"output":null}],[11,"find","","Finds a cookie inside of this cookie jar.",2,{"inputs":[{"name":"cookiejar"},{"name":"str"}],"output":{"name":"option"}}],[11,"signed","","Creates a child signed cookie jar.",2,{"inputs":[{"name":"cookiejar"}],"output":{"name":"cookiejar"}}],[11,"encrypted","","Creates a child encrypted cookie jar.",2,{"inputs":[{"name":"cookiejar"}],"output":{"name":"cookiejar"}}],[11,"permanent","","Creates a child jar for permanent cookie storage.",2,{"inputs":[{"name":"cookiejar"}],"output":{"name":"cookiejar"}}],[11,"delta","","Calculates the changes that have occurred to this cookie jar over time,\nreturning a vector of `Set-Cookie` headers.",2,{"inputs":[{"name":"cookiejar"}],"output":{"name":"vec"}}],[11,"iter","","Return an iterator over the cookies in this jar.",2,{"inputs":[{"name":"cookiejar"}],"output":{"name":"iter"}}],[11,"fmt","","",0,{"inputs":[{"name":"cookie"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"cookie"}],"output":{"name":"cookie"}}],[11,"eq","","",0,{"inputs":[{"name":"cookie"},{"name":"cookie"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"cookie"},{"name":"cookie"}],"output":{"name":"bool"}}],[11,"new","","",0,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"cookie"}}],[11,"parse","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"pair","","",0,{"inputs":[{"name":"cookie"}],"output":{"name":"attrval"}}],[11,"fmt","","",1,{"inputs":[{"name":"attrval"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"cookie"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_str","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"Cookie"],[3,"AttrVal"],[3,"CookieJar"]]};
initSearch(searchIndex);
