---
sidebar_position: 3
---

# Card

Now we have a PBX to connect to, we can install the card.

## Install the Card

Via HACS:
...

## Use the Card

- In edit mode, click on add card
- Search for **SIP Card**

Now we need to configure it.
Most things are configurable from the editor, except for the ICE settings.
We recommend using the card editor for all other settings.

```yaml title="card configuration"
type: 'custom:sipjs-card'
server: 'your-ip'                           # Set your HA IP here!
port: '8089'                                # WSS default is 8089.
video: false                                # Send and receive video. Can require extra configuration.
auto_answer: false                          # Auto-answer when called.
hide_me: false                              # Hide the extension your registered as.
state_color: true                           # Show the set entity state in the icon.
custom_title: ''
ringtone: /local/asterisk/ringtone.mp3      # Optional, this points to /www/asterisk/ringtone.mp3
ringbacktone: /local/asterisk/backtone.mp3  # Optional, this points to /www/asterisk/backtone.mp3
button_size: 42
extensions:                                 # Set here the WSS extensions you can register as.
  - person: person.person1                  # Your first person entity here
    name: Person1
    extension: '100'
    secret: 'your-auto-generated-secret'    # Set the auto_generated_secret you set in the add-on here!
    icon: mdi:monitor
    entity: binary_sensor.sensor1
    camera: ''
  - person: person.person2                  # Your second person entity here
    name: Person2
    extension: '101'
    secret: 'your-auto-generated-secret'    # Set the auto_generated_secret you set in the add-on here!
    icon: mdi:monitor
    entity: binary_sensor.sensor1
    camera: ''
```