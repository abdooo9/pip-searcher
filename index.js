const fetch = require('node-fetch')

exports.search = async function (arg) {
    if (!arg) {
        throw Error("None arg for search");
    } else {
        let url = `https://pypi.org/pypi/${arg.toLowerCase()}/json`
        let data = await fetch(url).then(res => res.json());
        if (data.error) {
            throw Error("Can't find this package in npm");
        } else {
            return data;
        }
    }
}