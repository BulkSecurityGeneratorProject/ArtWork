/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { ArtWorkTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ResumeCreationDetailComponent } from '../../../../../../main/webapp/app/entities/resume-creation/resume-creation-detail.component';
import { ResumeCreationService } from '../../../../../../main/webapp/app/entities/resume-creation/resume-creation.service';
import { ResumeCreation } from '../../../../../../main/webapp/app/entities/resume-creation/resume-creation.model';

describe('Component Tests', () => {

    describe('ResumeCreation Management Detail Component', () => {
        let comp: ResumeCreationDetailComponent;
        let fixture: ComponentFixture<ResumeCreationDetailComponent>;
        let service: ResumeCreationService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ArtWorkTestModule],
                declarations: [ResumeCreationDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ResumeCreationService,
                    JhiEventManager
                ]
            }).overrideTemplate(ResumeCreationDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ResumeCreationDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ResumeCreationService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ResumeCreation(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.resumeCreation).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
