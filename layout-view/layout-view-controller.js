import LayoutConsts from './layout-view-consts';
import Notifier from './helpers/notifier';

const $ = angular.element;

export default class LayoutViewController {
    constructor($scope, $q, $translate, $modal) {
        this.$q = $q
        this.$modal = $modal;
        this.$scope = $scope;
        this.Notifier = new Notifier($translate);
        this.done = true;
        this.$translate = $translate
        this.itemSearch = LayoutConsts.DISPLAY_WORD;
        this.placeHolder = this.$translate.instant("ITEM_PLACEHOLDER");
        this.displayDepth = LayoutConsts.DISPLAY_DEPTH;
        this.displayWord = LayoutConsts.DISPLAY_WORD;
        this.search = {
            disabled: false,
            itemSearch: (value)=>{
                if(angular.isDefined(value)) {
                    this.itemSearch = value;
                    this.loadItems();
                    return this.itemSearch;           
                }
                return this.itemSearch;                   
            }
        };
    }
}
LayoutViewController.$inject = ['$scope' ,'$q' ,'$translate', '$modal'];
