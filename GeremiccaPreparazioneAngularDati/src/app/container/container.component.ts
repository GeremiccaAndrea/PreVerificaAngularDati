import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
  Macchine: string[];
  constructor(){
    this.Macchine = ['a',' b', 'c', 'd']; //dobbiamo mettere i valori dell'array dentro un constructor
  }
  
  ngOnInit(): void {
    
  }
}

