import { Component, OnInit } from '@angular/core';

export interface Cidade {
  nome: string;
  lat: number;
  lng: number;
}

export interface Escola extends Cidade {
  distanciaNre?: string;
  site?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  zoom: number = 13.5;
  escolas: Escola[];
  cidades: Cidade[];
  cidadeSelecionada: Cidade;

  ngOnInit(): void {
    this.cidadeSelecionada = { nome: 'Arapoti', lat: -24.1379576, lng: -49.8179979 }
    this.carregaCidades()
    this.escolas = [

      //Arapoti
      { nome: 'CE Carmelina Ferreira Pedroso', lat: -24.1398048, lng: -49.8355771, distanciaNre: '34,4 KM' },
      { nome: 'CE do Campo Cerrado das Cinzas', lat: -24.0674727, lng: -49.8860808, distanciaNre: '34,5 KM' },
      { nome: 'CE Costa Neto', lat: -24.1464766, lng: 49.8101778, distanciaNre: '38 KM' },
      { nome: 'CE do Campo de Calógeras', lat: -23.9924635, lng: -49.8206573, site: 'http://www.consultaescolas.pr.gov.br/consultaescolas-java/pages/templates/initial2.jsf?codigoMunicipio=160&codigoEstab=647' },
      { nome: 'CE João Paulo II', lat: -24.1379576, lng: -49.8179979 },
      { nome: 'CE Rui Barbosa', lat: -24.1451512, lng: -49.82379 },
      { nome: 'Centro Est. Educ. Prof. de Arapoti', lat: 24.1926889, lng: -49.7864962 },
      { nome: 'E.E.B.  Rafael Ribeiro de Lara', lat: -24.1510819, lng: -49.8191874 },

      //Jaguariaiva
      { nome: 'CE Anita Canet', lat: -24.2453268, lng: -49.707523, distanciaNre: '56,7,4 KM' },
      { nome: 'CE do Campo Milton Sguário', lat: -24.3696617, lng: -49.6494521, distanciaNre: '80 KM' },
      { nome: 'CE Nilo Peçanha', lat: -24.2285838, lng: -49.7653899, distanciaNre: '55 KM' },
      { nome: 'CE Olavo Bilac', lat: -24.2389722, lng: -49.7866774, distanciaNre: '56 KM' },
      { nome: 'CE Pe. José de Anchieta', lat: -24.2649296, lng: -49.7252971, distanciaNre: '56 KM' },
      { nome: 'CE Rodrigues Alves', lat: -24.2510682, lng: -49.710594, distanciaNre: '55,8 KM' },
      { nome: 'CEEBJA Prof. Ignácio A S. Filho', lat: -24.2651031, lng: -49.7274798, distanciaNre: '56,2 KM' },
      { nome: 'E.E.B. São Judas Tadeu', lat: -24.2532008, lng: -49.7136731, distanciaNre: '55,7 KM' },

      //Salto
      { nome: 'EE do Campo José Salvador de Souza', lat: -23.6358092, lng: -49.7822513, distanciaNre: '36,4 KM' },
      { nome: 'CE Antônio Delfino Fragoso', lat: -23.6059647, lng: -49.626979, distanciaNre: '53,4 KM' },
      { nome: 'EE Gabriel Bertoni', lat: -23.6025638, lng: -49.6274302, distanciaNre: '53,8 KM' },
      { nome: 'E.E.B. Rosalina Fernandes de Jesus', lat: -23.6061776, lng: -49.6246992, distanciaNre: '54,4 KM' },

      //Santana
      { nome: 'CE do Campo Humberto de A. C. Branco', lat: -23.760487, lng: -49.630704, distanciaNre: '33,7 KM', site: 'http://www.consultaescolas.pr.gov.br/consultaescolas-java/pages/templates/initial2.jsf?codigoMunicipio=2420&codigoEstab=269' },
      { nome: 'E.E.B. Milton Cézar de Souza Filho', lat: -23.7575783, lng: -49.6288625, distanciaNre: '34,6 KM', site: 'http://www.consultaescolas.pr.gov.br/consultaescolas-java/pages/templates/initial2.jsf?codigoMunicipio=2420&codigoEstab=315' },

      //Sao Jose
      { nome: 'CE Maria Isabel Guimarães', lat: -23.917771, lng: -49.653595, distanciaNre: '20,2 KM', site: 'http://www.consultaescolas.pr.gov.br/consultaescolas-java/pages/templates/initial2.jsf?codigoMunicipio=2560&codigoEstab=24' },
      { nome: 'EE do Campo Maria Anésia Dias', lat: -24.0042252, lng: -49.6545517, distanciaNre: '30,9 KM', site: 'http://www.consultaescolas.pr.gov.br/consultaescolas-java/pages/templates/initial2.jsf?codigoMunicipio=2560&codigoEstab=32' },
      { nome: 'EE Newton Sampaio', lat: -23.920683, lng: -49.655987, distanciaNre: '19,8 KM', site: 'http://www.consultaescolas.pr.gov.br/consultaescolas-java/pages/templates/initial2.jsf?codigoMunicipio=2560&codigoEstab=16' },
      { nome: 'E. E. B. São José', lat: -23.9192021, lng: -49.654859, distanciaNre: '19,9,6 KM', site: '' },


      //Sengés
      { nome: 'CE Anita Grandi Salmon', lat: -24.1037332, lng: -49.4674726, distanciaNre: '51,5 KM', site: '' },
      { nome: 'CE Erasmo Braga', lat: -24.1136054, lng: -49.4627307, distanciaNre: '53,3 KM', site: '' },
      { nome: 'CE do Campo Lauro Sangreman de Oliveira', lat: -24.4202545, lng: -49.3938748, distanciaNre: '98,7 KM', site: '' },
      { nome: 'CE Pres. Costa e Silva', lat: -24.1152749, lng: -49.472138, distanciaNre: '53 KM', site: '' },
      { nome: 'EE do Campo Francisco da Silva Reis', lat: -23.8782739, lng: -49.56129, distanciaNre: '36,6 KM', site: '' },
      { nome: 'E. E. B. Mª Clotilde Dória', lat: -24.1133223, lng: -49.4590335, distanciaNre: '53,7 KM', site: '' },

       //Wenceslau
       { nome: 'CE Ary Barroso', lat: -23.8797888, lng: -49.8095901, distanciaNre: '800 Metros', site: '' },
       { nome: 'CE Dr. Sebastião Paraná', lat: -23.8754259, lng: -49.8021417, distanciaNre: '350 Metros', site: '' },
       { nome: 'CE Miguel Nassif Maluf', lat: -23.889094, lng: -49.802221, distanciaNre: '2,1 KM', site: '' },
       { nome: 'CE do Campo Patrimônio São Miguel', lat: -23.7925929, lng: -49.7367692, distanciaNre: '13,9 KM', site: '' },
       { nome: 'CE Prof. Milton Benner', lat: -23.8715108, lng: -49.8037922, distanciaNre: '1 KM', site: '' },
       { nome: 'CEEBJA de Wenceslau Braz', lat: -23.8732715, lng: -49.8036322, distanciaNre: '2 KM', site: '' },
       { nome: 'EE do Campo KM 10', lat: -23.8555408, lng: -49.8585243, distanciaNre: '8,5 KM', site: '' },
       { nome: 'EEB Salomão Andraus', lat: -23.8706759, lng: -49.8011243, distanciaNre: '1 KM', site: '' }


    ]

  }

  onChangeCidade($event) {
    this.cidadeSelecionada = this.cidades.filter(cid => cid.nome == $event.target.value)[0]
    console.log(this.cidadeSelecionada)
  }

  carregaCidades() {
    this.cidades = [
      //Arapoti
      { nome: 'Arapoti', lat: -24.1379576, lng: -49.8179979 },
      { nome: 'Jaguariaíva', lat: -24.2453268, lng: -49.707523 },
      { nome: 'Santana', lat: -23.760487, lng: -49.630704 },
      { nome: 'São José da Boa Vista', lat: -23.917771, lng: -49.653595 },
      { nome: 'Salto do Itararé', lat: -23.6059647, lng: -49.626979 },
      { nome: 'Sengés', lat: -24.1152749, lng: -49.472138 },
      { nome: 'Wenceslau Braz', lat: -23.8714526, lng: -49.8016816 },


    ]
  }


}
