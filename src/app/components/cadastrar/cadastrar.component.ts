import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'; // Import do MatTabsModule
import { FormsModule } from '@angular/forms'; // Para os formulários
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [MatTabsModule, FormsModule, CommonModule], // Adicione os módulos necessários aqui
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  alunos = [{ id: 1, nome: 'João Silva' }, { id: 2, nome: 'Maria Souza' }];
  carros = [{ id: 1, placa: 'ABC-1234' }, { id: 2, placa: 'XYZ-7412' }];

  cadastrarAluno() {
    console.log('Cadastrar Aluno');
    //Implementar a lógica de cadastro de aluno
  }

  cadastrarCarro() {
    console.log('Cadastrar Carro!');
    // Implemente a lógica de cadastro de carro
  }

  vincularCarro() {
    console.log('Vincular Carro!');
    // Implemente a lógica de vincular carro ao aluno
  }
}
