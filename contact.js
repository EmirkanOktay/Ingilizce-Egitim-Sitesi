let name1 = document.querySelector("#name")
let phone = document.querySelector("#phone")
let mail = document.querySelector("#mail")
let textbox = document.querySelector("#text")
let button = document.querySelector("#button")

function checkMail(){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(mail).toLowerCase());
}

button.addEventListener("click",()=>{
    let getValueOfName = name1.value
    let getPhone = phone.value
    let getMail = mail.value
    let getText = textbox.value

    if(checkMail(getMail))
    {
        alert("Geçerli Bir Mail Adresi Girin")
    }
    else{
        console.log(`${getValueOfName}, ${getPhone}, ${getMail},${getText}`)
    } 
})