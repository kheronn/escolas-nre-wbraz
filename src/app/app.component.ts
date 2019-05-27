import { PwaService } from './services/pwa.service';
import { Component, OnInit } from '@angular/core';
import { Escola } from './models/escola.model';
import { Cidade } from './models/cidade.model';
import { DataService } from './services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';



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

  constructor(private data: DataService, private spinner: NgxSpinnerService, public pwa: PwaService) { }

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.cidadeSelecionada = { nome: 'Arapoti', lat: -24.1379576, lng: -49.8179979 }
    this.cidades = await this.data.getCidades().toPromise();
    this.escolas = await this.data.getEscolas().toPromise();
  }

  onChangeCidade($event) {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.cidadeSelecionada = this.cidades.filter(cid => cid.nome == $event.target.value)[0]
  }

  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }


}
