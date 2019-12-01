<template>
  <ScrollView>
    <StackLayout width="700" height="400" class="p-10">
      <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label class="inputLabel" text="Nickname:"></Label>
          <TextField class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="Circles?"></Label>

          <StackLayout>
            <ListView v-for="friend in friends" height="1000">
              <template>
                <check-box :checked="isChecked" :text="friend.circles[0]" textWrap="true"/>
              </template>
            </ListView>
          </StackLayout>
        </StackLayout>

        <Button text="Save" color="white" backgroundColor="green"
                class="action-label" @tap="myCircles"></Button>
        <Button width="100" backgroundColor="red" color="white"
                class="btn btn-outline" text="Delete Friend" @tap="deleteFriend"/>
      </StackLayout>
    </StackLayout>
  </ScrollView>
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
</style>
