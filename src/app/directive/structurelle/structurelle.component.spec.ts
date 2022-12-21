import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurelleComponent } from './structurelle.component';

describe('StructurelleComponent', () => {
  let component: StructurelleComponent;
  let fixture: ComponentFixture<StructurelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructurelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructurelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
