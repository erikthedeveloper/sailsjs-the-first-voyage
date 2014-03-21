/**
* Chat Room
*/

if (document.forms['status_update_form']) {
(function($) {



    /**
     * Declare Variables
     */
    var the_form = document.forms['status_update_form'],
        messages_container  = $('#messages_container'),
        chatroom_id = the_form.chatroom_id.value;


    /**
     * Define Functions
     */

    var submitStatusUpdate = function () {

        post_data = {
            chatroom_id: the_form.chatroom_id.value,
            username   : the_form.username.value,
            content    : the_form.content.value
        };

        socket.post('/statusupdate', post_data,
            function (data) {
                /* Duplication Here */
                // renderMessage(data);
            });

        the_form.content.value = "";
    };
    var renderMessage = function (msg) {
        // var time = moment(msg.createdAt).format('YYYY-MM-DD HH:mm');
        messages_container.prepend(
            '<li class="list-group-item">' +
                '<h5>' + msg.username + '</h5>' +
                '<p>' + msg.content  + '</p>' +
            '</li>'
            );
    };

    var getPastMessages = function () {
        socket.get('/statusupdate?chatroom_id=' + chatroom_id, function (statusupdates) {
            for (var i = 0, len = statusupdates.length; i < len; i++) {
                renderMessage(statusupdates[i]);
            }
        });
    };




    /**
     * Set Event Listeners
     */

    $(the_form).submit( function (event)
    {
        event.preventDefault();
        submitStatusUpdate();
    });

    /**
     * Go!
     */

    // socket.request('/statusupdate');

    getPastMessages();

    socket.on('message', function (socket_message) {
        console.info('socket.on statusupdate');

        if (socket_message)
        {
            if (socket_message.data)
            {
                renderMessage(socket_message.data);
            }
        }
    });

})(jQuery);
}