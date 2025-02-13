// * a-service
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    addCharacter( character: Character): void {
        const newCharacter: Character = { id: uuid(), ...character }; // * Toma todas sus propiedades y espacelas en este nuevo objeto que estoy creando

        this.characters.push( newCharacter );
    }

    // onDeleteCharacter( index: number): void {
    //     this.characters.splice( index, 1 );
    // }

    deleteCharacterById( id: string ): void { // * El nuevo arreglo de caracteres incluye todos menos con el que coincida el ID
        this.characters = this.characters.filter(character => character.id !== id)
    }
    
}