<template>
  <Page>
    <StackLayout width="300" height="500" class="p-10">
      <GridLayout columns="*,3*,*", width="700" height="40" backgroundColor=#3C5AFD>
        <Label text="Create Circle" col="1" verticalAlignment="center" class="modal-title"></Label>
        <Label col="2" class="center h2 action label icon fas" text.decode="&#xf057;" color="white" @tap="$modal.close()" verticalAlignment="center" horizontalAlignment="center"/>
      </GridLayout>

      <StackLayout height="10"></StackLayout>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label class="inputLabel" text="Circle Name:" fontSize="15"></Label>
          <TextField class="input"></TextField>
        </StackLayout>

        <StackLayout height="10"></StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="Who's In?" fontSize="15"></Label>
          <StackLayout>
            <ListView for="friend in friends" height="1000">
              <v-template>
                <check-box :checked="isChecked" :text="friend.nickname" textWrap="true"/>
              </v-template>
            </ListView>
          </StackLayout>
        </StackLayout>

        <Button text="SAVE" color="white" backgroundColor="green" class="action-label" @tap="myCircles"></Button>
      </StackLayout>
    </StackLayout>
  </Page>
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
  .modal-title {
    color: white;
    background-color: #3C5AFD;
    font-size: 24;
    font-weight: bold;
    vertical-align: center;
  }
</style>
