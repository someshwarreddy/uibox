import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssItemComponent } from './css-item.component';

describe('CssItemComponent', () => {
  let component: CssItemComponent;
  let fixture: ComponentFixture<CssItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
