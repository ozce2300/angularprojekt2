import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddakurserComponent } from './laddakurser.component';

describe('LaddakurserComponent', () => {
  let component: LaddakurserComponent;
  let fixture: ComponentFixture<LaddakurserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaddakurserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaddakurserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
