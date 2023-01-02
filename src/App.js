import React, { Component } from "react";
import './style.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-lo prosperar e não de lhe causar dano, planos de dar-lhes esperança e um futuro. Jeremias 29:11",
      "Busquem, pois, em primeiro lugar o Reino de Deus e a sua justiça, e todas essas coisas lhes serão acrescentadas. Mateus 6:33",
      "Seja forte e corajoso. Josue 1:9",
      "Mas, em todas as coisas somos mais que vencedores, por meio dquele que nos amou. romanos 8:37",
      "Tudo posso naquele que me fortalece. Felipenses 4:13",
      "O ladrão veio para roubar, matar e destruir; eu vim para que tenham vida, e vida em abundância. João 10:10",
      "Eis que estou á porta e bato, se alguém ouvir a minha voz e abrir a porta, eu entrarei e cearei com ele, e ele comigo. Apocalipse 3:20",
      "Certamente ele tomou sobre si as nossas enfermidades e sobre si levou as nossas doenças, contudo nós o consideramos castigado por Deus, por ele atingido e afligido. Isaías 53:4",
      "Se vocês, apesar de serem maus, sabem dar boas coisas aos seus filhos, quanto mais o Pai que está no céu dará o Espírito Santo a quem o pedir! Lucas 11:13",
      "Nenhum mal o atingirá, desgraça alguma chegará à sua tenda. Salmos 91:10",
      "Darei a vocês um coração novo e porei um espírito novo em vocês; tirarei de vocês o coração de pedra e lhes darei um coração de carne. Ezequiel 36:26",
      "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. João 3:16.",
      "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá; E todo aquele que vive, e crê em mim, nunca morrerá. Crês tu isto? João 11:25-26.",
      "O que vencer será vestido de vestes brancas, e de maneira nenhuma riscarei o seu nome do livro da vida; e confessarei o seu nome diante de meu Pai e diante dos seus anjos. Apocalipse 3:5.",
      "Quem vencer, herdará todas as coisas; e eu serei seu Deus, e ele será meu filho. Apocalipse 21:7.",
      "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo. Isaías 41:10.",
      "O Senhor, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes. Deuteronômio 31:8."
    
    ]
  }

  quebraBiscoito(){
    let state = this.state;

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <h1>Deus tem uma mensagem para você!!!</h1>
        <img className="img" src={require('./assets/biscoito.png')} />

        <Botao nome="Click aqui para receber" acaoBtn={this.quebraBiscoito}/>

        <h3 className="textoFrase">{this.state.textoFrase}</h3>

      </div>
    )
  }

}

class Botao extends Component{
  render(){
    return(
      <div>
        <button  onClick={this.props.acaoBtn} >
        {this.props.nome}
        </button>
      </div>
    );
  }
}



export default App;
