import layoutViewToolbarTemplate from './partials/layout-view-toolbar.html!text';
export default function layoutViewToolbar() {
    return {
        restrict: 'A',
        template: layoutViewToolbarTemplate
    };
}