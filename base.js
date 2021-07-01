const bdt = document.getElementById('number1')

bdt.addEventListener('input',function(event){
    let converted = event.target.value
    let gbp = document.getElementById('number2')
    gbp.value = converted * 0.0085
    let eur = document.getElementById('number3')
    eur.value = converted * 0.0099
    let cad = document.getElementById('number4')
    cad.value = converted * 0.015
    let aed = document.getElementById('number5')
    aed.value = converted * 0.043
})


const pound = document.getElementById('number2')

pound.addEventListener('input',function(event){
    let converted = event.target.value
    let bdt = document.getElementById('number1')
    bdt.value = converted * 117.45
    let eur = document.getElementById('number3')
    eur.value = converted * 1.17
    let cad= document.getElementById('number4')
    cad.value = converted * 1.71
    let aed = document.getElementById('number5')
    aed.value = converted * 5.08
})


const euro = document.getElementById('number3')

euro.addEventListener('input',function(event){
    let converted = event.target.value
    let bdt = document.getElementById('number1')
    bdt.value = converted * 100.66
    let gbp = document.getElementById('number2')
    gbp.value = converted * 0.86
    let cad = document.getElementById('number4')
    cad.value = converted * 1.47
    let aed = document.getElementById('number5')
    aed.value = converted * 4.36
})


const dollar = document.getElementById('number4')

dollar.addEventListener('input',function(event){
    let converted = event.target.value
    let bdt = document.getElementById('number1')
    bdt.value = converted * 68.43
    let gbp = document.getElementById('number2')
    gbp.value = converted * 0.58
    let eur = document.getElementById('number3')
    eur.value = converted * 0.68
    let aed = document.getElementById('number5')
    aed.value = converted * 2.96
})



const dirham = document.getElementById('number5')

dirham.addEventListener('input',function(event){
    let converted = event.target.value
    let bdt = document.getElementById('number1')
    bdt.value = converted * 23.11
    let gbp = document.getElementById('number2')
    gbp.value = converted * 0.20
    let eur = document.getElementById('number3')
    eur.value = converted * 0.23
    let cad = document.getElementById('number4')
    cad.value = converted * 0.34
})
