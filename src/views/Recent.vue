<template>
  <div>
    <h2>This is recent page</h2>
    <br>
    <v-btn @click="logout"> logout</v-btn>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    methods:{
      logout: function(){
        localStorage.removeItem("token");
        this.$router.push("/login");
        
      }
    }
  }
</script>
