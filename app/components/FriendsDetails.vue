<template>
  <FlexboxLayout flexDirection="column" justifyContent="space-between">
    <StackLayout width="300" height="400" class="p-10">
      <GridLayout columns="*,3*,*" , width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="Friend Details" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white"
               @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout>
        <Label text="Username:" class="friendLabel"></Label>
        <Label :text="friend.username" class="infoText"></Label>

        <Label text="Nickname:" class="friendLabel"></Label>
        <Textfield v-model="fnickname" :text="friend.nickname" class="infoText" ></Textfield>

        <Label class="friendLabel" text="Circles they are in:"></Label>

        <ListView for="circle in circles" width="300" height="250">
          <v-template>
            <checkbox :checked="circle.isFriendIncluded" :text="circle.name" class="infoText" @tap="circle.isFriendIncluded = !circle.isFriendIncluded"/>
          </v-template>
        </ListView>

      </StackLayout>
    </StackLayout>

    <Button width="200" class="h3" color="white"
            backgroundColor="green" text="Save" @tap="saveChanges"></Button>
    <Button width="200" class="h3" color="white" backgroundColor="red" text="Delete" @tap="deleteFriend(friend)"></Button>
  </FlexboxLayout>
</template>

<script>
  import ConfirmDeleteFriend from "./ConfirmDeleteFriend";
  import ConfirmChangesSaved from "./ConfirmChangesSaved";

  export default {
    props: {
      friend: {
        type: Object,
        default: function () {
          return {
            username: "Username",
            nickname: "Nickname",
          }
        }
      }
    },
    data() {
      return {
        fusername: this.friend.username,
        fnickname: this.friend.nickname,
        fcircles: []
      }
    },
    computed: {
      friends() {
        return this.$store.getters.friends;
      },
      circles() {
        let circleData = this.$store.getters.circles;
        let i;
        for (i = 0; i < circleData.length; i++) {
          let circle = circleData[i];
          circle.isFriendIncluded = circle.includedFriends.includes(this.friend.username);
          if (circle.isFriendIncluded === true && !this.fcircles.includes(circle.name)){
            this.fcircles.push(circle.name);
          }
        }
        return circleData;
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
      },
      saveChanges() {
        this.$store.commit('editFriend', {username: this.fusername, nickname: this.fnickname});
        let i;
        for (i=0; i < this.circles.length; i++){
          console.log(this.circles[i].name + " IS " + this.circles[i].isFriendIncluded);
          if (this.circles[i].isFriendIncluded && !this.circles[i].includedFriends.includes(this.fusername)){
            console.log(this.circles[i].name + "ADDED")
            this.$store.commit('addCircleFriend', {circleName: this.circles[i].name, friendUsername: this.friend.username});
          } else if (!this.circles[i].isFriendIncluded && this.circles[i].includedFriends.includes(this.fusername)){
            console.log(this.circles[i].name + "REMOVED")
            this.$store.commit('removeCircleFriend', {circleName: this.circles[i].name, friendUsername: this.friend.username});
          }
        }
        this.$modal.close();
        this.$store.commit('addFriend', {username: "r3fr3sh3r", nickname: "", circles: []});
        this.$store.commit('removeFriend', "r3fr3sh3r");
        this.$showModal(ConfirmChangesSaved);
      },
      onCheckChange(circle) {
        circle.isFriendIncluded = !circle.isFriendIncluded;
      },
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
    font-size: 16;
    padding-top: 4;
  }

</style>
