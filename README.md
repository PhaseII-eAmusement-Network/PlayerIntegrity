# PlayerIntegrity
*A player data importing and exporting integrity suite*

## What is this?
As the description states, this is a tool for verifying and approving data exported and imported for use with a network's database. 

An example for this would be a user's DDR scores exported from one server, imported to another.

### The problem.
Importing a player's data via JSON can be spooky sometimes, as users are able to edit data and import it without the end-server even knowing.
Most networks just use a simple honor system, and will just ban anyone who doesn't seem to be truthfully importing scores.

This works for most cases, but in large-scale situations, this can get quite hectic.

### The solution.
Some networks usually just won't allow exporting and importing of a user's data, but that tends to be problematic after a network goes down or a user decides to move to another network.

Other networks will decide to encrypt a user's data export, but that only allows networks that are connected to each-other or have a mutual connection, where they can share a decryption key. The issue here is that you now have a private key floating around, and could probably be obtained by someone with minimal effort.

Well, if both of those aren't perfect, what's left?
This is where **PlayerIntegrity** comes in.

My goal is to streamline the exporting and importing user data by storing file hashes, associating them with a special ID, and then associating that export with a network. Importing would then be the opposite, where you send the ID and the hash of the file, and the server can respond if it's in the database or not, and if the origin is in a trusted server list. 

### Workflow.
Here's a super simple workflow of how this would function.

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

### Is it foolproof?
No. This has a major flaw that is "will anyone even support this?"

Now, whilst I'd love for all the major networks to implement this and allow truly verified data importing and exporting, that's purely a dream that probably will never happen.

## The future of this project
With me currently starting this with just documentation, I eventually plan on letting this be an open standard for importing and exporting user data securely, but for now it'll be a centralized server.
I do have plans on making an API that will allow multiple servers talk to each-other and allow data to be stored in multiple places, but that can lead to the defeat of this entire idea's premise, which is one trusted DB to rule them all. 

## Q&A
- Would a registered network be allowed to export a list of data UUIDs and hashes? 
    - Yes, and it would be trusted with this exact algorithm

## Footer
Thank you for taking the time to read this documentation! I'll be working on this in the background as I plan on having it fully implemented at the launch of another project I'm working on.

All the other documentation in `/docs` will be worked on soon as well.

<3