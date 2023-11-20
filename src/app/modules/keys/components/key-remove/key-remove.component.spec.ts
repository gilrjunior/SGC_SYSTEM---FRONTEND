import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRemoveComponent } from './key-remove.component';

describe('KeyRemoveComponent', () => {
  let component: KeyRemoveComponent;
  let fixture: ComponentFixture<KeyRemoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyRemoveComponent]
    });
    fixture = TestBed.createComponent(KeyRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
