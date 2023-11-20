import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpdateComponent } from './key-update.component';

describe('KeyUpdateComponent', () => {
  let component: KeyUpdateComponent;
  let fixture: ComponentFixture<KeyUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyUpdateComponent]
    });
    fixture = TestBed.createComponent(KeyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
