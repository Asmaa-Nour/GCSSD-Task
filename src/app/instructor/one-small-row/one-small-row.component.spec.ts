/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneSmallRowComponent } from './one-small-row.component';

describe('OneSmallRowComponent', () => {
  let component: OneSmallRowComponent;
  let fixture: ComponentFixture<OneSmallRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSmallRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSmallRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
