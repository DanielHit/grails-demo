

function route (handler, pathName){
    // 类型匹配
    console.log("route to be handlered");

    if(typeof handler[pathName] === 'function'){
        return handler[pathName]();    // 作为函数来进行处理
    }else{
        console.log("wrong function : no pathName");
        return "something error"
    }
}

exports.route = route;  // 代表作为route被处理
