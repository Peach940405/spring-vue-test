<template>
    <div>
        <span>여기는 홈페이지</span>
        <button @click="getAllUsers">Call Spring Boot</button>
        <h4>result: {{result}}</h4>
    </div>
</template>

<script>
    import MainRepository from '../vuex/MainRepository'

    export default {
        name: "HomePage",

        data() {
            return {
                result: []
            }
        },
        methods: {
            getAllUsers: function () {
                MainRepository.getAllUsers()
                    .then(response => {
                        let userLIst = response.data;
                        for (let index in response.data) {
                            console.log(userLIst[index])
                        }
                    }).catch(error => {
                        console.log(error);
                });
            }
        },
    }
</script>

<style scoped>

</style>
