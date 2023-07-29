import ApiService from './ApiService';

export default class BreakFastService extends ApiService {

    constructor() {
        super('/breakfast');
    }

    getAllBreakFasts() {
        return this.get("/all");
    }

    getCurrentBreakFast() {
        return this.get('');
    }

    createBreakFast(date, collaboratorCpf, itemsIdArray) {
        const dto = {
            date: date,
            collaboratorCpf: collaboratorCpf,
            itemsId: itemsIdArray
        }

        return this.post('', dto);
    }

    updateBreakFast(date, collaboratorCpf, itemsIdArray) {
        const dto = {
            date: date,
            collaboratorCpf: collaboratorCpf,
            itemsId: itemsIdArray
        }

        return this.put('', dto);
    }

    confirmCollaboration(breakFast, collabsAndItems) {
        const dto = {
            breakFast: breakFast,
            collabsAndItems: collabsAndItems
        }

        return this.put('/confirmeitemcolaboration', dto);
    }
    
}