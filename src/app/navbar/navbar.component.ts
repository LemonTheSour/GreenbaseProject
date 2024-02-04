import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { ProfileDropdownComponent } from '../../components/profile-dropdown/profile-dropdown.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent, ProfileDropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
