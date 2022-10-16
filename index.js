 const address = {
    street: "17 simeon Street",
    city: "okota-Lagos",
    zip: 100126,
};

function showAddress(parameter) {
    for (let address in parameter) {
        console.log(address + " : " + parameter[address]);
    }
}
