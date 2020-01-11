<template>
<div>
<li v-for="user in users" v-bind:key="user.email"> username::{{user.name}}  </li>
</div>
</template>

<script>
import db from './firebaseinit'
export default {
    name: 'viewUsers',
    data(){
        return{
            users: []
        }
    },
    created(){
        db.collection('users').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data())
                const data = {
                    'email': doc.data().email,
                    'name': doc.data().name,
                    'password': doc.data().password,
                    'subscribed': doc.data().subscribed

                }
                this.users.push(data)
            })
        })
    }
}
</script>

<style scoped>

</style>