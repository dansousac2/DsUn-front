import ApiService from './ApiService';

export default class ItemService extends ApiService {
    
    constructor() {
        super('/item');
    }

    getAllItems() {
        return this.get("/all");
    }

    getItemById(id) {
        return this.get(`/${id}`);
    }

    createItem(name) {
        return this.post(`/${name}`, null);
    }

    removeItemByName(name) {
        return this.delete(`/${name}`);
    }
}