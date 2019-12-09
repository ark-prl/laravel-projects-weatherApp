/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


var currentLocation = "Tokyo";
const app = new Vue({
    el: '#app',
    data: {
        currentTemp: '',
        minTemp: '',
        maxTemp:'',
        pressure: '',
        humidity: '',
        wind: '',
        overcast: '',
        name: '',
        timestamp: '',
        longitude: '',
        latitude: ''
    },
    info: {
        location_info: ''
    },
    mounted() {
        
    },
    methods: {
        moveToTokyo(){
            currentLocation = "Tokyo";
            this.getDate();
            this.getWeather();
            this.getPlaceInfo();
        },
        moveToYokohama(){
            currentLocation = "Yokohama";
            this.getWeather();
            this.getDate();
            this.getPlaceInfo();
        },
        moveToKyoto(){
            currentLocation = "Kyoto";
            this.getWeather();
            this.getDate();
            this.getPlaceInfo();
        },
        moveToOsaka(){
            currentLocation = "Osaka";
            this.getWeather();
            this.getDate();
        },
        moveToSapporo(){
            currentLocation = "Sapporo";
            this.getWeather();
            this.getDate();
        },
        moveToNagoya(){
            currentLocation = "Nagoya";
            this.getWeather();
            this.getDate();
        },

        // https://api.foursquare.com/v2/venues/search?client_id=5SJCQ5O1NYTI35GEVLTYDQ0RZMZUOBW2ZZFZOJ3TQPQVCLP0&client_secret=XFGQBAVJPCDLAJNJT2J1GFYXZKVNO0L1USPQNKHJ0H0UQ53K&near=Tokyo&v=20191209&categoryId=50aa9e094b90af0d42d5de0d        
        // populates data using the response from openweathermap API
        getWeather() {
            let url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=090ffa7befe18ad28164de751f87ab2e`;
            axios
              .get(url)
              .then(response => {
                this.currentTemp = response.data.main.temp;
                this.minTemp = response.data.main.temp_min;
                this.maxTemp = response.data.main.temp_max;
                this.pressure = response.data.main.pressure;
                this.humidity = response.data.main.humidity + '%';
                this.wind = response.data.wind.speed + 'm/s';
                this.overcast = response.data.weather[0].description;
                this.name = response.data.name;
            })
            .catch(error => {
                console.log(error);
            });
            
        },

        // populates data using response from foursquare API
        getPlaceInfo(){
            const client_id = "5SJCQ5O1NYTI35GEVLTYDQ0RZMZUOBW2ZZFZOJ3TQPQVCLP0";
            const client_secret = "XFGQBAVJPCDLAJNJT2J1GFYXZKVNO0L1USPQNKHJ0H0UQ53K";
            const categoryId = "50aa9e094b90af0d42d5de0d";
            const version = "20191209";
            let url = `https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v2/venues/search?client_id=${client_id}&client_secret=${client_secret}&near=${currentLocation}&v=${version}&categoryId=${categoryId}`
            
            axios
                .get(url)
                .then(response => {
                    this.longitude = response.data.response.geocode.feature.geometry.center.lng;
                    this.latitude = response.data.response.geocode.feature.geometry.center.lat;
                })
        },
        // constructs the date when information is retrieved
        getDate() {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            this.timestamp = dateTime;
        }
    },
    // initializes data mounted on the page
    beforeMount() {
        this.getDate();
        this.getWeather();
        this.getPlaceInfo();
    },
    // uses the information in the data table to display in the front end
    template: `
    <div class="report-container">
        <div class="title content">Weather Checker</div>
        <div class="content">
            <button v-on:click="moveToTokyo()">Tokyo</button>
            <button v-on:click="moveToYokohama()">Yokohama</button>
            <button v-on:click="moveToKyoto()">Kyoto</button>
            <button v-on:click="moveToOsaka()">Osaka</button>
            <button v-on:click="moveToSapporo()">Sapporo</button>
            <button v-on:click="moveToNagoya()">Nagoya</button>
        </div>
        <h3 class="content m-b-md"><strong>Weather in {{name}} </strong> <br>as of {{timestamp}}</h3>        
        <div id="weather">
            <h3><strong>Overcast:</strong> {{overcast}}</h3>
            <span class="temperature"><strong>Current temp:</strong> {{currentTemp}}°</span><br>
            <span id="temp-values"><strong>Min</strong> {{minTemp}}° <br> <strong>Max</strong> {{maxTemp}}°</span>
        </div>
        <div id="info">
            <span> <strong>Humidity:</strong> {{humidity}} </span><br>
            <span> <strong>Pressure:</strong> {{pressure}} </span><br>
            <span> <strong>Wind:</strong> {{wind}} </span>
        </div>
        <div id="coordinates">
            <span><strong>Longitude: </strong>{{longitude}}</span><br>
            <span><strong>Latitude: </strong>{{latitude}}</span>
        </div>
    </div>`,
});
