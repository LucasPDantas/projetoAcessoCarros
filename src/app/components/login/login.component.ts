import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = ''; //define a propriedade username
  password: string = ''; //define a propriedade password

  onLogin() {
    //lógica de autenticação (exemplo: exibir no console)
    console.log('Usuário', this.username);
    console.log('Senha', this.password);
    //Aqui você pode adicionar a lógica de autenticação com o backend.
  }

}
