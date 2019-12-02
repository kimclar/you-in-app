<template>
  <StackLayout width="250" height="200" backgroundColor="white" class="p-10">
    <StackLayout height="40"></StackLayout>
    <Label fontSize="20" :text="request.fromUser" class="requestor-name" textWrap="true" textAlignment="center"/>
    <Label fontSize="20" text="is now your friend!" textWrap="true" textAlignment="center"/>
    <StackLayout height="15"></StackLayout>
    <Button width="100" height="100" backgroundColor="#3cb371" color="white"
            class="btn btn-outline" text="OK" @tap="$modal.close()"/>
  </StackLayout>
</template>

<script>
  export default {
    props: {
      request: {
        type: Object,
        default: function () {
          return {
            fromUser: "fromUser",
            toUser: "toUser"
          }
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
  .requestor-name {
    font-size: 12;
    color: cadetblue;
  }
</style>
