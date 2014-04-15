/**
 * ChatRoom
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  // TODO - Validation
  attributes: {

    /**
     * (i.e. My Chat Room)
     */
    title : {
        type: 'string',
        required: true
    },

    /**
     * (i.e. "my-chat-room")
     */
    slug  : {
        type: 'string',
        required: true,
        unique: true,
        regex: '^[a-z-]+'
    }

  }

};
