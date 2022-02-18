<!--DIDRIKS KODER -->
<template>
    <section class="row">
        <article class="row mt-5 border-bottom">
            <img class="row justify-content-start col-6" :src="getImage()">
            <div class="col-6 text-center">
            <h3>{{ title }}</h3>
            <p>{{type}}</p>
            <p>{{ price }},-</p>
            <p v-if="price > 1000">RARE</p>
            <p v-else>COMMON</p>
            </div>
        </article>
    </section>
</template>

<script>

export default {
    props: {
        image: String,
        title: String,
        type : String,  
        price: Number,
    }, 
    setup(props){
    const getImage = () => {
        let image; 

        try{ // Exception
            image = require( `@/assets/images/${ props.image }` ); 
        }catch{
            image = require( `@/assets/images/no-image.jpg` );
        }

        return image; 
    }

    return { getImage };
    }

}
</script>