import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesReceiveComponent } from './messages-receive.component';

describe('MessagesReceiveComponent', () => {
  let component: MessagesReceiveComponent;
  let fixture: ComponentFixture<MessagesReceiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesReceiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
