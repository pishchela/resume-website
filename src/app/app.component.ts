import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AccordionComponent } from "./shared/accordion/accordion.component";
import { HeaderComponent } from "./header/header.component";
import { AccordionHeaderComponent } from "./shared/accordion-header/accordion-header.component";
import { AccordionBodyComponent } from "./shared/accordion-body/accordion-body.component";
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { BiographySectionComponent } from "./sections/biography-section/biography-section.component";

const accordionComponents = [
  AccordionComponent,
  AccordionHeaderComponent,
  AccordionBodyComponent,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderSectionComponent,
    BiographySectionComponent,
    accordionComponents,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'resume-website';
  toDeleteList = [
    'Conducted research on 4D Printing, Shape Memory Effect in Polymers and Alloys, Soft Robotics and Assistive Devices',
    'Implemented origami and kirigami techniques into 3D and 4D printed soft robotic components',
    'Mentored five masters and undergraduate students in the lab and a 4-person capstone design team'
  ]
}
