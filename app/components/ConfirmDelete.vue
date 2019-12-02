<template>
  <StackLayout width="300" height="200" backgroundColor="white" class="p-10">
    <StackLayout height="100">
      <StackLayout height="30"></StackLayout>
      <Label fontSize="20" text="Are you sure you want to reject this request?" textWrap="true" textAlignment="center"/>
    </StackLayout>
    <GridLayout columns="*, *">
      <Button col="0" width="100" backgroundColor="#cd5c5c" color="white"
            class="btn btn-outline" text="YES" @tap="confirmReject(request)"/>
      <Button col="1" width="100" backgroundColor="#3cb371" color="white"
            class="btn btn-outline" text="NO" @tap="$modal.close()"/>
    </GridLayout>
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
    },
    methods: {
      confirmReject(request){
        this.$store.commit('removeFriendRequest', request);
        this.$modal.close();
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
</style>
