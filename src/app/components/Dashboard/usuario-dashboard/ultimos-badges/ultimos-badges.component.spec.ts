import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosBadgesComponent } from './ultimos-badges.component';

describe('UltimosBadgesComponent', () => {
  let component: UltimosBadgesComponent;
  let fixture: ComponentFixture<UltimosBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosBadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimosBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
