<template>
    <div style="margin-top: 40px">
        <v-form>
            <v-container>
                <v-row style=" justify-content: center;">
                    <img src="@/assets/img/search.png" style="width: 20%" />
                </v-row>
                <v-row style=" justify-content: center;">
                    <p style="font-size: 18px;margin-top: 17px;margin-right: 20px">Date Set:</p>
                    <div style="margin-left: 0px">
                        <v-radio-group v-model="data_set" row>
                            <v-radio label="Life Style" value="1"></v-radio>
                            <v-radio label="Data Set 2" value="2"></v-radio>
                        </v-radio-group>
                    </div>
                </v-row>
                <v-row style=" justify-content: center;">
                    <p style="font-size: 18px;margin-top: 17px;margin-right: 20px">Operation:</p>
                    <div style="margin-left: 0px">
                        <v-radio-group v-model="operation" row>
                            <v-radio label="Query Processing" value="pro"></v-radio>
                            <v-radio label="Query Indexing" value="index"></v-radio>
                        </v-radio-group>
                    </div>
                </v-row>
                <v-row style=" justify-content: center;margin-top: 30px">
                    <v-col cols="8">
                        <v-row>
                            <v-text-field v-model="query" prepend-inner-icon="mdi-search-web" outlined clearable
                                label="Search" type="text">
                            </v-text-field>
                            <v-btn @click="submit" color="primary"
                                style=" border-radius: 20px; margin-top: 5px;  margin-left: 20px; padding: 22px 20px">
                                Search
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <v-snackbar right bottom color="red" text v-model="error_snackbar" timeout="5000">
            All fields are required
            <template v-slot:action="{ attrs }">
                <v-btn color="red" text v-bind="attrs" @click="error_snackbar = false">
                    close
                </v-btn>
            </template>
        </v-snackbar>
        <v-container v-if="response">
            <v-row style=" justify-content: center;">
                <v-col cols="8">
                    <h5>Result:</h5>
                    <v-row style=" justify-content: center;" v-if="operation == 'index'">
                        <v-simple-table style="margin: 10px 30px 30px; padding: 0px;">
                            <template v-slot:default>
                                <tbody>
                                    <tr v-for="(item, index) in data_indexing" :key="index">
                                        <td> {{ Object.keys(item)[0] }}</td>
                                        <td> {{ Object.values(item)[0] }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-row>
                    <v-row style=" justify-content: center;" v-if="operation == 'pro'">
                        <v-simple-table style="margin: 10px 30px 30px; padding: 0px;">
                            <template v-slot:default>
                                <tbody>
                                    <tr v-for="(item, index) in data_processing" :key="index">
                                        <td> {{ Object.keys(item)[0] }}</td>
                                        <td> {{ Object.values(item)[0] }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Search',
    components: {
    },
    data: () => ({
        query: '',
        data_set: null,
        operation: null,
        error_snackbar: false,
        response: false,
        data_processing: [
            // {
            //     "1": ["wtrev", "deytf", "ytdb", "utyht", "uitu"]
            // },
            // {
            //     "2": ["tetry", "yujh", "rtejhf", "treh", "etrhy"]
            // }
        ],
        data_indexing: [
            // {
            //     "dfghj": "[1]"
            // },
            // {
            //     "rtfyg": "[0]"
            // }
        ]

    }),
    methods: {
        submit() {
            // console.log(this.query)
            if (this.data_set == null || this.operation == null || this.query == '')
                this.error_snackbar = true
            else {
                if (this.operation == "pro")
                    this.query_pro()
                if (this.operation == "index")
                    this.query_index()
            }
        },
        query_pro() {
            console.log(this.query)
            const formData = new FormData()
            formData.append('query', this.query)
            this.axios.post(this.$store.state.url + "/query_processing/" + this.data_set, formData).then(res => {
                console.log(res.data)
                this.data_processing = res.data
                
            });
        },
        query_index() {
            const formData = new FormData()
            formData.append('query', this.query)
            this.axios.post(this.$store.state.url + "/query_indexing/" + this.data_set, formData).then(res => {
                console.log(res.data)
                this.data_indexing = res.data
                this.response = true
            });
        },
    },


};
</script>

<style lang="scss">
.v-input__slot {
    border-radius: 25px !important;
}
</style>
