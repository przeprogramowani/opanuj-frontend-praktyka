import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitleComponent } from './search-title.component';

describe('SearchTitleComponent', () => {
  let component: SearchTitleComponent;
  let fixture: ComponentFixture<SearchTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
