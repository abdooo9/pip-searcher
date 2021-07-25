# pip-searcher

<center>
	<a href="https://nodei.co/npm/pip-searcher/">
		<img alt="pip-searcher package" src="https://nodei.co/npm/pip-searcher.png">
	</a>
</center>

* pip package that gets information about pip packages and other info from the pip API

# Installation from [NPM](https://www.npmjs.com/package/pip-searcher)

```
npm i pip-searcher
```
- `search(package_name)` - Get a pip package
    - `package_name`: (REQUIRED) pip package name

# Examples
### (Using await)
```js
const pip = require('pip-searcher')

async function getPip() {
    const res = await pip.search('NumPy')
    console.log(res) // All information related to the express package
}
getPip()
``` 

### (Using .then function)

```js
const pip = require('pip-searcher')

pip.search('NumPy').then(res => {
    console.log(res) // All information related to the express package
})
```

### (Validation)

```js
const pip = require('pip-searcher')

pip.search('NumPy').then(res => {
    if (res) {
        console.log(res) // All information related to the express package
    } else {
        console.log("package not found");
    }
})
```
#### Contributing
© pip-searcher, 2021 | abdooo9 (abdooo9.dev@gmail.com)
