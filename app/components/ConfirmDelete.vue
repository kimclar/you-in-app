<template>
  <StackLayout width="300" height="250" backgroundColor="white" class="p-10">

    <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>

    <Label class="h3 text-center" text="Are you sure you want to delete this?"/>
    <Button width="100" backgroundColor="green" color="white"
            class="btn btn-outline" text="YES" @tap="$modal.close()"/>
    <Button width="100" backgroundColor="red" color="white"
            class="btn btn-outline" text="NO" @tap="$modal.close()"/>
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
