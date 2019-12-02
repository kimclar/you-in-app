import Vue from "nativescript-vue";
import Vuex from "vuex";
import circleData from '../components/mockData/circleData.json';
import eventData from '../components/mockData/eventData.json';
import friendRequestData from '../components/mockData/friendRequestData.json';
import friendsData from '../components/mockData/friendsData.json';
import userData from '../components/mockData/userData.json';

Vue.use(Vuex);

let nextEventId = 0;

export default new Vuex.Store({
    state: {
        // TODO: set currentUser from login/sign up screen
        currentUser: "",
        events: eventData,
        friends: friendsData,
        friendRequests: friendRequestData,
        circles: circleData,
        allUsers: userData
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
                attendees: [host.username],
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
                    return;
                }
            }
        },
        editEvent(state, updatedEvent) {
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === updatedEvent.id) {
                    state.events[i] = updatedEvent;
                    return;
                }
            }
            state.events.push(updatedEvent);
        },
        addFriend(state, friend) {
            state.friends.push(friend);
        },
        removeFriend(state, username) {
            let i;
            for (i = 0; i < state.friends.length; i++) {
                if (state.friends[i].username === username) {
                    state.friends.splice(i, i + 1);
                    i--;
                    return;
                }
            }
        },
        editFriend(state, updatedFriend) {
            let i;
            for (i = 0; i < state.friends.length; i++) {
                if (state.friends[i].username === updatedFriend.username) {
                    state.friends[i] = updatedFriend;
                    return;
                }
            }
            state.friends.push(updatedFriend);
        },
        addFriendRequest(state, friendRequest) {
            state.friendRequests.push(friendRequest);
        },
        removeFriendRequest(state, friendRequest) {
            let i;
            for (i = 0; i < state.friendRequests.length; i++) {
                let request = state.friendRequests[i];
                if (request.fromUser === friendRequest.fromUser &&
                    request.toUser === friendRequest.toUser) {
                    state.friends.splice(i, i + 1);
                    i--;
                    return;
                }
            }
        },
        addCircle(state, circle) {
            state.circles.push(circle);
        },
        removeCircle(state, circleName) {
            let i;
            for (i = 0; i < state.circles.length; i++) {
                if (state.circles[i].name === circleName) {
                    state.circles.splice(i, i + 1);
                    i--;
                    return;
                }
            }
        },
        editCircle(state, updatedCircle) {
            let i;
            for (i = 0; i < state.circles.length; i++) {
                if (state.circles[i].name === updatedCircle.name) {
                    state.circles[i] = updatedCircle;
                    return;
                }
            }
        },
    },
    actions: {
        setCurrentUser(context, username) {
            context.commit('setCurrentUser', username);
        },
        addEvent(context, title, location, time, host, details, isSharable) {
            context.commit('addEvent', title, location, time, host, details, isSharable);
        },
        removeEvent(context, eventId) {
            context.commit('removeEvent', eventId);
        },
        editEvent(context, updatedEvent) {
            context.commit('editEvent', updatedEvent);
        },
        addFriend(context, friend) {
            context.commit('addFriend', friend);
        },
        removeFriend(context, username) {
            context.commit('removeFriend', username);
        },
        editFriend(context, updatedFriend) {
            context.commit('editFriend', updatedFriend);
        },
        addFriendRequest(context, friendRequest) {
            context.commit('addFriendRequest', friendRequest);
        },
        removeFriendRequest(context, friendRequest) {
            context.commit('removeFriendRequest', friendRequest);
        },
        addCircle(context, circle) {
            context.commit('addCircle', circle);
        },
        removeCircle(context, circleName) {
            context.commit('removeCircle', circleName);
        },
        editCircle(context, updatedCircle) {
            context.commit('editCircle', updatedCircle);
        },
    },
    getters: {
        currentUser: state => state.currentUser,
        events: state => state.events,
        hostedEvents: state => state.events.filter(event => event.host.name === state.currentUser),
        friends: state => state.friends,
        friendRequests: state => state.friendRequests,
        circles: state => state.circles,
        allUsers: state => state.allUsers
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
