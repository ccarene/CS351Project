import { Component } from '@angular/core';
import { VinylCardComponent } from '../vinyl-card/vinyl-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [VinylCardComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  // ngOnInit(){
  //   this.testArr = [
  //     'Vinyl One',
  //   'Vinyl Two'
  //   ]
  // }
  testArr: Array<string> = [
    'Vinyl One',
    'Vinyl Two',
    'next vinyl', 
    'Vinyl Three',
    'Vinyl Four'
  ];
}
