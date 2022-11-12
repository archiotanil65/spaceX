import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTableComponentComponent } from './main-table-component.component';

describe('MainTableComponentComponent', () => {
  let component: MainTableComponentComponent;
  let fixture: ComponentFixture<MainTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
