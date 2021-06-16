import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsocrolComponent } from './asocrol.component';

describe('AsocrolComponent', () => {
  let component: AsocrolComponent;
  let fixture: ComponentFixture<AsocrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsocrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsocrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
