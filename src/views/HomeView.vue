<template>
    <div class="home">
        <div class="container-fluid w-95">
            <!-- silvia-montinaro -->
            <div class="row pt-3 align-items-center">
                <div class="col-2 text-end">
                 <div> SILVIA MONTINARO</div>
                </div>
                <!-- line -->
                <div class="col-10">
                    <div class="line"></div>
                </div>
    
            </div>
            <!-- text-about -->
            <div class="row">
                <!-- about -->
                <div class="col-1"></div>
                <div class="col-3  d-flex align-items-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio explicabo quia possimus rerum sit omnis, maxime porro dolor dolore, voluptates expedita architecto commodi quibusdam magnam. Corrupti, iusto. Deserunt, repellendus.</p>
                </div>
                <!-- big-txt -->
                <div class="col-8">
                    <a href="/work">
                        <h2 class="txt">Work</h2>
                    </a>
                    <a href="/projects">
                        <h2 class="txt">Projects</h2>
                    </a>
                    <a href="/contact">
                        <h2 class="txt">Contact</h2>
                    </a>
                </div>
            </div>
            <!-- copywriter -->
            <div class="row align-items-center">
                <div class="col-2 ">
                <div class="">-- COPYWRITER --</div>  
                </div>
            <!-- line -->
            <div class="col-10">
                <div class="line"></div>
            </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    components: {

    }
}
</script>

<style lang="scss" scoped>
.w-95 {
    width: 95%;
    margin: auto;
}

.line {
    border: 1px solid black;
}

a {
    text-decoration: none;
    color: black;
    :hover {
        color: rgb(128, 4, 128);
    }
}

.bb {
    border: 1px solid black;
    border-radius: 10px;
}

.txt {
    //--webkit-transform: scaleX(1.1);
    //transform: scaleX(1.1);
    font-size: 8rem;
}
</style>
