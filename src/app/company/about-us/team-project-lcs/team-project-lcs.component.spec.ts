import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProjectLCSComponent } from './team-project-lcs.component';

describe('TeamProjectLCSComponent', () => {
  let component: TeamProjectLCSComponent;
  let fixture: ComponentFixture<TeamProjectLCSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProjectLCSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProjectLCSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
