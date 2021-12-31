<!-- HTML for static distribution bundle build -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Swagger UI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.35.0/swagger-ui.css"
          integrity="sha512-vYVSnT9Trc2QVKTBLTynrgEOulplSZTgcLjtYCSNtlj8e2xt5ou/k424aHXob/b5lE4Xo9Al4lUtgqSCwAZNvg=="
          crossorigin="anonymous"/>
    <style>
        html {
            box-sizing: border-box;
            overflow: -moz-scrollbars-vertical;
            overflow-y: scroll;
        }

        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }

        body {
            margin: 0;
            background: #fafafa;
        }
    </style>
</head>

<body>
<div id="swagger-ui"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.35.0/swagger-ui-bundle.js"
        integrity="sha512-0koRthW/ofKJ6MbJReFpNNZrlp//+B+9SZD7fLq+bfx0uo59DHE1t7zFQC5oDKUKgqJCTUpqIOWfDa63qmgp7Q=="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/3.35.0/swagger-ui-standalone-preset.js"
        integrity="sha512-/puZAOZVY7sKGhiOx76byRJ70RRY+k6aswiFIHNVLlj53WOg+grt1N4HIYw1OwvEi/RN8XV2NM40xS+tY2zR7g=="
        crossorigin="anonymous"></script>
<script>
    window.onload = function () {
        // Begin Swagger UI call region
        const ui = SwaggerUIBundle({
            url: `${window.location.origin}/${window.location.pathname}/docs.json`,
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout"
        })
        // End Swagger UI call region
        window.ui = ui
    }
</script>
</body>

</html>
