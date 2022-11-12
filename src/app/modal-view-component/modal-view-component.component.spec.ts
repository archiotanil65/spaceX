import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewComponentComponent } from './modal-view-component.component';

describe('ModalViewComponentComponent', () => {
  let component: ModalViewComponentComponent;
  let fixture: ComponentFixture<ModalViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
