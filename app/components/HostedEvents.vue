<template>
  <Page>
    <ActionBar>
      <GridLayout columns="*,2*,*" horizontalAlignment="right">

        <Label text="My Hosted Events" col="1" class="action-label"></Label>
        <StackLayout col="2" @tap="addEventTap" verticalAlignment="center">
          <Image src="~/components/icons/addEvent.png" class="action-image"></Image>

        </StackLayout>
      </GridLayout>
    </ActionBar>

    <ListView for="event in hostedEvents" @itemTap="onItemTap">
      <v-template>
        <card-view class="cardStyle" margin="10" elevation="40" radius="5">
          <StackLayout>
            <label class="listItems" :text="event.title"></label>
            <GridLayout columns="6*,4*">
              <Label col="0" class="secondaryListItems" :text="event.dateTime"></Label>
              <Label col="1" class="secondaryListItems pull-right" :text="event.attendees.length+' people'"></Label>
            </GridLayout>
          </StackLayout>
        </card-view>
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
      addEventTap () {
        this.$showModal(CreateEvent)
      },
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

  // End custom common variables

  // Custom styles
  .action-image {
    width: 40;
    height: 40;
    vertical-align: center;
    horizontal-align: right;
  }


  .action-label {
    color: #ffffff;
    font-size: 20;
    font-weight: bold;
    vertical-align: center;
  }

  .listItems {
    font-size: 18;
    font-weight: bold;
  }

  .secondaryListItems {
    font-size: 14;
    color: indigo;
  }

</style>
