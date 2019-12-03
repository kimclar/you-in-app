<template lang="html">
    <Page>
        <ActionBar>
            <GridLayout columns="*,2*,*" horizontalAlignment="right">
                <Label text="My Friends" col="1" class="action-label"></Label>
                <StackLayout col="2" @tap="addFriendTap" verticalAlignment="center">
                    <Image src="~/components/icons/addFriend.png" class="action-image"></Image>
                </StackLayout>
            </GridLayout>
        </ActionBar>

        <card-view margin="7" elevation="50" radius="2">
            <StackLayout>
                <Label text="Pending Requests" class="section-title"></Label>
                <ListView for="request in friendRequests" height="300">
                <v-template>
                    <GridLayout columns="3*,*,*" orientation="horizontal">
                        <Label class="listItems" :text="request.fromUser" col="0" textWrap="true"></Label>
                        <StackLayout col="1" @tap="acceptRequestTap">
                            <Image src="~/components/icons/acceptRequest.png" class="request-action-image"></Image>
                        </StackLayout>
                        <StackLayout col="2" @tap="rejectRequestTap">
                            <Image src="~/components/icons/rejectRequest.png" class="request-action-image"></Image>
                        </StackLayout>
                    </GridLayout>
                </v-template>
            </ListView><Label></Label>

                <Label text="Friends" class="section-title"></Label>
                <TextField class="listItems" v-model="textFieldValue" hint="Search friend by nickname..." />
                <ListView for="friend in friends" height="1000">
                <v-template>
                    <Label class="listItems" :text="friend.nickname" textWrap="true" @tap="friendDetails"></Label>
                </v-template>
                </ListView>

        </StackLayout>
        </card-view>

    </Page>
</template>

<script>
    import AddFriend from './AddFriend';
    import ConfirmDelete from "./ConfirmDeleteRequest";
    import FriendsDetails from "./FriendsDetails";
    import ConfirmAccept from "./ConfirmAcceptRequest";

    export default {
        data() {
            return {
                textFieldValue: ""
            }
        },
        computed: {
          friends() {
            return this.$store.getters.friends;
          },
          friendRequests() {
            return this.$store.getters.friendRequests;
          }
        },
        methods: {
            acceptRequestTap (args) {
                const view = args.view;
                const tappedItem = view.bindingContext;

                this.$showModal(ConfirmAccept, {
                    props: {
                        request: tappedItem,
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    }
                })

                this.$store.commit('addFriend',   {
                    "username": tappedItem.fromUser,
                    "nickname": tappedItem.fromUser,
                    "circles": []
                })
                this.$store.commit('removeFriendRequest', tappedItem);
            },
            rejectRequestTap(args){
                const view = args.view;
                const tappedItem = view.bindingContext;

                this.$showModal(ConfirmDelete, {
                    props: {
                        request: tappedItem,
                        animated: true,
                        transition: {
                            name: "slide",
                            duration: 200,
                            curve: "ease"
                        }
                    }
                })
            },
            friendDetails(args){
                    console.log("Open Friend")
                    const view = args.view;
                    const tappedItem = view.bindingContext;

                    this.$showModal(FriendsDetails, {
                        props: {
                            friend: tappedItem,
                            animated: true,
                            transition: {
                                name: "slide",
                                duration: 200,
                                curve: "ease"
                            }
                        }
                    });
                },
            },
            addFriendTap(){
                console.log("add friend!");
                this.$showModal(AddFriend)
            }
    }
</script>

<style lang="scss" scoped>
    // Start custom common variables
    @import "~@nativescript/theme/scss/variables/blue";
    // End custom common variables
    // Custom styles
    .action-image {
        width: 37;
        height: 37;
        vertical-align: center;
        horizontal-align: right;
    }
    .action-label {
        color: #ffffff;
        font-size: 20;
        font-weight: bold;
        vertical-align: center;
    }
    .section-title {
        border-style: solid;
        border-width: 5px;
        border-color: white;
        background-color: #3C5AFD;
        color: white;
        font-size: 18;
        font-weight: bold;
        padding-left: 4;
    }
    .request-action-image {
        width: 30;
        height: 30;
        vertical-align: center;
        horizontal-align: right;
    }
    .listItems {
        font-size: 30;
        height: 30;
    }
</style>
