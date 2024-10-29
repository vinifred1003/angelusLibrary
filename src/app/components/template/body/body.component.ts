import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, CardModule, ButtonModule, InputMaskModule, InputTextareaModule,ChipsModule],

  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  valor: string = '';
  isbn_value: number = 0;
  value: string = '';
  values3: string = '';

}
