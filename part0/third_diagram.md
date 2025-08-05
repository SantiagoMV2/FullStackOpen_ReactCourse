```mermaid
sequenceDiagram
    participant user
    participant browser
    participant JS
    participant server

    user-->>browser: Clicks "save" button
    browser-->>JS: Submit form event triggered
    Note right of JS: JavaScript file prevents default page reloading, then creates note with content and timestamp
    JS-->browser: Redraw notes in page (DOM)

    JS-->server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with JSON
    activate server
    server-->>JS: 201 Created
    deactivate server

    Note right of server: Page never reloads
