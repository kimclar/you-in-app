<template>
  <StackLayout width="250" height="150" backgroundColor="white" class="p-10">
    <StackLayout height="40"></StackLayout>
    <Label fontSize="20" text="You are now friends!" textWrap="true" textAlignment="center"/>
    <StackLayout height="20"></StackLayout>
    <Button width="100" height="70" backgroundColor="#3cb371" color="white"
            class="btn btn-outline" text="OK" @tap="$modal.close()"/>
  </StackLayout>
</template>

<script>
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
</style>
