import { Entity } from 'paysera-http-client-common';

import DateFactory from '../service/DateFactory';

class Payer extends Entity {

    /**
     * @return {string}
     */
    getAccountNumber() {
        return this.get('account_number');
    }

    /**
     * @param {string} accountNumber
     */
    setAccountNumber(accountNumber) {
        this.set('account_number', accountNumber);
    }

    /**
     * @return {string}|null
     */
    getReference() {
        return this.get('reference');
    }

    /**
     * @param {string} reference
     */
    setReference(reference) {
        this.set('reference', reference);
    }
}

export default Payer;
