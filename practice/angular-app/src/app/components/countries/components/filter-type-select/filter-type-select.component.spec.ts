import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeSelectComponent } from './filter-type-select.component';

describe('FilterTypeSelectComponent', () => {
  let component: FilterTypeSelectComponent;
  let fixture: ComponentFixture<FilterTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTypeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
