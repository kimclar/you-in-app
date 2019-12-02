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

        <StackLayout height="1000">
            <Label text="Pending Requests" class="section-title"></Label>
            <ListView for="request in friendRequests" height="100" >
                <v-template>
                    <GridLayout columns="3*,*,*" orientation="horizontal">
                        <Label :text="request.fromUser" col="0" textWrap="true"></Label>
                        <StackLayout col="1" @tap="acceptRequestTap">
                            <Image src="~/components/icons/acceptRequest.png" class="request-action-image"></Image>
                        </StackLayout>
                        <StackLayout col="2" @tap="rejectRequestTap">
                            <Image src="~/components/icons/rejectRequest.png" class="request-action-image"></Image>
                        </StackLayout>
                    </GridLayout>
                </v-template>
            </ListView>
            <Label text="Friends" class="section-title"></Label>
            <TextField v-model="textFieldValue" hint="Search friend by nickname..." />
            <ListView for="friend in friends" height="1000">
                <v-template>
                    <Label :text="friend.nickname" textWrap="true" @tap="friendDetails"></Label>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import AddFriend from './AddFriend';
    import ConfirmDelete from "./ConfirmDelete";
    import FriendsDetails from "./FriendsDetails";
    import ConfirmAccept from "./ConfirmAccept";

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
            acceptRequestTap () {
                this.$showModal(ConfirmAccept)
            },
            rejectRequestTap(){
                this.$showModal(ConfirmDelete)
            },
            friendDetails(){
                this.$showModal(FriendsDetails)
            },
            addFriendTap(){
                console.log("add friend!");
                this.$showModal(AddFriend)
            }
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
        background-color: #CCCCCC;
        color: black;
        font-size: 18;
        font-weight: bold;
    }
    .request-action-image {
        width: 30;
        height: 30;
        vertical-align: center;
        horizontal-align: right;
    }
</style>
