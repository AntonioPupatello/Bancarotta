import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../../data/services/users.service';
import { User } from '../../models/user';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { CommonModule } from '@angular/common';
import { parse } from 'date-fns';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [LayoutComponent,CommonModule,RouterLink, MatButtonModule, FooterComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  id: string;
  user: Observable<User>;
  daysUntilExpiration: number = 0; // Assegnazione predefinita per i giorni mancanti al rinnovo della carta
  age: number = 0; // Assegnazione predefinita per l'età dell'utente

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.user = this.usersService.getUser(this.id);

    // Calcola i giorni mancanti al rinnovo della carta
    this.calculateDaysUntilExpiration();

    // Calcola l'età dell'utente
    this.calculateAge();
  }

  calculateDaysUntilExpiration(): void {
    this.user.subscribe(userData => {
      const cardExpire = parse(userData.bank.cardExpire, 'MM/yy', new Date());
      const today = new Date();
      const daysUntilExpiration = Math.ceil((cardExpire.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      this.daysUntilExpiration = daysUntilExpiration;
    });
  }

  calculateAge(): void {
    this.user.subscribe(userData => {
      const birthDate = new Date(userData.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        this.age = age - 1; // Sottrai un anno se il compleanno non è ancora passato quest'anno
      } else {
        this.age = age;
      }
    });
  }
}
