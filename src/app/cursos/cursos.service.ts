import { Injectable,EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export  class CursosService {

emetirCursoCriado = new EventEmitter<string>();
static criouNovoCurso = new EventEmitter<string>();


  private cursos: string[] = ['Angnular2','Java','PHP'];

    constructor(private logService:LogService ){

        console.log('CursosService');
    }

    getCursos(){
      this.logService.consoleLog('Obtendo lista de curso');
       return  this.cursos;
     }

     addCurso(curso: string){
        this.logService.consoleLog(`Criando um novo Curso $(curso)`);
        this.cursos.push(curso);
        this.emetirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);

     }
}