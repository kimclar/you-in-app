import Vue from "nativescript-vue";
import Vuex from "vuex";
import circleData from '../components/mockData/circleData.json';
import eventData from '../components/mockData/eventData.json';
import friendRequestData from '../components/mockData/friendRequestData.json';
import friendsData from '../components/mockData/friendsData.json';
import userData from '../components/mockData/userData.json';
import nonFriendsData from "../components/mockData/nonFriendsData.json";

Vue.use(Vuex);

let nextEventId = 0;

export default new Vuex.Store({
    state: {
        // TODO: set currentUser from login/sign up screen
        currentUser: "Ricky",
        events: eventData,
        friends: friendsData,
        friendRequests: friendRequestData,
        circles: circleData,
        allUsers: userData,
        nonFriends: nonFriendsData
    },
    mutations: {
        setCurrentUser(state, username) {
            state.currentUser = username;
        },
        addEvent(state, newEvent) {
            newEvent.id=nextEventId;
            nextEventId++;
            state.events.push(newEvent);
        },
        removeEvent(state, eventId) {
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === eventId) {
                    state.events.splice(i, 1);
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
                    state.friends.splice(i, 1);
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
                    state.friendRequests.splice(i, 1);
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
                    state.circles.splice(i, 1);
                    i--;
                    return;
                }
            }
        },
        editCircle(state, updatedCircle, originalName) {
            let i;
            for (i = 0; i < state.circles.length; i++) {
                if (state.circles[i].name === originalName) {
                    state.circles[i] = updatedCircle;
                    console.log("SAVED" + state.circles[i].name);
                    return;
                }
            }
        },
        editNonFriend(state, updatedNonFriend) {
            let i;
            for (i = 0; i < state.nonFriends.length; i++) {
                if (state.nonFriends[i].username === updatedNonFriend.username) {
                    state.nonFriends[i] = updatedNonFriend;
                    return;
                }
            }
        },
        joinEvent(state, eventID){
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === eventID) {
                    state.events[i].attendees.push(state.currentUser);
                    i--;
                    return;
                }
            }
        },
        leaveEvent(state, eventID){
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === eventID) {
                    state.events[i].attendees.splice(state.events[i].attendees.indexOf(state.currentUser), 1);
                    i--;
                    return;
                }
            }
        },
        addDeleteDummy(state){
            state.events.push({title: "",
                                  location: "",
                                  dateTime: "",
                                  host: [{name: "", circles: ""}],
                                  attendees: ["", "", "", ""],
                                  details: "",
                                  isSharable: false, id: 99999999});
            let i;
            for (i = 0; i < state.events.length; i++) {
                if (state.events[i].id === 99999999) {
                    state.events.splice(i, 1);
                    i--;
                    return;
                }
            }
        },
        addCircleFriend(state, circleName, friendUsername){
            let i;
            for (i=0; i < state.circles.length; i++){
                if (state.circles[i].name === circleName){
                    state.circles[i].includedFriends.push(friendUsername);
                    console.log("ADDED!!");
                    i--;
                    return
                }
            }
        },
        removeCircleFriend(state, circleName, friendUsername){
            let i;
            for (i=0; i < state.circles.length; i++){
                if (state.circles[i].name === circleName){
                    state.circles[i].includedFriends.splice(state.circles[i].includedFriends.indexOf(friendUsername), 1);
                    console.log("REMOVED!!");
                    i--;
                    return
                }
            }
        }
    },
    actions: {
        setCurrentUser(context, username) {
            context.commit('setCurrentUser', username);
        },
        addEvent(context, newEvent) {
            context.commit('addEvent', newEvent);
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
        editCircle(context, updatedCircle, originalName) {
            context.commit('editCircle', updatedCircle, originalName);
        },
        editNonFriend(context, updatedNonFriend) {
            context.commit('editCircle', updatedNonFriend);
        },
        joinEvent(context, eventID) {
            context.commit('joinEvent', eventID)
        },
        leaveEvent(context,eventID){
            context.commit('leaveEvent', eventID)
        },
        addDeleteDummy(context){
            context.commit('addDeleteDummy')
        },
        addCircleFriend(context, circleName, friendUsername){
            context.commit('addCircleFriend', circleName, friendUsername)
        },
        removeCircleFriend(context, circleName, friendUsername){
            context.commit('removeCircleFriend', circleName, friendUsername)
        }
    },
    getters: {
        currentUser: state => state.currentUser,
        events: state => state.events,
        othersEvents: state => state.events.filter(event => event.host.name !== state.currentUser),
        hostedEvents: state => state.events.filter(event => event.host.name === state.currentUser),
        friends: state => state.friends,
        friendRequests: state => state.friendRequests,
        circles: state => state.circles,
        allUsers: state => state.allUsers,
        nonFriends: state => state.nonFriends
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
