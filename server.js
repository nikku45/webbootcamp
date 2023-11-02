const http=require('http');

const server=http.createServer(callBackFuncton);
 
let a=[];
function callBackFuncton(req,res){
    const url=req.url;
    if(url=='/create'){
        a.push(1);
        res.write(JSON.stringify(a));
    }
    else if(url=='/update'){
        a[0]=2;
        res.write(JSON.stringify(a));
    }
    else if(url=='/read'){
        res.write(JSON.stringify(a));
    }
    else if(url=='/delete'){
        a.pop();

    }
    res.end();
}

server.listen(3008,function(){
    console.log('Server started');
});
