module.exports = function getZerosCount(number) {
    let zeros = 0;
    while ((Math.floor(number / 5)) > 0) {
        number = Math.floor(number / 5);
        zeros += number;
    }
    return zeros;
}
