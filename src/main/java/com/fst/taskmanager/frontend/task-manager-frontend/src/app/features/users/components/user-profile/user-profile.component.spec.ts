import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { UserService } from '@users/services/user.service'; // Assurez-vous d'avoir le bon chemin pour UserService
import { of } from 'rxjs';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    // Mock du service UserService
    userServiceMock = jasmine.createSpyObj('UserService', ['getUser']);
    userServiceMock.getUser.and.returnValue(of({ id: 1, name: 'John Doe', email: 'john@example.com' }));

    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      providers: [
        { provide: UserService, useValue: userServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load user profile on init', () => {
    expect(component.user).toEqual({ id: 1, name: 'John Doe', email: 'john@example.com' });
    expect(userServiceMock.getUser).toHaveBeenCalledWith(1);
  });
});
