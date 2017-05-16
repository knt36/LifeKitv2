import {
    async,
    getTestBed,
    TestBed
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

describe('service: ApiService', () => {
    let backend: MockBackend;
    let service: ApiService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                ApiService,
                JwtService,
                {
                    deps: [MockBackend, BaseRequestOptions],
                    provide: [Http, JwtService],
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(ApiService);
    }))

    function setupConnections(backend: MockBackend, urlTarget: String, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if(connection.request.url === urlTarget) {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);
                connection.mockRespond(response);
            }
        })
    }
    
    // the real data test is going to be hard as pass/fail will depend on result from Jake/Jaheoon

});