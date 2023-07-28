import ApiService from './ApiService';

export default class CollaboratorService extends ApiService {
    
    constructor() {
        super('collaborator');
    }

    getAllCollaborators() {
        return this.getAll("/all");
    }
}