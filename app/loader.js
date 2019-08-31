var folder = folder_sekarang()

var modul = [
    {
        nama_modul : '/module/core.js'
    }
]

function load(){
    return new Promise(resolve => {
        setTimeout(() => {
            modul.forEach(element => {
                let script = document.createElement('script');
                script.src = folder + element.nama_modul;
                document.body.appendChild(script)
                resolve('ok')
            }); 
        }, 1)
    })
}

async function loader(){
    await load()
}

loader()