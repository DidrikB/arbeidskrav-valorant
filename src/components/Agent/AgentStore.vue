<template>
    <section>
        <article class=" border border-solid pt-2 mt-5">
            <img class="col-6" :src="getImage()">
            <h3>{{title}}</h3>
            <p>Role: {{type}}</p>
            <p>Difficulty: {{difficulty}}</p>

        </article>
    </section>
</template>

<script>



export default {
    props: {
        image: String,
        title: String,
        type: String,
        difficulty: String,
    },
    setup(props){
        const getImage = () =>{
            let image;

            try{
                image = require( `@/assets/images/${ props.image }` );
            }catch{
             image = require( `@/assets/images/no-image.jpg` );
        }
        return image;
    }
    return{getImage};
    }
}
</script>
