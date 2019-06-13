import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFormMaterialComponent } from './persona-form-material.component';

describe('PersonaFormMaterialComponent', () => {
  let component: PersonaFormMaterialComponent;
  let fixture: ComponentFixture<PersonaFormMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaFormMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaFormMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
