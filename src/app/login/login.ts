import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private router = inject(Router);

  secretPasscode = 'Catan2026';
  userInput = signal<string>('');

  checkPasscode() {
    console.log(this.userInput());
    if (this.userInput() === this.secretPasscode) {
      localStorage.setItem('catan_access', 'true');
      this.router.navigate(['/']);
    } else {
      alert('Wrong passcode, settle down!');
    }
  }
}
