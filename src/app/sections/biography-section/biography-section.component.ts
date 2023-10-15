import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-biography-section',
  templateUrl: './biography-section.component.html',
  styleUrls: ['./biography-section.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiographySectionComponent {
  description: string[] = [
    'Bringing over a decade of diverse engineering experience, I excel in automation, failure analysis, and risk assessment. With a unique ability to bridge technical and business domains, I\'m recognized for my exceptional communication skills and commitment to innovation.',
    'As a self-motivated individual and a valuable team player, I am deeply committed to advancing green engineering solutions with efficiency and precision.'
  ];
}
