import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  imports: [
    CommonModule,
  ],
  standalone: true,
})
export class HeaderSectionComponent {
  public header: string = 'Seeking a leadership role focused on sustainable engineering and management.';
  public social: string[] = [
    'paley.vlad@yahoo.com',
    '(215) 704-0718',
    'Linkedin',
    'Resume (PDF)',
  ]
}
