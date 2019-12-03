<template>
  <Page>
    <StackLayout width="700" height="600" class="p-10">
      <GridLayout columns="*,2*,*", width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="Add Friends" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout class="form">
        <SearchBar hint="Enter username here" @textChange="onTextChanged"/>
        <ListView for="user in nonFriends" height="900">
          <v-template>
            <GridLayout columns="3*,3*">
              <Label col="0" :text="user.username" class="h3 font-weight-bold" verticalAlignment="center"></Label>
              <Button v-if="!user.requested" col="1" class="h5 bg-primary pull-right" text="Send Request" @tap="sendRequest(user.username)" height="40"></Button>
              <Button v-else col="1" class="h5 bg-primary pull-right" text="Request Sent" height="40" backgroundColor="#696969"></Button>
            </GridLayout>
          </v-template>
        </ListView>
      </StackLayout>

    </StackLayout>
  </Page>
</template>

<script>
  export default {
    computed: {
      nonFriends(){
        return this.$store.getters.nonFriends;
      },
      allUsers() {
        return this.$store.getters.allUsers;
      },
      friends() {
        return this.$store.getters.friends;
      }
    },
    methods: {
      onTextChanged() {
      },
      sendRequest(user) {
        this.$modal.close();
        this.$store.commit('editNonFriend', {username: user, requested: true});
        let dialogs = require("tns-core-modules/ui/dialogs");
        dialogs.alert({
          title: "",
          message: "Request Sent!",
          okButtonText: "OK"
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/aqua";
  // End custom common variables

  // Custom styles
  .modal-title {
    color: white;
    background-color: #3C5AFD;
    font-size: 24;
    font-weight: bold;
    vertical-align: center;
    text-align: left;
  }
</style>
