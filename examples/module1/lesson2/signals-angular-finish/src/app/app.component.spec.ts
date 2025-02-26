import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CharacterSearchContainerComponent } from './containers/character-search-container/character-search-container.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the correct title 'signals'`, () => {
    expect(component.title).toEqual('signals');
  });

  it('should render the character search container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('app-character-search-container')
    ).not.toBeNull();
  });
});
