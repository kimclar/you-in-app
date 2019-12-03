<template lang="html">
  <Page>
    <ActionBar>
      <Label text="You In?" class="action-label"></Label>
    </ActionBar>

    <card-view margin="50" elevation="40" height="350" radius="5">
      <StackLayout class="form p-20">
      <Label class="title" text="Log In"/>
        <Label></Label>
      <StackLayout class="input-field">
        <Label class="inputLabel" text="Username or Email*"></Label>
        <TextField class="input"></TextField>
      </StackLayout>

      <StackLayout class="input-field">
        <Label class="inputLabel" text="Password*"></Label>
        <TextField class="password"></TextField>
      </StackLayout>

      <Button text="Log In" color="white" backgroundColor="blue"
              class="button-label" @tap="home"></Button>

      <Label color="red" text="Don't have an account?" class="button-label" @tap="register"></Label>

    </StackLayout>
    </card-view>
  </Page>
</template>

<script>
  import Register from "./Register";
  import Items from "./Home";

  export default {
    data() {
      return {
        message: "Login"
      };
    },
    methods: {
      register() {
        this.$navigateTo(Register)
      },
      home() {
        this.$navigateTo(Items)
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables
  // Custom styles
  .action-label {
    color: #ffffff;
    font-size: 20;
    font-weight: bold;
    vertical-align: center;
  }

  .title {
    text-align: center;
    font-size: 20;
    font-weight: bold;
  }

  .button-label {
    font-size: 16;
    font-weight: bold;
    text-align: center;
  }

  .inputLabel {
    font-size: 15;
  }

</style>
