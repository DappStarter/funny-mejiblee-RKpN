require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy razor predict clump hockey clinic equal gather'; 
let testAccounts = [
"0x77a1a0f4208f5d87ac9192ed8620f5360cf5a92f7efbd423822f3e86bef9cd95",
"0xef217224e860cf1983d5bba804e0b8b163583aeb219143e7f45764373b1cf6cc",
"0xcb664a1e9d49f643f96696fdb225aeb35bc9c1863050ab89b63c6939f6f1caa5",
"0x1d263da47ce2aab41b72d4bdb1b58c508ff4423b79a1e1ae2bf45229c3b2ed8f",
"0x8d1b6f2beb7f035e12297e6cfb125676a9db147c40f5149c5cc0e2a280cec331",
"0x7305cf3113e7938d81a7fbfb4a9039e382c0b4f488deafb3b9abe8f143a43389",
"0xd9560a8805772b7976065ab003d5c7852384529e0bda82f5e84c6bb981cd0128",
"0xe54f55b51ac0177f8d70a932e4437a90ea70bb12a46e07ae5d8a4a016ec489cb",
"0xda15d652b2d6d1fe8e534ebb0ef4695c68131ff1f49442d1b7d0aebd68f5c517",
"0xa78ca9afe3186606944cfe980a37edc4535839059f3a0dcfc504cee21a5c169f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

