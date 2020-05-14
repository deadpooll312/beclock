import { observable, decorate } from 'mobx';
import {SnackbarsActions} from "./snackbars.actions";


class SnackbarsStore extends SnackbarsActions {
    isOpen = false;
    message = '';
    variant = 'info';
}

SnackbarsStore = decorate(SnackbarsStore, {
    isOpen: observable,
    message: observable,
    variant: observable
});

export default new SnackbarsStore();
