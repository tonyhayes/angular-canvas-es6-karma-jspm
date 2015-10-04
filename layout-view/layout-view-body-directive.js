import layoutViewBodyTemplate from './partials/layout-view-body.html!text';
export default function layoutViewBody() {
    return {
        restrict: 'A',
        template: layoutViewBodyTemplate
    };
}