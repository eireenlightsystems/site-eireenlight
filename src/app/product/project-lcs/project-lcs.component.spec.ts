import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLcsComponent } from './project-lcs.component';

describe('ProjectLcsComponent', () => {
  let component: ProjectLcsComponent;
  let fixture: ComponentFixture<ProjectLcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectLcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
