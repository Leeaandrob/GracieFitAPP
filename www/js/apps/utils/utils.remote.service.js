(function () {
    'use strict';

    angular
        .module('app.utils')
        .factory('Remote', Remote);

    /* @ngInject */
    function Remote () {
        var
            protocol = 'http:',
            URI = '//www.graciefit.com',
            port = '80',
            //URI = '//localhost',
            //port = '8000',
            version = 'api/v1',
            // version = 'v1',

            baseURL,
            baseMediaURL
        ;

        buildURLs();

        return {
            getBaseURL: getBaseURL,
            getAPIUrl: getAPIUrl,
            getBaseMediaURL: getBaseMediaURL
        };

        function buildURLs () {
            baseURL = protocol + URI + (port ? (':' + port) : '') + '/' + version;
            baseMediaURL = protocol + URI + (port ? (':' + port) : '');
        }

        function getBaseURL () {
            return baseURL;
        }

        function getBaseMediaURL () {
            return baseMediaURL;
        }

        function getAPIUrl (resource) {
            return baseURL + '/' + resource + '/';
        }
    }
}());
