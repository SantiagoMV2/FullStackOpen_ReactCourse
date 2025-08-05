```mermaid
sequenceDiagram
    participant browser
    participant server
    participant user

    user->>browser: clicks "save" button
    browser-->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 redirect to notes
    deactivate server

    Note right of browser: Browser follows that reroute

    browser-->>server: GET /notes
    activate server
    server-->>browser: HTML updated with new note
    deactivate server

    Note right of browser: The browser reloads the whole page, getting the style sheet (main.css), the JavaScript file (main.js) and raw data from notes (data.json) 

    

    

