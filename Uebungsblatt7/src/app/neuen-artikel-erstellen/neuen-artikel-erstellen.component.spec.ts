import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuenArtikelErstellenComponent } from './neuen-artikel-erstellen.component';

describe('NeuenArtikelErstellenComponent', () => {
  let component: NeuenArtikelErstellenComponent;
  let fixture: ComponentFixture<NeuenArtikelErstellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuenArtikelErstellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuenArtikelErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
