const http=require('http');

const server=http.createServer(callBackFuncton);
 
let a=[];
function callBackFuncton(req,res){
    if(req.method=='POST'){
        a.push(1);
        res.write(JSON.stringify(a));
    }
    else if(req.method=='PUT'){
        a[0]=2;
        
    }
    else if(req.method=='GET'){
      
    }
    else if(req.method=='DELETE'){
        a.pop();

    }
    res.end();
}

server.listen(3009,function(){
    console.log('Server started');
});