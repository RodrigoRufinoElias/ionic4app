import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNativoTextToSpeechPage } from './componente-nativo-text-to-speech.page';

describe('ComponenteNativoTextToSpeechPage', () => {
  let component: ComponenteNativoTextToSpeechPage;
  let fixture: ComponentFixture<ComponenteNativoTextToSpeechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteNativoTextToSpeechPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNativoTextToSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
