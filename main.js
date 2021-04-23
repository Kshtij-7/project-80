function paraone() {
    var inputDataone = [];

    for(i = 1; i <= 6; i++){
        inputDataone.push(document.getElementById("p1_input" + i).value);
    }

    inputDataone.join(". ");
    inputDataonefinal = inputDataone.join(". ")
    document.getElementById("para1").innerHTML = inputDataonefinal;
}

function paratwo() {
    var inputDatatwo = [];

    for(i = 1; i <= 6; i++){
        inputDatatwo.push(document.getElementById("p2_input" + i).value);
    }

    inputDatatwo.join(". ");
    inputDatatwofinal = inputDatatwo.join(". ");
    document.getElementById("para2").innerHTML = inputDatatwofinal;
}