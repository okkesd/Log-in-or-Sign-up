function signUp() { //dont have an account
    window.location.assign('./sign-up.html')
}

function signİn() { //back to sign in page
    window.location.assign('./')
}

function showMe() { // show its info
    var head = document.createElement('h2')
    head.textContent = 'Welcome' 
    var div = document.querySelector("div")
    div.appendChild(head)
    let a = window.localStorage.getItem('isim')
    let b = window.localStorage.getItem('sifre')
    let bilgiler = document.createElement('strong')
    bilgiler.textContent = a + " " + b
    div.appendChild(bilgiler)
}



function geriDön() { //after "dont have an account" go back to sign in
    window.location.assign('./')
    //window.localStorage.removeItem('isim')
    //window.localStorage.removeItem('sifre')
}
var arr = []

function tikla() { //get the name and password in array
    const form = document.querySelector('form')
    let name = form.elements.name.value
    let password = form.elements.password.value
    function retArr() {
        arr.push({names: name,passwords:password})
    }
    retArr()
    function yaz() {
        console.log(arr)
    }
    return yaz;
}

// localstorage ile anahtar değer ayarlayarak veriyi sitede tutabiliriz. farklı sekmelerinde tututlabiliyor mu araştır
// localstorage e obje gönderirken json.stringfy(OBJE) ile çevirirp gönderilir
// json ile stringe çevirilen objeyi tekrar döndürmek için json.parse() kullanılır
// SİGN-İN
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = form.elements.name.value
    let password = form.elements.password.value 
    // database deki verilerle bu verileri karşılaştır ve uyuşuyorsa
    // istenilen sekmeye ilerle 
    let isim = window.localStorage.getItem('isim')
    let sifre = window.localStorage.getItem('sifre') 
    if (isim==name && password==sifre) {
        window.location.assign('./print-text.html')
    } else if (isim==name && password!==sifre) {
        let label = document.querySelector('#password')
        label.textContent += " (şifreniz sistemde kayıtlı değil)"
    } else if (isim!==name && password==sifre) {
        let label = document.querySelector('#ad')
        // media ile text'in colorunu değiştirebilirsin
        label.textContent += " (adınız sistemde kayıtlı değil)"
    } else {
        let formCheck = document.querySelector('form')
        form.textContent = "ad ve password hatalı"
        
    }
    
    
})



function yazdir() {
    let a = window.localStorage.getItem('isim')
    let b = window.localStorage.getItem('sifre')
    console.log(a+" "+b)
}

const formUp = document.querySelector("form")
form.addEventListener("submit", (eventUp)=> {
    eventUp.preventDefault();
    let nameUp = form.elements.kullaniciadi.value
    let passwordUp = form.elements.sifreup.value
    let numberUp = form.elements.kullanıcıid.value
    let numberUpCheck = window.localStorage.getItem('id')
    if(numberUp==numberUpCheck) {
        let uyari = document.createElement('strong')
        uyari.textContent = "bu kullanıcı numarası daha önce kaydedilmiştir"
        let divUp = document.querySelector('.card-up')
        uyari.style.color="green"
        uyari.style.backgroundColor="rgb(237, 180, 237)"
        divUp.appendChild(uyari)
    } else {
    window.localStorage.setItem('isim', nameUp)
    window.localStorage.setItem('sifre',passwordUp)
    window.localStorage.setItem('id', numberUp)
    window.location.assign('./')
    }
    
})

function refreshAgain() {
    location.reload();
}
