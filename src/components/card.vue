<template>
   <div class="col-4">
       
        <b-card
            :title=title
            img-src="src/assets/img1.jpg"
            img-alt="Images"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mr-2 ml-2"
        >
            <img v-for="imgs in images" v-bind:src="img" />
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'mealcard',
    props: [ 'title', 'image' ,'img','imgs'],

    data(){

    }
}
</script>

<style>

</style>