import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialMaintenanceTipsComponent } from './essential-maintenance-tips.component';

describe('EssentialMaintenanceTipsComponent', () => {
  let component: EssentialMaintenanceTipsComponent;
  let fixture: ComponentFixture<EssentialMaintenanceTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EssentialMaintenanceTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EssentialMaintenanceTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
