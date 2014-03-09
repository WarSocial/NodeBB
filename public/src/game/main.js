/**
 * Created by DHilgaertner on 3/8/14.
 */

var wsGameModule = angular.module('wsGameModule');

function GameCtrl($scope) {

    socket.emit("game.getFeaturedGame" , onReceiveGameData);
    function onReceiveGameData(err, data) {
        console.dir(data);
        $('#game-board').html("hello");
    }


}