import Pessoa from "./pessoa"; //Dessa maneira ainda nao é suportado entao vai dar erro
import './modulos/moduloA'
import './assets'
//const Pessoa = require('./pessoa')
const atendente = new Pessoa
console.log(atendente.cumprimentar())