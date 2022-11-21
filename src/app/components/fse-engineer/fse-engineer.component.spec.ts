import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FseEngineerComponent } from './fse-engineer.component';

describe('FseEngineerComponent', () => {
  let component: FseEngineerComponent;
  let fixture: ComponentFixture<FseEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FseEngineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FseEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
