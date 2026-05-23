# video 7

## what is snort?

- its a popular free and opensource ids/ips(intrusion prevention system) that is used to perform traffic/protocol analysis, content matching and can be used to detect and prevent various attacks based on predefined rules
- snort has long been actively maintained and is very mature with a well kept community library of rules for the latest attacks
- snort has 3 main operational modes:
  - packet sniffing, collects and displays network traffic like wireshark
  - packet logging, collects and logs traffic into a file
  - network intrusion detection, analyzes packets and matches traffic against signatures

  ## snort intro

  - detects malicious traffic or attaccks by leveraging pattern matching
  - when active, snort captures packets, reassembles them, analyzes them and determines what needs to be done to the packet based on predefined rules
  - snort rules are very similar to a typical firewall rule, whereby they are used to match network activity against specific patterns or signatures and consequently make a decision as to whether to send an alert or drop the traffic(in the case of ips)
  - snort has a large amount of rulesets created by the community that are very useful to begin with

  ## snort versions

  - there are 2 versions:
    - snort 2.x, the defacto version
    - snort 3.x, latest implementation with improvements, but will need to rewrite/convert rules from snort 2 -> 3, and snort 2 has better docs

## snort rules

- there are 3 types of rulesets:
  - community rules, free rulesets created by the community
  - registered rules, free rulesets created by Talos, need to register
  - subscription only rules, paid subscription
- we can also write our own rules too

## snort rule syntax

- rule header:
  - action
  - protocol
  - source address
  - source port
  - direction
  - destination address
  - destination port
- rule option:
  - (msg:"";sid:000)

<img src="./snort rule syntax.png">

## how snort works

<img src="./how snort works.png">

## snort ids/ips network placement

<img src="./snort placement.png">

## lab environment

- external network: kali, connects to internal systems switch
- internal network:
  - switch: connects to both below
  - snort running on ubuntu 20.04
  - vuln linux server metasploitable2
