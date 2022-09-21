const main = document.querySelector(".main");
let qrInput =  document.querySelector(".data");
let generateBtn =  document.querySelector(".submit");
let qrImg = document.querySelector(".qr-code img")

//When button is clicked
generateBtn.addEventListener("click" , () => {
    const qrValue = qrInput.value;
    if(!qrValue){
        return;
    }
    generateBtn.innerText = "Generating QR Code ..."
    main.style.height = "550px";
    // console.log(qrValue);
    // TODO: 
    //getting qr code from the text by calling qr code api and passing the api returned image to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.style.display = "block";
    qrImg.addEventListener("load" , ()=>{
        main.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    })

    qrInput.addEventListener("keyup",()=>{
        if(!qrInput.value){
            qrImg.style.display = "none";
            main.style.height = "300px"
            main.classList.remove("active");
        }
    })
    
});

