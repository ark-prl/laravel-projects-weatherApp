# laravel-projects-weatherApp
> Laravel API which uses API resources and Vue.js frontend

> This page application aims to provide travel information of Japan for foreign tourists visiting Japan for the first time
> The traveler has the possibility of going to the following cities
> Tokyo, Yokohama, Kyoto, Osaka, Sapporo, Nagoya

> It pulls data from 2 APIs to report the weather and details of specific locations

> The UI and UX are made simple for travellers to view only the necessary information
> It is a single page application whose data changes dynamically when users select a different city
> The weather details are also dynamic so a user can see if the weather changes for the selected city
> The page design is responsive


## Quick Start

``` bash
#Clone project to your prefered directory
#Open a terminal and change directory to the location of the project
#Run the following commands to start the web application

#Install dependencies
composer install

#Install JS dependencies
npm install

#Watch files
npm run watch

#Start application
php artisan serve

#Access localhost:8000 to view the application on your preferred browser
```

## APIs used
### OpenWeatherMap
```bash
https://openweathermap.org/api
```
### Foursquare Developer (places)
```bash
https://developer.foursquare.com/places
```
