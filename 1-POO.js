/* function Pessoa(name){ 
    this.name = name;
}

const p = new Pessoa('Guilherme')

console.log(p) */

function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde){
    Animal.call(this, 4);
    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);