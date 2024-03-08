import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylViewComponent } from './vinyl-view.component';

describe('VinylViewComponent', () => {
  let component: VinylViewComponent;
  let fixture: ComponentFixture<VinylViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinylViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinylViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
