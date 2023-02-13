<template>
    <div id="app">
        <div class="vh-100">
            <!-- <HeaderComp/> -->
            <!-- navbar -->
            <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <router-link aria-current="page" class="navbar-brand" to="/">Home</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link aria-current="page" class="nav-link active" to="/work">Work</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link aria-current="page" class="nav-link active" to="/projects">Projects</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link aria-current="page" class="nav-link active" to="/contact">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> -->
            <router-view/>
        </div>
    </div>
</template>

<script>
//import HeaderComp from './components/HeaderComp.vue'

export default {
    name: 'HeaderComp',
    components: {
        //HeaderComp
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif; // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
}

.vh-100{
  height:100vh;
}

// nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
