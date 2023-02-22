<template>
    <section>
        <div class="container">
            <div class="box">
                <h1>Add patient</h1>
                <hr />
                <p class="p-trunc">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg></span>
                    Patient details
                </p><br />

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
                <a class="btn-save">
                    <span class="icon-btn-save"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg></span>
                    <span> Save</span>
                </a>
            </div>
        </div>
</section></template>


<style scoped>@import '../styles/components/addpatient.css';</style>