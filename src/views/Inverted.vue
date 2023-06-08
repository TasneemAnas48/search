<template>
    <div style="margin-top: 40px">
        <v-form>
            <v-container>
                <v-row style=" justify-content: center;">
                    <v-col cols="8">
                        <v-simple-table style="margin: 10px 30px 30px; padding: 0px;">
                            <template v-slot:default>
                                <tbody>
                                    <tr v-for="(item, index) in data" :key="index">
                                        <td> {{ Object.keys(item)[0] }}</td>
                                        <td> {{ Object.values(item)[0] }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-col>
                    <v-col cols="4">
                        <p style="font-size: 18px;margin-top: 17px;margin-right: 20px">Date Set:</p>
                        <div style="margin-left: 0px">
                            <v-radio-group v-model="data_set">
                                <v-radio label="Life Style" value="1"></v-radio>
                                <v-radio label="Data set 2" value="2"></v-radio>
                            </v-radio-group>
                        </div>
                        <v-btn @click="submit" color="primary">
                            Inverted Index
                        </v-btn>
                    </v-col>
                </v-row>
                
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: 'Inverted',
    components: {
    },
    data: () => ({
        data_set: null,
        data: [
            // {
            //     "klmlk": "[13]"
            // },
            // {
            //     "pok": "[41, 45]"
            // }
        ]

    }),
    methods: {
        submit() {
            console.log(this.data_set)
            if (this.data_set != null) {
                this.axios.get(this.$store.state.url + "/inverted_index/" + this.data_set)
                .then(res => {
                    console.log(res.data)
                    this.data = res.data
                });
            }
        }
    },


};
</script>

<style lang="scss">
.v-input__slot {
    border-radius: 25px !important;
}

.v-label {
    margin-bottom: 0px;
}
</style>
