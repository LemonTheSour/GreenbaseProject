import { Component } from '@angular/core';
import { ProductsComponent } from '../../components/products/products.component';
import { CategoryInfoComponent } from '../../components/category-info/category-info.component';
import { VisibilityComponent } from '../../components/visibility/visibility.component';

@Component({
  selector: 'app-edit-womens-clothes',
  standalone: true,
  imports: [ ProductsComponent, CategoryInfoComponent, VisibilityComponent],
  templateUrl: './edit-womens-clothes.component.html',
  styleUrl: './edit-womens-clothes.component.scss'
})
export class EditWomensClothesComponent {

}
