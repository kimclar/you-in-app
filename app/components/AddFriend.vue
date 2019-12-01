<template>
  <ScrollView>
    <StackLayout width="700" height="600" class="p-10">
      <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>

      <StackLayout class="form">
        <SearchBar hint="Enter username" @textChange="onTextChanged"/>
        <ListView for="user in friends" height="900">
          <v-template>
            <StackLayout>
              <Label :text="user.username" class="h3 font-weight-bold"></Label>
              <Button class="h5 bg-primary pull-right" text="Send Request" @tap="sendRequest"></Button>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>

    </StackLayout>
  </ScrollView>
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
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
</style>
