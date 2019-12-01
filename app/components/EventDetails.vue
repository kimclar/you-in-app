<template>
  <ScrollView>
    <StackLayout width="700" height="400" class="p-10">
      <Label class="pull-right h2 action label icon fas" text.decode="&#xf057;" @tap="$modal.close()"/>
      <ListView v-for="event in events" height="900">
        <template>
          <StackLayout>
            <Label :text="event.title" class="h2 bold"></Label>
            <Label :text="event.dateTime" class="h3 font-weight-bold"></Label>
            <Label :text="event.location" class="h3 font-weight-bold"></Label>
            <Label :text="event.details" class="h3 font-weight-bold"></Label>
            <Label class="guests" text="Who's in?"></Label>
            <Label :text="event.host[0].name" class="h3 font-weight-bold"></Label>
            <Label :text="event.attendees[0]" class="h3 font-weight-bold"></Label>

            <Button width="200" class="h3" color="white"
                    backgroundColor="blue" text="Count me In!" @tap="sendRequest"></Button>
          </StackLayout>
        </template>
      </ListView>
    </StackLayout>
  </ScrollView>
</template>

<script>
  export default {
    computed: {
      events() {
        return this.$store.getters.events;
      }
    }
  };
</script>

<style scoped lang="scss">
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";
  // End custom common variables

  // Custom styles
  .guests {
    text-decoration: underline;
    font-size: 20;
  }
</style>
