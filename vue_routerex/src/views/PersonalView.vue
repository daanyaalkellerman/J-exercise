<template>
    <div>
        <h1>Jobs</h1>
        <p v-for="job in jobs" ::key="job.id">
            <router-link :to="{name: 'personalinfo',params:{id:job.id}}">
                <label>{{job.name}}</label>
            </router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            jobs:[]
        }
    },
    mounted(){
        axios.get('http://localhost:3000/jobs')
        .then(res => this.jobs = res.data)
        //  fetch('http://localhost:3000/jobs')
        // .then(res => res.json())
        // .then(data => this.jobs = data)
        // .catch(err => console.log(err.message))
    }
}
</script>
<style>
    label{
        cursor: pointer;
    }
</style>