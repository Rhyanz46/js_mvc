function template_loader(nama){
    let re = /(?:\.([^.]+))?$/;
    let extensi = re.exec(nama)[1]; 
    if (extensi == 'ian'){
        return true
    }
    console.log(`extensi dari template yang anda masukkan salah : %c${nama}`, 'font-size: 20px;background: red; color: white');
    return false
}

async function render(nama_template){
    if (await template_loader(nama_template)){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = await function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                let new_dom = document.createElement('div');
                new_dom.innerHTML = xmlHttp.responseText;
                dom_app.append(new_dom);
                // dom_app.append(test)
                // dom_app.innerHTML = xmlHttp.responseText;
            }
        };
        xmlHttp.open("GET", root + '/templates' + nama_template, true); // true for asynchronous
        xmlHttp.send(null);
    }
}

switch(window.location.pathname){
    case '/':
        render('/index.ian');
        break;
    case '/hello':
        render('/bio.ian');
        break;
    default:
        render('/404.ian')
        break;
}

setTimeout(()=>{
    var waw = dom_app.getElementsByTagName("script");
    // console.log(waw[0]);
    document.body.append(waw[0])
}, 200)