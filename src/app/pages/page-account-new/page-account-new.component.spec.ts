import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccountNewComponent } from './page-account-new.component';

describe('PageAccountNewComponent', () => {
  let component: PageAccountNewComponent;
  let fixture: ComponentFixture<PageAccountNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAccountNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAccountNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
