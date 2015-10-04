import labels from './labels-en_US.json!json';
//import angular from 'angular';

export default function onConfig($provide, $translateProvider, $httpProvider) {
    $translateProvider.translations('en', labels);
    $translateProvider.preferredLanguage('en');
    $httpProvider.defaults.headers.common["NG_X-Requested-With"] = 'XMLHttpRequest';
}
onConfig.$inject = ['$provide', '$translateProvider', '$httpProvider'];

