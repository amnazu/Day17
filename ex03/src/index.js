const MY_CAR = {
    wheels: 4,
    cylinders: 4,
    size: 2.2
};

function main(myCar) {

    const { cylinders: Carcylinders, size: Carsize } = myCar;
    return { Carcylinders, Carsize };

}

console.log(main(MY_CAR));

module.exports = main;