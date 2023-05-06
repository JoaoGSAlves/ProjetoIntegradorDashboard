import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivosPrivadosComponent } from './arquivos-privados.component';

describe('ArquivosPrivadosComponent', () => {
  let component: ArquivosPrivadosComponent;
  let fixture: ComponentFixture<ArquivosPrivadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivosPrivadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivosPrivadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
