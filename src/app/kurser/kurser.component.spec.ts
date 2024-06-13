import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurserComponent } from './kurser.component';

describe('KurserComponent', () => {
  let component: KurserComponent;
  let fixture: ComponentFixture<KurserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KurserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KurserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
