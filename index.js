let count=0
function increment(){
    count = count + 1
    document.getElementById("count").textContent=count
}
function save(){
    document.getElementById("ahmed").textContent += count + '-'
    document.getElementById("count").innerText = 0
}
function reset()
{
    document.getElementById("ahmed").innerText = ""
    count=0
}


//innertext    مش بتعتبره نص لوحده ومش بتحط مسافات
//textcontent بتتعتبره نص لوحده وبتحط قبله وبعده مسافه
