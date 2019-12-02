<template>
  <Page>
    <StackLayout width="700" height="500" class="p-10">
      <GridLayout columns="*,3*,*", width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="Friend Details" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout height="10"></StackLayout>

      <GridLayout columns="2*,4*" height="20">
        <Label col="0" text="Username:" fontSize="15" verticalAlignment="center"></Label>
        <Label col="1" text="USERNAME" verticalAlignment="center" horizontalAlignment="left"></Label>
      </GridLayout>

      <StackLayout height="10"></StackLayout>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label class="inputLabel" text="Nickname:" fontSize="15"></Label>
          <TextField class="input"></TextField>
        </StackLayout>

        <StackLayout height="10"></StackLayout>

        <StackLayout class="input-field" >
          <Label class="inputLabel" text="Circles:" fontSize="15"></Label>

          <StackLayout>
            <ListView for="friend in friends" height="1000">
              <v-template>
                <check-box :text="friend.circles[0]" textWrap="true"/>
              </v-template>
            </ListView>
          </StackLayout>
        </StackLayout>

        <Button text="Save" color="white" backgroundColor="green"
                class="action-label" @tap="myCircles"></Button>
        <Button width="100" backgroundColor="red" color="white"
                class="btn btn-outline" text="Delete Friend" @tap="deleteFriend"/>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
  import ConfirmDelete from "./ConfirmDelete";

  export default {
    computed: {
      friends() {
        return this.$store.getters.friends;
      }
    },
    methods: {
      deleteFriend() {
        this.$showModal(ConfirmDelete)
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
  .modal-title {
    color: white;
    background-color: #3C5AFD;
    font-size: 24;
    font-weight: bold;
    vertical-align: center;
  }
  .section-title {
    text-decoration: underline;
    font-size: 15;
  }
</style>
