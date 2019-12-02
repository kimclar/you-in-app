<template>
  <Page>
    <ActionBar>
      <GridLayout columns="*,2*,*" horizontalAlignment="right">
        <Label text="Hosted Events" col="1" class="action-label"></Label>
        <StackLayout col="2" @tap="createEvent">
          <Label text.decode="&#xf271;" col="2" class="action-label icon fas"></Label>
        </StackLayout>
      </GridLayout>
    </ActionBar>

    <ListView for="event in hostedEvents" @itemTap="onItemTap">
      <v-template>
        <StackLayout orientation="horizontal">
          <Label class="h2" :text="event.title" textWrap="true"></Label>
        </StackLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
  import HostedEventDetails from "./HostedEventDetails";
  import CreateEvent from "./CreateEvent";

  export default {
    computed: {
      hostedEvents() {
        console.log("hostedEvents = " + this.$store.getters.hostedEvents);

        return this.$store.getters.hostedEvents;
      }
    },
    methods: {
      onItemTap(args) {
        const view = args.view;
        const tappedItem = view.bindingContext;

        this.$showModal(HostedEventDetails, {
          props: {
            event: tappedItem,
            animated: true,
            transition: {
              name: "slide",
              duration: 200,
              curve: "ease"
            }
          }
        });
      },
      createEvent() {
        this.$showModal(CreateEvent);
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/blue";

  .action-label {
    color: #ffffff;
    font-size: 20;
    font-weight: bold;
    vertical-align: center;
  }
</style>
