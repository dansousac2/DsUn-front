import ApiService from './ApiService';

export default class CollaboratorService extends ApiService {
    
    constructor() {
        super('collaborator');
    }

    getAllCollaborators() {
        return this.get("/all");
    }

    getCollaboratorByCpf(cpf) {
        const dto = {
            cpf:cpf
        }
        return this.getWithBody('/usingcpf', dto);
    }
}