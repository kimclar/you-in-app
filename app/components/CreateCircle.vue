<template>
  <ScrollView>
    <StackLayout width="300" height="400" class="p-10">
      <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label class="inputLabel" text="Circle Name:"></Label>
          <TextField class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="Who's In?"></Label>
          <StackLayout>
            <ListView v-for="friend in friends" height="1000">
              <template>
                <check-box :checked="isChecked" :text="friend.nickname" textWrap="true"/>
              </template>
            </ListView>
          </StackLayout>
        </StackLayout>

        <Button text="SAVE" color="white" backgroundColor="green" class="action-label" @tap="myCircles"></Button>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
  export default {
    data() {
      return {
        isChecked: false,
      }
    },
    computed: {
      friends() {
        return this.$store.getters.friends;
      }
    },
    methods: {
      myCircles() {
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
</style>
