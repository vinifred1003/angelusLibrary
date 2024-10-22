import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule],

  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  valor: string = '';
  valor1: string = '';
  value: string = '';

}
