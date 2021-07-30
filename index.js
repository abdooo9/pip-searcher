const fetch = require('node-fetch')
require('colors')
exports.search = async function (arg) {
    if (!arg) {
        throw Error("None arg for search".red);
    } else {
        let url = `https://pypi.org/pypi/${encodeURIComponent(arg.toLowerCase())}/json`
        let data = await fetch(url).then(res => res.json());
        if (!data) {
            throw Error("Can't find this package in PyPI");
        } else {
            return data;
        }
    }
}