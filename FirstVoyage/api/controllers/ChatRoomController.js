/**
 * ChatRoomController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    render: function(req, res)
    {
        ChatRoom.findOneBySlug( req.params['chat_slug'], function (err, chatroom) {

        if (err) res.view('home/index');

        if (!chatroom)
        {
            res.json('Chatroom not found');
        }
        else
        {
            res.view('home/chat', {
                chatroom: chatroom
            });
        }
        });
    },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ChatRoomController)
   */
  _config: {}


};
