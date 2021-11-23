require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note sad slush install infant foster ghost'; 
let testAccounts = [
"0x965e6dc5d83c0666d11251750ed030aa63e20c8118c5a1f694bdd3dd29242bd5",
"0x0e9b60ed2bfd83a666ed3d4bbe8aa38c95b9185f388ad1a1401dce48e4805ccd",
"0xb241af8779ab4872d78bcbbcbe7d74f14a072fe19e1e9bd6ad91d62036400037",
"0xc49c488fa2d6c14765e00f294a8f184262402aef48f8a764faf89fb86996d5d9",
"0xada293a359c5f622c3477ba27c39ea81a93a97674a680c2b241991a7deee70cc",
"0xea480ccb89f81a608b224a20be4da22c18fe5b4a7e2b0fe55bc4633c9d24b125",
"0x16445aaa85832cb8e33568070ef92522a30f6228e74cbc4022364e12a58a6116",
"0x531a0eab1dcb80c89677d2a0ae6c7a9ff2b11cfb04587c4ded66687f4db850ef",
"0x8b0c3c32dc035d069ff296df24e31f18d37692c8d6bf9e2dd43b8b40f4c503e2",
"0xcdc8bf157a660dad1fc7eef4a157b7ec2be8fe43b3ae1d91601ee817db3ab331"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


