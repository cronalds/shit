# video 2

## red team engagements:

- a successful red team engagement begins with clearly defining the goals of the engagement with the target
- the red team is then tasked with planning and orchestrating the engagement based on the predefined goals
- it is important to not that the red team engagement does not focus on the search for vulnerabilities, instead, the target security operations as a whole
- the results of the blue team engagement should highlight the blue teams ability to detect and defend against the attacks and where the improvements can be made
- red team engagements should also simulate/emulate new ttps for the blue team to learn how to detect and defend against them
- a successful red team engagement requires a structured methodological approach, especially when simulating/emulating an adversary
- it is recommended to use an appropriate red team methodology/framework as a basis on which to plan, structure and orchestrate your campaign
- frequently utilized red team frameworks/methodologies include:
  - cyber kill chain
    - https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html
    <img src="./cyber kill chain diagram.png">
      - recon: harvest email addresses and any applicable data.
      - weaponization: coupling exploit with backdoor into deliverable payload.
      - delivery: deliver weaponized bundle via email, web, usb, etc
      - exploitation: exploit a vulnerability to execute code on the victims system.
      - installation: install malware on the asset.
      - c2: command channel for remote manipulation of the victim.
      - actions and objectives: this is where you actually start doing shit to accomplish original goals.
  - unified cyber kill chain
    - https://www.unifiedkillchain.com/
      - in:
        - recon
        - resource/exploit dev
        - delivery
        - social engineering
        - exploitation
        - persistence
        - defense evasion
        - c2
      - through:
        - pivoting
        - discovery
        - privilege escalation
        - execution
        - credential access
        - lateral movement
      - out:
        - collection
        - exfiltration
        - impact
        - objectives
  - MITRE ATT@CK framework
    - https://attack.mitre.org/
    - breaks down each phase of an adversarial lifecycle into tactics with each tactic containing techniques. tactics including initial access, execution, persistence, privilege escalation, defense evasion, etc.

## ATT@CK vs cyber kill chain:

|MITRE ATT@CK|cyber kill chain|
|recon|recon|
|resource/exploit dev|weaponization|
|initial access|delivery|
|execution|exploitation|
|persistence|installation|
|priv esc|c2|
|defense evasion|actions on objectives|
|credential access||
|discovery||
|lateral movement||
|collection||
|c2||
|exfiltration||
|impact||

- encapsulates more than ckc, and fits perfectly with uckc