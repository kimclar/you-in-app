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
        <Label col="1" :text="friends.username" verticalAlignment="center" horizontalAlignment="left"></Label>
      </GridLayout>

      <StackLayout height="10"></StackLayout>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label col="0" text="Nickname:" fontSize="15" class="friendLabel"
                 verticalAlignment="center"></Label>
          <Label col="1" :text="friends.nickname" class="friendLabel"
                 verticalAlignment="center" horizontalAlignment="left"></Label>
        </StackLayout>

        <StackLayout height="10"></StackLayout>

        <StackLayout class="input-field" >
          <Label class="friendLabel" text="Circles they are in:" fontSize="15"></Label>

          <StackLayout>
            <ListView for="i in friends.circles" height="1000">
              <v-template>
                <Label :text="i" textWrap="true"/>
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
  import ConfirmDeleteFriend from "./ConfirmDeleteFriend";

  export default {
    computed: {
      friends() {
        return this.$store.getters.friends;
      }
    },
    props: {
      friends: {
        type: Object,
        default: function () {
          return {
            username: "Username",
            nickname: "Nickname",
            circles: ["Circle1", "Circle2","Circle3","Circle4"]
          }
        }
      }
    },
    methods: {
      deleteFriend() {
        this.$showModal(ConfirmDeleteFriend)
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

  .friendLabel {
    padding-top: 8;
    text-decoration: underline;
    font-weight: bold;
    font-size: 20;
  }
</style>
