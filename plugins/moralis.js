import Moralis from 'moralis';

Moralis.initialize("moralis-key");
Moralis.serverURL = 'moralis-server-url'

export default ({ app }, inject) => {

inject('moralis', Moralis)

}

