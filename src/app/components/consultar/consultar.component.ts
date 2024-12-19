import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// interface Registro {
//   nome: string;
//   cpf: string;
//   carro: string;
// }
@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  termoDeBusca: string = ''; //termo de busca inserido no formulário

  //dados de exemplo (Substituir pelos dados reais do backend)
    registros = [
    { nome: 'João Silva', cpf: '123.456.789.-00', carro: 'ABC-1234'},
    { nome: 'Maria Silva', cpf: '123.456.009.-00', carro: 'AXC-3334'},
    { nome: 'Pedro Silva', cpf: '000.456.789.-00', carro: 'JBC-0034'},
    { nome: 'Alex Silva', cpf: '000.456.789.-00', carro: 'JBC-0034'},
    { nome: 'Célia Silva', cpf: '000.456.789.-00', carro: 'JBC-0034'},
    { nome: 'Arnaldo Silva', cpf: '000.456.789.-00', carro: 'JBC-0034'},
    { nome: 'Arnaldo César', cpf: '000.456.789.-00', carro: 'JBC-0034'},
    { nome: 'Teco César', cpf: '000.456.789.-00', carro: 'JBC-0034'},
  ];

  registrosFiltrados = [...this.registros]; //exibe todos os registros inicialmente

  constructor() {
    // Ordena os registros em ordem alfabética ao carregar o componente
    this.registros.sort((a, b) => a.nome.localeCompare(b.nome));
    this.registrosFiltrados = [...this.registros];
  }

  //lógica de busca
  // Buscar(event: Event) {
  //   event.preventDefault();
  //   this.registrosFiltrados = this.registros.filter((registro) =>
  //     Object.values(registro)
  //       .join('')
  //       .toLowerCase()
  //       .includes(this.termoDeBusca.toLowerCase())
  //   );
  // }
  Buscar(event: Event) {
    event.preventDefault();

    const termoNormalizado = this.removerAcentos(this.termoDeBusca.toLowerCase());

    this.registrosFiltrados = this.registros.filter((registro) => {
      const valoresRegistro = Object.values(registro)
        .join(' ')
        .toLowerCase();

      const valoresNormalizados = this.removerAcentos(valoresRegistro);

      return valoresNormalizados.includes(termoNormalizado);
    });
  }

  removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
