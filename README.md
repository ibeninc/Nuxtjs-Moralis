# Nuxt.Js Moralis

Boilerplate project using Nuxtjs + Vuetify + Moralis

# Nuxt Add Moralis plugin (plugins/moralis.js)

```js
import Moralis from 'moralis';

Moralis.initialize("moralis-key");
Moralis.serverURL = 'moralis-server-url'

export default ({ app }, inject) => {

inject('moralis', Moralis)

}

```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
