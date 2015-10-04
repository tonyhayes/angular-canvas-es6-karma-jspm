export
default
function layoutViewMockResponse($q) {
    interceptor.request = function(config) {
        page = config.data;
        return config;
    };
    interceptor.response = function(response) {
        let url = response.config.url;
        return response;
    };
    return interceptor;

}
layoutViewMockResponse.$inject = ['$q'];