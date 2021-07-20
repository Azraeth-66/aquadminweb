import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotadataComponent } from './mascotadata.component';

describe('MascotadataComponent', () => {
  let component: MascotadataComponent;
  let fixture: ComponentFixture<MascotadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
