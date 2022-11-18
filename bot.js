const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName('container')

let init = 0

const botSay = (data) => {
    return[
        "Halo, perkenalkan nama saya QnABOT. siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia} tahun, hobi kamu apa ya?`,
        `wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `Ohhh ${data?.pacar}, ya udah kalo gitu. Udahan yah?`
    ]
}

    pertanyaan.innerHTML = botSay()[0]

    let usersData = []

function botStart(){
    if(jawaban.value.length < 1){
        return alert("Silahkan isi jawaban dulu")
    }
    init++
    if (init === 1){
        botDelay({nama : jawaban.value})
    }else if(init === 2){
        botDelay({usia : jawaban.value})
    }else if(init === 3){
        botDelay({hobi : jawaban.value})
    }else if(init === 4){
        botDelay({pacar : jawaban.value})
    }else if(init === 5){
        finishing()
    }else{
        botEnd()
    }
}

function botDelay(jawabanUser){
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    // console.log({usersData : usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        jawaban.value = ""
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1250])
    usersData.push(jawaban.value)
}

function finishing() {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = `Thank you ya ${usersData[0]} dah maen ke QnABOT,
        kali-kali kita main ${usersData[2]} bareng ya!`
        jawaban.value = "siap thanks juga"
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1250])
}

function botEnd(){
    alert(`Terimakasih ${usersData[0]} sudah berkunjung, anda akan diarahkan ke halaman utama`)
    window.location.reload()
}