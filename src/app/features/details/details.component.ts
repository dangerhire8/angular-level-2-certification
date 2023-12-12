import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IFixtureTeams, IGoals } from '../../core/types/fixtures';

export interface IDetailsData {
  teams: IFixtureTeams;
  goals: IGoals;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  matches: IDetailsData[];

  ngOnInit(): void {
    this.matches = this.route.snapshot.data['matches'] as IDetailsData[];
  }
}
