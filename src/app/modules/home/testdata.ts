import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{

    createDb(){
        
        let bookDetils=[
            {
                id:101, name:'Compiler', category:'CS/IT'
            },
            {
                id:102, name:'Thermodynamics', category:'ME'
            },
            {
                id:103, name:'Structural Analysis', category:'Civil'
            }
        ];
        return {books:bookDetils};
    }
}