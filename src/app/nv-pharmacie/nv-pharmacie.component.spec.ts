import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvPharmacieComponent } from './nv-pharmacie.component';

describe('NvPharmacieComponent', () => {
  let component: NvPharmacieComponent;
  let fixture: ComponentFixture<NvPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvPharmacieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
