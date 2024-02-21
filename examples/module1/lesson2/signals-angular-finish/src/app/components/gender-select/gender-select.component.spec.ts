import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderSelectComponent } from './gender-select.component';

describe('GenderSelectComponent', () => {
  let component: GenderSelectComponent;
  let fixture: ComponentFixture<GenderSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
