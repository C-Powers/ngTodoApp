import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DisplayGroupComponent } from './displayGroup.component';

describe('DisplayGroupComponent', () => {
    let comp: DisplayGroupComponent;
    let fixture: ComponentFixture<DisplayGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DisplayGroupComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DisplayGroupComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    // it('buttons defaults to: [, , ]', () => {
    //     expect(comp.buttons).toEqual([, , ]);
    // });

});
