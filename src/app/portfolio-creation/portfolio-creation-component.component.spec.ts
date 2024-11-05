import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreationComponentComponent } from './portfolio-creation-component.component';

describe('PortfolioCreationComponentComponent', () => {
  let component: PortfolioCreationComponentComponent;
  let fixture: ComponentFixture<PortfolioCreationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCreationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCreationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
