/**
 * StatusUpdate
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    chatroom_id: {
        type: 'integer',
        required: true
    },

    username: {
        type: 'string',
        required: true
    },

    content: {
        type: 'string',
        required: true
    }

  }

};
