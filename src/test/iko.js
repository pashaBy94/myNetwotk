function bored(arr) {
    return arr.split('').filter(el => el < 4).map(el=>Number(el))
}
module.exports = bored;