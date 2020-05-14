import { action, decorate } from 'mobx';

class SnackbarsActions {

    handleNewSnackbar(message, variant = 'info') {
        this.message = message;
        this.variant = variant;
        this.isOpen = true;
    }

    handleClearSnackbar() {
        this.isOpen = false;
        this.message = '';
        this.variant = 'info';
    }

}

SnackbarsActions = decorate(SnackbarsActions, {
    handleNewSnackbar: action
});

export {
    SnackbarsActions
};
