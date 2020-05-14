import SnackbarsStore from './snackbars/snackbars.store';

class RootStore {
    constructor() {
        this.snackbars = SnackbarsStore;
    }
}

export default new RootStore();
