import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFieldComponent } from './name-field.component';

describe('NameFieldComponent', () => {
  let component: NameFieldComponent;
  let fixture: ComponentFixture<NameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
