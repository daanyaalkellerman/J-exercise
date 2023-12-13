<template lang="">
    <div>
        <h1>Jobs</h1>
        <p>This is the info</p>
        <!-- <p>{{$route.params.id}}</p> -->
        <p>{{id}}</p>

    </div>
</template>
<script>
export default {
    props:['id'],
    // id:$route.params.id
    data() {
        return {
            jobs:[
                {id:1,
                 name:'Teacher',
                 description: 'Teaching people'
                },
                {id:2,
                 name:'Developer',
                 description: 'Coding'
                },
                {id:3,
                 name:'Doctor',
                 description: 'Helping people'
                }
            ]
        }
    },
}
</script>
<style lang="">
    
</style>