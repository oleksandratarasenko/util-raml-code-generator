import { ClientFactoryBase } from 'paysera-http-client-common';
import TransferClient from './TransferClient';

class ClientFactory extends ClientFactoryBase {

    /**
     * @param {ClientWrapper} client
     */
    constructor(client) {
        super();
        this.client = client;
    }

    /**
     * @param {object|null} options
     * @returns {ClientFactory}
     */
    static create(options = null) {
        return new ClientFactory(this.prototype.getClient(options || {}));
    }

    /**
     * @returns {string}
     */
    static getBaseUrl() {
        return 'https://my-api.example.com/rest/v1/';
    }

    /**
     * @param {TokenProvider} provider
     *
     * @returns {TransferClient}
     */
    getTransferClient(provider) {
        this.client.setTokenProvider(provider);
        return new TransferClient(this.client);
    }
}

export default ClientFactory;
