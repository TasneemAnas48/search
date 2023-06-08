<template>
    <b-navbar>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <!-- <v-btn-toggle v-model="toggle" group color="primary accent-3"> -->
                <v-btn @click="toggle = 'data-pre'" color="primary" text outlined>
                    Data Prepocessing
                </v-btn>
                <v-btn @click="toggle = 'inverted'" color="primary" text outlined>
                    Inverted Index
                </v-btn>
                <v-btn @click="toggle = 'search'" color="primary" text outlined>
                    Search
                </v-btn>
                <!-- <v-btn @click="toggle = 'q-pro'" color="primary" text outlined>
                    Query Processing
                </v-btn>
                <v-btn @click="toggle = 'q-index'" color="primary" text outlined>
                    Query Indexing
                </v-btn> -->
                <!-- </v-btn-toggle> -->
                <!-- <b-nav-item-dropdown right>
                    <template #button-content>
                        <b-icon icon="list"></b-icon>
                    </template>
                    
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>

export default {
    name: 'Navbar',

    data: () => ({
        toggle: '',
    }),
    watch: {
        toggle(newVal) {
            this.$router.replace({ name: newVal });
        }
    },
    computed: {
        currentToggle() {
            return this.toggle;
        }
    },

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