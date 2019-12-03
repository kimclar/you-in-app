<template>

  <FlexboxLayout flexDirection="column" justifyContent="space-between">

    <StackLayout width="300" height="400" class="p-10">

      <GridLayout columns="*,3*,*", width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="Friend Details" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout>
        <Label text="Username:" class="friendLabel"></Label>
        <Label :text="friend.username" class="infoText"></Label>

        <Label text="Nickname:" class="friendLabel"></Label>
        <Label :text="friend.nickname" class="infoText"></Label>

        <Label class="friendLabel" text="Circles they are in:"></Label>
        <template v-for="i in friend.circles">
          <Label :text="i" class="infoText"/>
        </template>
      </StackLayout>
    </StackLayout>


      <Button width="200" class="h3" color="white"
              backgroundColor="blue" text="Edit" @tap="sendRequest"></Button>
      <Button width="200" class="h3" color="white"
              backgroundColor="red" text="Delete" @tap="deleteFriend(friend)"></Button>
  </FlexboxLayout>

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
      friend: {
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
      deleteFriend(passFriend) {
        this.$showModal(ConfirmDeleteFriend, {
          props: {
            friend: passFriend,
            animated: true,
            transition: {
              name: "slide",
              duration: 200,
              curve: "ease"
            }
          }
        })
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
    font-size: 16;
  }

  .infoText {
    color: voilet;
    font-size: 16;
    padding-top: 4;
  }

</style>
