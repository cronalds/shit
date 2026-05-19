# video 1

## what is red teaming?

- red teaming is the process of emulating the tactics, techniques, and procedures (ttps) of real world threats/advanced persistent threat groups with the goal of measuring the effectiveness and resilience of defenders, employees, processes and underlying technologies of a target.

- the underlying goal/motive of red teaming is to get a better more holistic understanding of an organization/targets ability to detect and defend against adversarial ttps.

- red teaming is a practice that was adopted from the military, where units are tasked to operate as adversaries and simulate attack techniques utilized by opponents in order to assess the abilities of the defending party.

- this process provides an organization/target with valuable information on their defenders abilities and outlines where the detection and defense controls/mechanisms can be improved.

<img src="./external threat actor diagram.png">

- what is happening here?
  - the external threat actor first uses stolen credentials to access servers or maybe a firewall exploit if weakly configured or not up to date.
  - then uses webshell uploads to those servers with weak access controls.
  - allowing for lateral movement through the network.
  - communicates through and to cc2 via https.
  - exfiltrating sensitive data and infiltrating anything poisoned that is needed potentially.

- often perceived as an unplanned pentest, however thats far from the case. thoroughly planned with due diligence.

## security assessments:

- in order to understand the importance of red teaming, you must understand the various types of security assessments commonly used by organizations, what their objectives are as well as how they differ.
- from an offensive perspective, organizations have typically used various security assessments to get an understanding of their current threat surface, risk, potential business impact, and defense capabilities.

- moving into a red team is generally a procedural process, starting with prerequisites first:
  - starting with general pentesting
  - gaining experience with the skills you acquire to extend your understanding of adversarial tradecraft, ttps, get to know your tools, malware/exploit development known as resource development, red team infrastructure, opsec(operational security), before entering the red team

## vulnerability assessments:

- vulnerability assessments are the most common form of preventative security, the objective is to scan all workstations and digital assets in order to identify vulnerabilities and misconfigurations. this provides an organization/target with clearer picture of their threat surface and security posture.
- this information helps a company or individual determine where they should focus their patching and remediation efforts.
- vulnerability assessments are very useful in reducing the attack surface but fall short in extrapolating the organizational risk of identified vulnerabilities.

<img src="./vulnerability assessment diagram.png">

## penetration testing:

- pentesting is the process of identifying and attempting to exploit vulnerabilities on target systems. pentests improve vulnerability assessments by verifying the potential impact of a vulnerability by attempting to exploit it.
- pentesting also goes beyond initial access aka exploitation and involves performing various postexploit activities.

<img src="./pentesting diagram.png">

- pretest:
  - confirmation of scope
  - escalation process agreed
  - test authorization
  - communication requirements agreed
- testing:
  - enumeration
  - vulnerability identification
  - exploitation
  - post exploitation
  - regular testing updates
- reporting:
  - report completed by lead tester
  - issues rated by impact and exploitability
  - root cause analysis
  - internal qa
- review:
  - optional washup call
  - post test support for recommendation
  - arrange retesting if required

- pentessts are quite limited with regards to their ability to emulate/simulate a real threat actor primarily due to scope, pentests can either be blackbox or white box and can be very loud.

- given the goal of pentesting is to identify and exploit vulnerabilities in target systems, risk is typically measured and is limited to the workstations/assets within the predefined scope and does not encompassa employees, defenders, and processes; otherwise you would be a blackhat.

- pentesting: rules of engagement example:
  - during the engagement, the following rules must be adhered to. any deviations must be determined and approved by change management then the steering committee.
    - 1. activities that may potentially result in a denail of service conditionservice interruption, or otherwise general annoyance are prohibited.
    - 2. this engagement is considered "full scope" with the following network exclusions:
      - a. 192.168.0.0/16
      - b. 172.16.0.0/16
      - c. 10.0.0.0/8
    - 3. status meetings will occur daily at 10am and 3pm via approved channels.
    - 4. approved testing window is from 12am-5am; m,w,e,sa,su
    - 5. portscanning is allowed with the following exclusions: tcp 21,22,80,443,445,8080,8443
    - 6. activities that may result in the locking of accounts are considered to be unethical and will result in case forwarding to the ethics line
    - 7. tester will at no time perform a "happy dance" or resort to "shellibrating"

## limitations of pentesting

- given the underlying objective, pentesters usually do not have to worry about tripping allerts or evading detection, as a result, pentesters are typically noisy and loud, real world threats are not
- a traditional pentest is likely to ignore attack vectors like social engineering and physical intrusions.(very common with real adversaries)
- pentesters must abide by the strict rules of engagement and the predefined scope, which blackhats do not.
- in certain cases the organization mayh whitelist the pentesters attack infrastructure and in certain cases defense and detection mechanisms may be relaxed

## why red team:

- red teaming allows you to assess and measure the effectiveness and resilience of employees, defenders, and processes used to defend a company or individuals infrastructure.
- very useful for measuring the blue teams ability to detect and defend against adversaries.
- used to train blue team, they require frequent training and practice to be effective
- exposure to real world threats/apts and their corresponding ttps, tradecraft, and malware.

## essential terminology:

|term|definition|
|ttps|tactics, techniques, and procedures|
|tradecraft|techniques and procedures during an attack campaign|
|oplog|operator logs are the records generated by redteam operators during an engagement, these logs specify required fields that must be captured|
|c2|command and control|
|exfiltration|process of extracting information/data from a target system through covert channels|
|ioc|indicator of compromise, artifacts used to identify adversarial activity|
|opsec|operational security, what the blue team can observe and use to minimize exposure|
|operational impact|effect of objective driven action within a target environment|
|situational awareness|phase of red team operation used to gather information on targets and the target environment, this info is used to determine the next action|
|cti|cyber threat intelligence, information collected, aggregated, analyzed, and interpreted to provide the context for decision making processes regarding threats|

## types of red team engagements:

|engagement|use case/definition|
|full simulation|simulates a threat/adversaries attack flow|
|adversary emulation|emulating/mimicking an adversaries/apts ttps with little or no deviation|
|assumed breach|this model assumes a threat has some level of access to a target at the initiation of the engagement|
|table top exercise|an over the table simulation where scenarios are discussed between red and blue team to evaluate how they would theoretically respond.|

## red team roles and responsibilities:

<img src="./red team roles and responsibilities diagram.png">

|role|responsibility|
|red cell|group playing the opposing force(OPFOR) during exercises, they make up the offensive portion of red team engagement that simulates the strategic and tactical responses of a given target, the red cell is typically compromised of red team leads and operators and is commonly referred to as just red team.|
|blue cell|the opposing side to red, this is all the components defending a target network. the blue cell is typically compromised of blue team members, defenders, internal staff, and an organizations management.|
|white cell|serves as referee between the two teams activities and responses during engagement. controls the engagement environment/network and monitors adherence to the roe(rules of engagement)|
|red team lead|serves as the operational and administrative lead of the red team, conducts the engagement, budget, and resources management for the red team, provides oversight and guidance for engagements, capabilities, and tech. ensures adherence to roe.|
|red team assistant lead|assists the team lead in overseeing the engagement operations and operators, can also assist in writing engagement plans and docs if needed|
|red team operator|complies with all red team requirements under the direction of the red team lead, operational executor of the engagement, applies red team ttps to the engagement and technical research and capability to the red team. keeps detailed logs during each phase of the engagement.|