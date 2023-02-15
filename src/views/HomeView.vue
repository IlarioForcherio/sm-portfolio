<template>
    <div class="home">
        <div class="container-fluid w-95">
            <!-- silvia-montinaro -->
            <div class="row pt-3 align-items-center">
                <div class="col-md-12 col-lg-2 text-end">
                    <div> SILVIA MONTINARO</div>
                </div>
                <!-- line -->
                <div class="col-md-12 col-lg-10">
                    <div class="line"></div>
                </div>
    
            </div>
            <!-- text-about -->
            <div class="row">
                <!-- about -->
                <div class="col-1"></div>
                <div class="col-sm-12 col-md-12 col-lg-3  d-flex align-items-center">
                    <p>Mi è sempre piaciuto giocare con le parole. Fino a quando ho scoperto di poterci fare molto di più. Ho imparato che ogni lettera accostata ha il suo peso, il suo valore, un suono ben definito e un posto giusto in cui rientrare. Saperle
                        usare nel modo migliore, per semplificare o approfondire, è la sfida che mi pongo ogni giorno. Un buon contenuto è come un cassetto in perfetto ordine, dove trovare immediatamente quello che ci serve senza perderci in cianfrusaglie.</p>
                </div>
                <!-- work-project-contact -->
                <div class="pt-3 pb-3 col-sm-12 col-md-12 col-lg-3">
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
            <div class="row align-items-center ">
                <div class="col-md-12 col-lg-2 text-end">
                    <div class="">----COPYWRITER----</div>
                </div>
                <!-- line -->
                <div class="col-md-12 col-lg-10">
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
    font-size: 12.3rem;
    line-height: 10.5rem;
}

//-----------------------MEDIA-QUERY-------------------------------//
@media screen and (min-width:1700px) and (max-width: 2000px) {
    .txt {
       padding-top: 2px;
        font-size: 19rem;
        line-height: 15rem;
    }
}
@media screen and (min-width:1500px) and (max-width: 1700px) {
    .txt {
       
        font-size: 16rem;
        line-height: 15rem;
    }
}

@media screen and (min-width:375px) and (max-width: 437px) {
    .txt {
        
        font-size: 6rem;
        line-height: 5rem;
    }
}





</style>
