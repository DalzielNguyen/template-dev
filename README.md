## Template Developer Exercise

```
TIMEBOX: 2-3 hours.
Languages: HTML, CSS, Javascript
Frameworks: N/A
```
### Notes
1. I define two CSS files for certificate.html or transcripts.html to be more transparent about the code that is easy to read and debug.
2. I can't find where is "Date Attained" value is in the .json file, It just has "issuedOn" value, and I don't sure it is the same value,  so I set it static in certificate.html.

### Run Project
1. Go to bolilerplatefolder
    ```sh
    cd/bolilerplate
    ```
2. Run Json Server
    ```sh
    python3 -m http.server
    ```
3. Click to certificate.html or transcript.html for view  certificate or transcript.

### Overview

This exercise requires you to use the assets provided to design a certificate and a transcript.
The end product in PDF can be found in the *examples* folder.

### Exercise 1: Design the certificate with the assets given
1. Refer to [examples/Certificate.pdf](boilerplate/examples/Certificate.pdf)
2. Use the assets available in the [assets](boilerplate/assets) folder
3. Use the data available in [json/sample_data.json](boilerplate/json/sample_data.json)
4. Create a new file called certificate.html
    1. Add your HTML codes into this file
    2. Add your CSS codes in [css/app.css](boilerplate/css/app.css)
    3. Add your JavaScript codes in [js/app.js](boilerplate/js/app.js)
5. Ensure that certificate.html looks identical to the example when rendered.

### Exercise 2: Design the transcript with the assets given
1. Refer to [examples/Transcript.pdf](boilerplate/examples/Transcript.pdf)
2. Use the assets available in the [assets](boilerplate/assets) folder
3. Use the data available in [json/sample_data.json](boilerplate/json/sample_data.json)
4. Create a new file called transcript.html
    1. Add your HTML codes into this file
    2. Add your CSS codes in [css/app.css](boilerplate/css/app.css)
    3. Add your JavaScript codes in [js/app.js](boilerplate/js/app.js)
5. Ensure that transcript.html looks identical to the example when rendered.

##### Technical Notes
- Ensure that you unit test your submission
