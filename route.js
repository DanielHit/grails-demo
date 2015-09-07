

function route (handler, pathName, response, postData){
    // 类型匹配
    console.log("route to be handlered");

    if(typeof handler[pathName] === 'function'){
        handler[pathName](response, postData);    // 作为函数来进行处理
    }else{
        console.log("wrong function : no pathName");
    }
}

exports.route = route;  // 代表作为route被处理
