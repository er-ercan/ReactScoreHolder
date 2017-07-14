import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() =>{
  //Call Tracker.autorun
  //Create variable called players -> set equal to fetch query
  //Render players to do screen
  Tracker.autorun(() => {
    var players = Players.find({}, {sort:{score: -1 }}).fetch();
    let title = 'Skor Kolik';
    let positionedPlayers = calculatePlayerPositions(players);
    // let jsx = (
    //   <div>
    //   <TitleBar title={title}/>
    //   <PlayerList players={players}/>
    //   <App/>
    //   <AddPlayer/>
    // </div> );
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
