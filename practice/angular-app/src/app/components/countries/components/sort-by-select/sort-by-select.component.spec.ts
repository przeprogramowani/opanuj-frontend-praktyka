import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBySelectComponent } from './sort-by-select.component';

describe('SortBySelectComponent', () => {
  let component: SortBySelectComponent;
  let fixture: ComponentFixture<SortBySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortBySelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortBySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
