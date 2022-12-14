import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsComponent } from './physics.component';

describe('PhysicsComponent', () => {
  let component: PhysicsComponent;
  let fixture: ComponentFixture<PhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
