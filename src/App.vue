<template>
  <v-app>
    <div >
      <v-main>
        <!-- <sidebar /> -->
        <navbar />
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
// import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar.vue';
export default {
  name: 'App',
  components: {
    // Sidebar,
    Navbar
  },
  data: () => ({
  }),
  computed: {
    // isCollapsed() {
    //   return this.$store.state.isCollapsed
    // }
  },
  created() {
    
  },


};
</script>

<style lang="scss">
*{
  letter-spacing: normal !important;
}
#app{
  // font-family: 'Almarai', sans-serif !important;
  direction: ltr;
  text-align: justify !important;
}
.v-application {
  background-color: #f5f7fc !important;
}

// @media (max-width: 767px) {
//   .v-main {
//     padding-left: 65px !important;
//   }
// }

// @media (min-width: 767px) {
// .collapsed {
//     padding-left: 65px;
//     transition: 0.3s padding-left ease;
//   }

//   .not-collapsed {
//     padding-left: 300px;
//     transition: 0.3s padding-left ease;
//   }
// }


// @font-face {
//   font-family: "Almarai";
//   src: local("Almarai"),
//     url(assets/font/Almarai-Regular.ttf) format("truetype");
//     font-display: swap
// }

</style>
