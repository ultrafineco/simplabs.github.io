## Using Components

Below are several key compon

### Images

We get our responsive images from the [eleventy-img](https://www.11ty.dev/docs/plugins/image/) plugin, so we must include all our images as a shortcode. This will spit out a picture element with multiple sizes and formats.

`{% image '/assets/images/', 'Alt', '100vw', 'lazy', 'class', [] %}`

1. Path {String}: The path to the imagee on the filesystem, starting with '/assets/images/'
2. Alt text {String}
3. Sizes {String}: A valid `sizes` attribute for an html img
4. Loading {String}: A valid `loading` attribute for an html img, eg. 'lazy', or 'eager'
5. Class name {String}
6. Image Sizes {Array}: Optional array of integers for image sizes to generate
