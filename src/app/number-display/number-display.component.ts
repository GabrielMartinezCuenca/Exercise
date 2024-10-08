import { Component, Input } from '@angular/core';
import { MultipleService } from '../multiple.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.scss'],
})
export class NumberDisplayComponent {
  @Input() inputNumber: number = 0;
  numbers: Array<{ value: number, color: string }> = [];

  constructor(private multipleService: MultipleService, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.updateList(this.inputNumber);
  }

  updateList(num: number) {
    this.numbers = this.multipleService.findMultiples(num);
  }

  saveToFirebase() {
    const data = { numbers: this.numbers };
    this.firestore.collection('numbers').add(data)
      .then(() => {
        console.log('Lista guardada en Firebase');
      })
      .catch(error => {
        console.error('Error al guardar en Firebase: ', error);
      });
  }
}
