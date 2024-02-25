import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByComponent } from './sort-by.component';

describe('SortByComponent', () => {
  let component: SortByComponent;
  let fixture: ComponentFixture<SortByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortByComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
