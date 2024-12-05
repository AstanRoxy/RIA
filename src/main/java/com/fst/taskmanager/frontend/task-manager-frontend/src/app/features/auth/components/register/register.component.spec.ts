import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';


import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '@features/auth/components/auth.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [AuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if passwords do not match', () => {
    component.user.password = 'password1';
    component.user.confirmPassword = 'password2';
    component.onRegister();
    expect(component.errorMessage).toBe('Les mots de passe ne correspondent pas.');
  });
});
