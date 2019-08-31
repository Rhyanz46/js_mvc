var dom_app;
var dom_script

folder_sekarang = function(){
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length-1];
    var scriptName = lastScript.src;
    return scriptName.split('/').slice(0, -1).join('/')
}

let root = folder_sekarang();

function mulai(){
    dom_app = document.querySelectorAll('[aplikasi]')[0];
    if (dom_app != undefined){
        dom_script = document.createElement('script');
        dom_script.src = root + '/loader.js';
        document.body.append(dom_script)
    }else{
        document.body.innerText = "linkan aplikasi anda dengan atribut 'aplikasi'"
    }
}

mulai()