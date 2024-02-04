import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import categories from "../../data/categories.json";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public categoryList:{title:String, info:String, url:String}[] = categories;
}
