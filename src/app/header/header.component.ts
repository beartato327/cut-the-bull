import { Component, inject, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private headerService = inject(HeaderService);

  name: string = '';

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.headerService.getUser().subscribe((user) => {
      this.name = user[0].name;
      console.log(this.name);
    });
  }
}
