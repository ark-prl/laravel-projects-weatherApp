<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Weather Checker</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;                
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
                margin: 20px;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 40px;
            }

            .m-b-md {
                margin-top: 30px;
                margin-left: 30px;
                margin-right: 30px;
                margin-bottom: 30px;
                border: solid;
            }

            .div-relative {
                position: relative;
                top: 20px;
                border: 3px solid #414a4d;
                margin: 20px 20px 20px 20px;
            }

            .report-container {
                border: #FFFFFF 2px solid;
                padding: 30px 40px 20px 40px;
                border-radius: 2px;
                width: 400px;
                margin: auto;
            }

            p.solid {
                position: relative;
                top: 20px;
                border-style: solid;
                margin: 0 auto;
            }
        </style>
    </head>
    <body>
        <div class="flex-center report-container">
            <div class="m-b-md">
                <div id="app"></div>
            </div>
        </div>
        <script src="<?php echo e(asset('js/app.js')); ?>"></script>
    </body>
</html>
<?php /**PATH C:\Users\Arthur\Desktop\Laravel blade\BMWeather\resources\views/welcome.blade.php ENDPATH**/ ?>