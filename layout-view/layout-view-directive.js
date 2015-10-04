import layoutViewTemplate from './partials/layout-view.html!text';
export default function layoutView() {
    return {
        restrict: 'A',
        scope: {
            'context': '='
        },
        controller: 'layoutViewController',
        controllerAs: 'ctrl',
        template: layoutViewTemplate,
        bindToController: true,
    };
}

