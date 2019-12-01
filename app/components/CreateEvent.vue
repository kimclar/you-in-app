<template>
  <ScrollView>
    <StackLayout width="400" height="500" backgroundColor="white" class="p-10">
      <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>

      <StackLayout class="form">
        <StackLayout class="input-field">
          <Label class="inputLabel" text="What?"></Label>
          <TextField backgroundColor="white" class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="When?"></Label>
          <TextField backgroundColor="white" class="input"></TextField>
          <!--<DatePicker class="date-picker"></DatePicker>
          <TimePicker class="date-picker"></TimePicker>-->
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="Where?"></Label>
          <TextField backgroundColor="white" class="input"></TextField>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="Who?"></Label>
          <ListView v-for="circleName in circles" height="1000">
            <template>
              <check-box :checked="isChecked" :text="circleName.name" textWrap="true"/>
            </template>
          </ListView>
        </StackLayout>

        <StackLayout class="input-field">
          <Label class="inputLabel" text="Details [Optional]"></Label>
          <TextField backgroundColor="white" class="input"></TextField>
        </StackLayout>

        <Button width="150" text="POST" backgroundColor="green" color="white"
                class="action-label" @tap="createEvent()"></Button>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</template>

<script>
  export default {
    computed: {
      hostedEvents() {
        return this.$store.getters.circles;
      }
    },
    methods: {
      createEvent() {
        // TODO
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
