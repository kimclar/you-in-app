<template>
  <StackLayout width="250" height="150" backgroundColor="white" class="p-10">
    <StackLayout height="25"></StackLayout>
    <Label fontSize="20" text="Your changes
    have been saved!" textWrap="true" textAlignment="center"/>
    <StackLayout height="10"></StackLayout>
    <Button width="100" height="100" backgroundColor="#3cb371" color="white"
            class="btn btn-outline" text="OK" @tap="$modal.close()"/>
  </StackLayout>
</template>

<script>

</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "../../node_modules/@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles

</style>
