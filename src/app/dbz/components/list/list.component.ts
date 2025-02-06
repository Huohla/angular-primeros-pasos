import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public onDelete = new EventEmitter<string>();
  // onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index);
  // }

  onDeleteCharacter(id?: string): void {
    if ( !id ) return;

    console.log(id);

    this.onDelete.emit( id );
  }
}
