
function usuario(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new usuario('Luan')
p1.falar()