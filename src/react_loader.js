

function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function run(){
        if(array.length!=0){
            loader(array.shift(), run);
        }else{
            callback && callback();
        }
    })();
}

loadScripts([
    "https://unpkg.com/react@17/umd/react.development.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.development.js",
 ],function(){

    let divElement = document.createElement('div')
    divElement.setAttribute("id", "web_chat_container");
    
    // // create text node
    let divElementText = document.createTextNode('Dynamically created div element')
    // // append text node to div
    divElement.appendChild(divElementText)
    // append div element to document
    document.body.appendChild(divElement)
    
    // insert app
    require('./add_to_dom');

 }
)