import { Service } from './service';

class Ctrl {
    constructor($scope, srv:Service){
        $scope.test = 'testing';
        srv.stuff();
        debugger;
    }
    
    test(){}
}

export {
    Ctrl
}