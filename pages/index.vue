
<template>
<div>
 <v-card
    class="mx-auto"
    max-width="100%"
  >


    <v-toolbar
      color="indigo"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Moralis Nuxt JS Boilerplate</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <v-row>
    <v-col cols="12">
      <div class="text-center text-h5 text-red mt-5">
             <v-btn @click="login()" color="primary">
              Connect Wallet
            </v-btn>
            </div>

    </v-col>
  </v-row>
</div>


</template>
<script>

export default {
  data(){
    return {
      blockaddress:''
    }
  },
  methods:{
    login(){
      this.$moralis.Web3.authenticate().then(res => {
        console.log(res);
        }).catch(err => {
          console.log(err);

        });

      // this.$moralis.Web3.authenticate().then(function (user) {
      //   console.log(user.get('ethAddress'))
      //   })
    },

  }
}
</script>