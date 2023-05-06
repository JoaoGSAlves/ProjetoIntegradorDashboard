import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasAtividadesComponent } from './proximas-atividades.component';

describe('ProximasAtividadesComponent', () => {
  let component: ProximasAtividadesComponent;
  let fixture: ComponentFixture<ProximasAtividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximasAtividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximasAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
