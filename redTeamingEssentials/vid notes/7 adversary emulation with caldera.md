# video 7

## what is adversary emulation?

- it is the process of emulating the tactics, techniques, and procedures of a specific adversary.
- the objective is to assess and improve how resilient an organization is against specific adversary techniques/attacks
- adversary behavior is classified using ttp
- adversary ttps are used to outline how a specific adversary operates
- an emulation should be based on the ttps of the adversary to facilitate an accurate attack
- emulation should follow a structured methodology/kill chain

## red team kill chain

- initial recon
- initial compromise
- establish foothold
- escalate privileges
- internal recon
- move laterally
- maintain presence
- complete goal

## what is mitre caldera?

- caldera is a cyber security framework designed to easily automate adversary emulation, assist manual red teams and automate incident response
- it is built on the mitre att@ck framework and utilizees a client-server system, where the server is used to set up agents(clients) and initiate operations
- the framework consists of two components:
  - the core system, this is the framework code, consisting of what is available in this repo, included is an async c2 server using a rest web interface
  - plugins, these repos expand the core framework capabilities and provide additional functionality, examples include agents, reporting, collections of ttps, and more

## install

- "python3 -m venv .calderavenv"
- "source .calderavenv/bin/activate"
- "git clone https://github.com/mitre/caldera.git --recursive"
- "cd caldera"
- "pip3 install -r requirements.txt"
- "python3 server.py --insecure --build"

## caldera terms

- ability: outlines a set of actions that are used to achieve a specific goal
- adversary: malicious actor paired with specific abilities
- agent: target host
- groups: collection of agents either based on os or function

