import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchValueInputComponent } from './search-value-input.component';

describe('SearchValueInputComponent', () => {
  let component: SearchValueInputComponent;
  let fixture: ComponentFixture<SearchValueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchValueInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchValueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
