import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWaiterComponent } from './home-page-waiter.component';

describe('HomePageWaiterComponent', () => {
  let component: HomePageWaiterComponent;
  let fixture: ComponentFixture<HomePageWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageWaiterComponent]
    });
    fixture = TestBed.createComponent(HomePageWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
