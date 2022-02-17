
<template>
    <section class="row">
        <article v-if="onSale" class="row col-12 border border-primary pt-2 mt-5">
            <img class="col-6" :src="getImage()">
            <div class="col-6 text-center">
            <h3>{{ title }}</h3>
            <p>{{type}}</p>
            <p>{{ price }},-</p>
            </div>
        </article>
        <article v-else class="row border pt-2 mt-5">
            <img class="col-6" :src="getImage()">
            <div class="col-6 text-center">
            <h3>{{ title }}</h3>
            <p>{{type}}</p>
            <p>{{ price }},-</p>
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
        onsale: Boolean
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