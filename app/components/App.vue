<template lang="html">
  <BottomNavigation>
    <TabStrip>
      <TabStripItem class="navigation__item">
        <Label text="Home"></Label>
        <Image src.decode="font://&#xf015;" class="fas t-36"></Image>
      </TabStripItem>
      <TabStripItem class="navigation__item">
        <Label text="Hosted Events"></Label>
        <Image src.decode="font://&#xf073;" class="far t-36"></Image>
      </TabStripItem>
      <TabStripItem class="navigation__item">
        <Label text="Friends"></Label>
        <Image src.decode="font://&#xf500;" class="fas t-36"></Image>
      </TabStripItem>
      <TabStripItem class="navigation__item">
        <Label text="Circles"></Label>
        <Image src.decode="font://&#xf0c0;" class="fas t-36"></Image>
      </TabStripItem>
    </TabStrip>

    <TabContentItem>
      <Frame>
        <Items/>
      </Frame>
    </TabContentItem>

    <TabContentItem>
      <Frame>
        <HostedEvents/>
      </Frame>
    </TabContentItem>

    <TabContentItem>
      <Frame>
        <MyFriends/>
      </Frame>
    </TabContentItem>

    <TabContentItem>
      <Frame>
        <MyCircles/>
      </Frame>
    </TabContentItem>

  </BottomNavigation>
</template>

<script>
  import Items from "./Items.vue";
  import Browse from "./MyFriends.vue";
  import Search from "./MyCircles.vue";
  import HostedEvents from "./HostedEvents";
  import MyCircles from "./MyCircles";
  import MyFriends from "./MyFriends"

  export default {
    components: {
      HostedEvents,
      Items,
      Browse,
      Search,
      MyCircles,
      MyFriends
    }
  };
</script>

<style lang="scss">
  // Start custom common variables
  @import "~@nativescript/theme/scss/variables/aqua";
  // End custom common variables

  // Custom styles

</style>
