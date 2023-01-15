import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvMedecinComponent } from './nv-medecin.component';

describe('NvMedecinComponent', () => {
  let component: NvMedecinComponent;
  let fixture: ComponentFixture<NvMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvMedecinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
