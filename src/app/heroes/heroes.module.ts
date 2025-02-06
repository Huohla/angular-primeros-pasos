import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    exports: [
        HeroComponent,
        ListComponent
    ],
    declarations: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}

// * a-module
// import { NgModule } from '@angular/core';

// import { NameComponent } from './name.component';

// @NgModule({
//     imports: [],
//     exports: [],
//     declarations: [NameComponent],
//     providers: [],
// })
// export class NameModule { }
