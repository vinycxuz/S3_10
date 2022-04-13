function positions (firstPlace, secondPlace, lastPlace) {
    podio = [firstPlace, secondPlace, lastPlace];

    let i = podio.indexOf("Daniel", 0)
    if (i == 1){
        podio[1] = firstPlace;
        podio[0] = secondPlace;
    } else if (i == 2){
        podio[2] = secondPlace;
        podio[1] = lastPlace;
    }
    return console.log(`1-Colocado: ${podio, [0]}, Segundo colocado ${podio, [1]}, Ultimo colocado ${podio, [2]}`)
};