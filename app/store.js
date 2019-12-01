import Vuex from "vuex";
import circleData from './components/mockData/friendsData.json';
import eventData from './components/mockData/eventData.json';
import friendRequestData from './components/mockData/friendRequestData.json';
import friendsData from './components/mockData/friendsData.json';
import userData from './components/mockData/userData.json';

let nextEventId = 0;

export default new Vuex.Store({
    state: {
        // TODO: set currentUser from login/sign up screen
        currentUser: "",
        events: eventData,
        friends: friendsData,
        friendRequests: friendRequestData,
        circles: circleData
    },
    mutations: {
        setCurrentUser(state, username) {
          state.currentUser = username;
        },
        addEvent(state, title, location, time, host, details, isSharable) {
            let newEvent = {
                id: nextEventId,
                title: title,
                location: location,
                time: time,
                host: host,
                attendees: [ host.username ],
                details: details,
                isSharable: isSharable
            };
            nextEventId++;
           state.events.push(newEvent);
        },
        removeEvent(state, eventId) {
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === eventId) {
                    state.events.splice(i, i + 1);
                    i--;
                }
            }
        },
        // looks for an event with the given id, if found replaces that event, otherwise generates a new one
        editEvent(state, event) {
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === event.id) {
                    state.events[i] = event;
                    return;
                }
            }
            state.events.push(event);
        },
        addFriend(state) {},
        removeFriend(state) {},
        editFriend(state) {},
        addFriendRequest(state) {},
        removeFriendRequest(state) {},
        editFriendRequest(state) {},
        addCircle(state) {},
        removeCircle(state) {},
        editCircle(state) {},
    },
    actions: {
        addEvent(context, title, location, time, host, details, isSharable) {
            context.commit('addEvent', title, location, time, host, details, isSharable);
        },
        removeEvent(context, eventId) {
            context.commit('removeEvent', eventId);
        },
        editEvent(context, event) {
            context.commit('editEvent', event);
        },
        addFriend(context) {
            context.commit('addFriend');
        },
        removeFriend(context) {
            context.commit('removeFriend');
            },
        editFriend(context) {
            context.commit('editFriend');
        },
        addFriendRequest(context) {
            context.commit('addFriendRequest');
        },
        removeFriendRequest(context) {
            context.commit('removeFriendRequest');
        },
        editFriendRequest(context) {
            context.commit('editFriendRequest');
        },
        addCircle(context) {
            context.commit('addCircle');
        },
        removeCircle(context) {
            context.commit('removeCircle');
        },
        editCircle(context) {
            context.commit('editCircle');
        },
    },
    getters: {
        currentUser: state => state.currentUser,
        events: state => state.events,
        hostedEvents: state => state.events.filter(event => event.host.name === state.currentUser),
        friends: state => state.events,
        friendRequests: state => state.events,
        circles: state => state.circles,
    }
});

/* TEMPLATES FOR OBJECTS

event: {
    int id,
    String title,
    String location,
    dateTime time,
    Object host {
        String name,
        StringArr invitedCircles []
    },
    StringArr attendees,
    String details,
    boolean isSharable
}

friend: {
    String username,
    String nickname,
}

friendRequest: {
    String fromUsername,
    String toUsername,
}

circle: {
    String name,
    StringArr includedUsers,
}

*/
