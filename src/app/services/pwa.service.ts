import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: any;



  constructor(private swUpdate: SwUpdate) {



    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });

    swUpdate.available.subscribe(event => {
      Swal.fire({
        title: 'Há uma atualização no APP',
        text: "Confirma a atualização?",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SIM!'
      }).then((result) => {
        if (result.value) {
          window.location.reload();
        }
      })

    });
  }


}
