import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvVisiteComponent } from './nv-visite.component';

describe('NvVisiteComponent', () => {
  let component: NvVisiteComponent;
  let fixture: ComponentFixture<NvVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvVisiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
