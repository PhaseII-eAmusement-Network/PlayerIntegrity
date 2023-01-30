# PlayerIntegrity Workflow

- A network registers to **PI**
    - Network is given an API Auth Key and UUID
    - Network can then be authenticated by an Admin as trusted or untrusted
    - When the network is registered, a specific call-back URL is required for sharing authentication data
    - Network will only be trusted if the call back URL is a trusted domain

- Player exports data from a network
    - Network tells **PI** to make a new entry
        - Data sent: network's UUID, network's Auth Key, the player data
    - **PI** makes an MD5, stores MD5, associates it with a UUID, associates it with the network, stores a timestamp
        - The UUID is inserted into the file BEFORE THE MD5 IS MADE. THE UUID is PART of the MD5
    - **PI** then calls back to the network, with a timestamp and the data with the UUID inserted into it

- Player imports data to a network
    - Network sends the UUID to **PI**
        - Data sent: network's UUID, network's Auth Key, the UUID, and the MD5
        - **PI** responds with the status of the file, and if the origin is trusted
        - If the network wishes to continue, it responds with `import: true`, otherwise `import: false`
            - If network approves, the `imported_by` field has the destination network appended to it (this can be accessed with a more advanced API call)