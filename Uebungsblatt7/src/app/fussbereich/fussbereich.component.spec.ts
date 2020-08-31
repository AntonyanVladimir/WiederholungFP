import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FussbereichComponent } from './fussbereich.component';

describe('FussbereichComponent', () => {
  let component: FussbereichComponent;
  let fixture: ComponentFixture<FussbereichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FussbereichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FussbereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
