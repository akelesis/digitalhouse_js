function searchValue(value, field, json) {

    for (let i = 0; i < json.length; i++) {
        if (json[i].field == value) {
            console.log("Deu match");
        }
        else {
            console.log("Não deu match");
        }
    }
}
