import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountDetailComponent } from './page-account-detail.component';

describe('PageAccountDetailComponent', () => {
  let component: PageAccountDetailComponent;
  let fixture: ComponentFixture<PageAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAccountDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
