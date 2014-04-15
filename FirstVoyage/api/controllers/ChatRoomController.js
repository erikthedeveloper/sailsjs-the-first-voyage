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

    /**
     * Load an individual chatroom using Chatroom.slug OR redirect to home on error
     */
    render: function(req, res)
    {
        ChatRoom.findOneBySlug( req.params['chat_slug'], function (err, chatroom) {

          // Get all of the users
          StatusUpdate.find({'chatroom_id' : chatroom.id})
            .exec(function (err, statuses) {
            // Subscribe the requesting socket (e.g. req.socket) to all users (e.g. users)
            StatusUpdate.subscribe(req.socket, statuses);
          });

          if (!chatroom || err)
          {
              res.redirect('/');
          }
          else
          {
              res.view('home/chat', {
                  chatroom: chatroom
              });
          }
        });
    },

    redirect: function(req, res)
    {
      /**
       * TODO Error Handling.....
       */
      ChatRoom.findOneBySlug( req.param('slug'), function (err, chatroom) {

        if (err) {
          res.redirect( '/' );
        }

        if (!chatroom)
        {
            ChatRoom.create( {
              slug:req.param('slug'),
              title: req.param('title')
            }).done( function (err, chatroom)
            {
              the_url = '/chat/' + chatroom.slug;
              res.redirect( the_url );
            });
        }
        else
        {
          the_url = '/chat/' + chatroom.slug;
          res.redirect( the_url );
        }


      });
    },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ChatRoomController)
   */
  _config: {}


};
