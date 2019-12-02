<template>
  <Page>
    <StackLayout width="700" height="600" class="p-10" backgroundColor="#f0f8ff">
      <GridLayout columns="*,2*,*", width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="Add Friends" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout class="form">
        <SearchBar hint="Enter username here" @textChange="onTextChanged"/>
        <ListView for="user in friends" height="900">
          <v-template>
            <GridLayout columns="3*,3*">
              <Label col="0" :text="user.username" class="h3 font-weight-bold" verticalAlignment="center"></Label>
              <Button col="1" class="h5 bg-primary pull-right" text="Send Request" @tap="sendRequest" height="40"></Button>
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
      sendRequest() {
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
  }
</style>
