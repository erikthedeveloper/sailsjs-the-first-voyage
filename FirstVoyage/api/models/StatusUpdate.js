/**
 * StatusUpdate
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  // TODO - Validation
  attributes: {

    /**
     * Pseudo belongs_to relationship. Associations not yet available for SailsJS
     */
    chatroom_id: {
        type: 'integer',
        required: true
    },

    username: {
        type: 'string',
        required: true
    },

    /**
     * TODO validate
     *     Escape all data (i.e. no img, js, etc...)
     */
    content: {
        type: 'string',
        required: true
    }

  }

};
