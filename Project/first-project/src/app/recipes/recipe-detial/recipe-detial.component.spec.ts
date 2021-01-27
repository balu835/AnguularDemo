import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetialComponent } from './recipe-detial.component';

describe('RecipeDetialComponent', () => {
  let component: RecipeDetialComponent;
  let fixture: ComponentFixture<RecipeDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
