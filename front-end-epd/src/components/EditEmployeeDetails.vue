<template>
    <section>
        <div class="container">
            <div class="box">
                <h1>Edit details</h1>
                <span v-on:click="closeEditEmployeeDetails()" class="icon-btn-close"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg></span>
                <hr />

                <div class="box-align">
                    <div class="box1">
                        <div class="inputBox">
                            <input class="inputBox-field" type="text" required="required">
                            <span>Image URL</span>
                        </div>
                        <div class="inputBox-align">
                            <div class="inputBox-first">
                                <input class="inputBox-field" type="text" required="required">
                                <span>Firstname</span>
                            </div>
                            <div class="inputBox-middle">
                                <input class="inputBox-field" type="text" required="required">
                                <span>Infix</span>
                            </div>
                            <div class="inputBox-last">
                                <input class="inputBox-field" type="text" required="required">
                                <span>Lastname</span>
                            </div>
                        </div>
                        <div class="inputBox-align">
                            <div class="inputBox-dob">
                                <input class="inputBox-field" type="text" required="required">
                                <span>DateOfBirth</span>
                            </div>
                            <div class="inputBox-csn">
                                <input class="inputBox-field" type="text" required="required">
                                <span>CitizenServiceNumber</span>
                            </div>
                        </div>
                        <div class="inputBox-align">
                            <div class="inputBox-dob">
                                <input class="inputBox-field" type="text" required="required">
                                <span>Adress</span>
                            </div>
                            <div class="inputBox-csn">
                                <input class="inputBox-field" type="text" required="required">
                                <span>Phone</span>
                            </div>
                        </div>
                        <div class="inputBox">
                            <input class="inputBox-field" type="text" required="required">
                            <span>Email</span>
                        </div>


                        <div class="dropdown">
                            <span id="currentrank">Rank</span><span class="dropdown-icon"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                </svg></span>
                            <div class="dropdown-content">
                                <p v-for="rank in this.Ranks" :key="rank.id" v-on:click="setRank(rank.id, rank.rank)">
                                    {{ rank.rank }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="box2">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Specializations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="specialiazation in this.ActiveSpecs" :key="specialiazation.id">
                                    <td>{{ specialiazation.spec }}
                                        <button v-bind:disabled="enableBtn" class="btn-delete"
                                            v-on:click="removeSpec(specialiazation.id, specialiazation.spec)">
                                            <span class="icon-btn-delete"><svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                    <path
                                                        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                                                </svg></span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="dropdown-left">
                            <div class="dropdown2">
                                <span id="ddlspec">Add</span><span class="dropdown2-icon"><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                    </svg></span>
                                <div class="dropdown2-content">
                                    <p v-for="spec in this.InactiveSpecs" :key="spec.id"
                                        v-on:click="setSpec2(spec.id, spec.spec)">
                                        {{ spec.spec }}
                                    </p>
                                </div>
                            </div>
                        </div>


                        <!-- <select class="btn-add" id="ddlspec" v-on:change="setSpec()">
                            <option value="" selected disabled>Add</option>
                            <option v-for="specialization in this.InactiveSpecs"
                                v-bind:value="[specialization.id, specialization.spec]">
                                {{ specialization.spec }}
                            </option>
                        </select> -->
                    </div>
                </div>
                <a class="btn-save">
                    <span class="icon-btn-save"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg></span>
                    <span> Save</span>
                </a>
                <a class="btn-cancel" v-on:click="closeEditEmployeeDetails()">
                    <span class="icon-btn-cancel"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                        </svg></span>
                    <span> Cancel</span>
                </a>

            </div>
        </div>
    </section>
</template>


<script>
export default {
    data() {
        return {
            ActiveSpecs: [],
            InactiveSpecs: [],
            Ranks: [],
            rank: '',
            spec: '',
        }
    },
    mounted() {
        this.ActiveSpecs.push({ id: '1', spec: 'test1' })
        this.ActiveSpecs.push({ id: '2', spec: 'test2' })
        this.ActiveSpecs.push({ id: '3', spec: 'test3' })

        this.InactiveSpecs.push({ id: '4', spec: 'toet1' })
        this.InactiveSpecs.push({ id: '5', spec: 'toet2' })
        this.InactiveSpecs.push({ id: '6', spec: 'toet3' })
        this.InactiveSpecs.push({ id: '7', spec: 'handbalmachine' })

        this.Ranks.push({ id: '1', rank: 'Intern' })
        this.Ranks.push({ id: '2', rank: 'Driver' })
        this.Ranks.push({ id: '3', rank: 'Nurse' })
        this.Ranks.push({ id: '4', rank: 'Doctor' })
        this.Ranks.push({ id: '5', rank: 'Manager' })
    },
    emits: [
        "changeEditEmployeeDetailsComponent"
    ],
    methods: {
        setRank(id, rank) {
            console.log(id, rank)

            document.getElementById('currentrank').innerHTML = rank;
        },
        setSpec2(id, spec) {
            this.ActiveSpecs.push({ id: id, spec: spec })
            document.getElementById("ddlspec").selectedIndex = "Add";

            let newList = this.InactiveSpecs.filter((el) => el.id !== id);
            this.InactiveSpecs = newList;
        },
        setSpec() {
            var item = document.getElementById("ddlspec").value;

            var id = item.split(',')[0];
            var spec = item.split(',')[1];

            this.ActiveSpecs.push({ id: id, spec: spec })
            document.getElementById("ddlspec").selectedIndex = "Add";

            let newList = this.InactiveSpecs.filter((el) => el.id !== id);
            this.InactiveSpecs = newList;
        },
        removeSpec(id, spec) {
            let newList = this.ActiveSpecs.filter((el) => el.id !== id);
            this.ActiveSpecs = newList;

            this.InactiveSpecs.push({ id: id, spec: spec })
        },
        closeEditEmployeeDetails() {
            this.$emit('changeEditEmployeeDetailsComponent', true)
        },
    }
}
</script>


<style scoped>
@import '../styles/components/editemployeedetails.css';
</style>