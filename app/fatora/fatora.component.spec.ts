/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FatoraComponent } from './fatora.component';

describe('FatoraComponent', () => {
  let component: FatoraComponent;
  let fixture: ComponentFixture<FatoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
