class Hero{


    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

    }
    atacar(){
        if(this.tipo =="mago"){
            this.ataque = "magia"
            console.log(`O ${Mago.tipo} atacou usando ${Mago.ataque}`)
        }else if(this.tipo =="guerreiro"){
            this.ataque = "espada"
            console.log(`O ${guerreiro.tipo} atacou usando ${guerreiro.ataque}`)
        }else if(this.tipo =="monge"){
            this.ataque = "artes marciais"
            console.log(`O ${monge.tipo} atacou usando ${monge.ataque}`)
        }else if(this.tipo =="ninja"){
            this.ataque = "shuriken"
            console.log(`O ${ninja.tipo} atacou usando ${ninja.ataque}`)
        }
    }


}
let Mago = new Hero("Cilan","26","mago")
let guerreiro = new Hero("Aaron","34","guerreiro")
let monge = new Hero("Lee","28","monge")
let ninja = new Hero("Zed","17","ninja")

Mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
