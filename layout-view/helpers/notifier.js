import toastr from 'toastr/toastr';
import 'toastr/toastr.css!';
export default class Notifier {
    constructor($translate) {

        this.toastr = toastr
        this.toastr.options = {
                "closeButton": false,
                "debug": false,
                "positionClass": "toast-bottom-right",
                "onclick": null,
                "showDuration": "1000",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
        
        this.$translate = $translate;
    }
    notify( body, title, severity ) {
        if(this.toastr){
            this.toastr[severity || 'info']( body, title );            
        }
    }
    errorWith(message){
        if(this.toastr){
            this.toastr['error']( this.$translate.instant(message) );
        }
    }
    error(message){
        if(this.toastr){
            this.toastr['error']( this.$translate.instant(message) );        
        }
    }
    info(message){
        if(this.toastr){
           this.toastr['info']( this.$translate.instant(message)  );        
        }
    }
    warn(message){
        if(this.toastr){
           this.toastr['warning']( this.$translate.instant(message)  );        
        }
    }
}
