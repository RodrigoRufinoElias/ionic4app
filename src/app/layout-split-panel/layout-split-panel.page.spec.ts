import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSplitPanelPage } from './layout-split-panel.page';

describe('LayoutSplitPanelPage', () => {
  let component: LayoutSplitPanelPage;
  let fixture: ComponentFixture<LayoutSplitPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSplitPanelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSplitPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
