<template>
    <b-navbar>
        <b-collapse id="nav-collapse" is-nav style="justify-content: center">
            <b-navbar-nav style="column-gap: 10px">
                <!-- <v-btn-toggle v-model="toggle" group color="primary accent-3"> -->
                <v-btn @click="toggle = 'data-pre'" color="primary" :text="!data_pre" :outlined="!data_pre">
                    Data Prepocessing
                </v-btn>
                <v-btn @click="toggle = 'inverted'" color="primary" :text="!inverted" :outlined="!inverted">
                    Inverted Index
                </v-btn>
                <v-btn @click="toggle = 'query-indexing'" color="primary" :text="!query_indexing"
                    :outlined="!query_indexing">
                    Query Indexing
                </v-btn>
                <v-btn @click="toggle = 'query-processing'" color="primary" :text="!query_processing"
                    :outlined="!query_processing">
                    Query Processing
                </v-btn>
                <v-btn @click="toggle = 'result'" color="primary" :text="!result" :outlined="!result">
                    Result
                </v-btn>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

export default {
    name: 'Navbar',

    data: () => ({
        toggle: '',
        route: '',
    }),
    watch: {
        toggle(newVal) {
            // if (this.route != newVal)
                this.$router.replace({ name: newVal });
        }
    },
    computed: {
        currentToggle() {
            return this.toggle;
        },
        data_pre() {
            if (this.toggle == 'data-pre')
                return true
            else
                return false
        },
        inverted() {
            if (this.toggle == 'inverted')
                return true
            else
                return false
        },
        query_indexing() {
            if (this.toggle == 'query-indexing')
                return true
            else
                return false
        },
        query_processing() {
            if (this.toggle == 'query-processing')
                return true
            else
                return false
        },
        result() {
            if (this.toggle == 'result')
                return true
            else
                return false
        }
    },
    mounted() {
        // this.route = this.$route.name
        this.toggle = this.route
    }

    // computed: {
    //     toggle() {
    //         console.log(this.toggle)
    //         this.$router.replace({ name: this.toggle })
    //     }
    // }
};
</script>

<style lang="scss">
// .v-item-group{
//     flex-direction: column !important;
// }
.navbar {
    background-color: white;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 0 10px #e4e4e4;
    padding: 15px !important;
}

.navbar .bi-person-fill {
    font-size: 25px !important;
}


.navbar .bi-list {
    font-size: 25px !important;
}

.navbar-nav .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    font-size: 18px;
}

.navbar .nav-item {
    margin: 0px 10px;
}

.navbar-nav .nav-link {
    direction: rtl;
}

.navbar .dropdown-menu {
    padding: 10px 0px
}

.navbar .dropdown-toggle::after {
    display: none !important;
}

.navbar .nav-link {
    background-color: #e9e9e9;
    border-radius: 20px;
}

.navbar .dropdown-item {
    text-align: justify;
}

.navbar-light .navbar-nav .nav-link {
    color: var(--v-primary-base) !important;
}

.dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: var(--v-primary-base) !important;
}
</style>