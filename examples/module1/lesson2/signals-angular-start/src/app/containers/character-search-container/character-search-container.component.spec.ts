import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSearchContainerComponent } from './character-search-container.component';

describe('CharacterSearchContainerComponent', () => {
  let component: CharacterSearchContainerComponent;
  let fixture: ComponentFixture<CharacterSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterSearchContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
