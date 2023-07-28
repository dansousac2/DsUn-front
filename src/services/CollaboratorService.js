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
        return this.postWithBody('/usingcpf', dto);
    }

    excludeCollaborator(cpf) {
        const dto = {
            cpf:cpf
        }
        return this.postWithBody('/removeCollab', dto);
    }

    createCollaborator(cpf, name) {
        const dto = {
            cpf:cpf,
            name:name
        }
        return this.postWithBody('', dto);
    }

    updateCollaboratorName(cpf, name) {
        const dto = {
            cpf:cpf,
            name:name
        }
        return this.put('', dto);
    }
}