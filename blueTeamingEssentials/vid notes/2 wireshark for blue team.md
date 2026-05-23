# video 2; vid 3 but second

## network traffic analysis with wireshark

- prerequisites:
  - familiarity with linx and various command line utils
  - familiarity with windows
  - a good understanding of the osi model and the layers that make up the model
  - functional knowledge of tcp/ip and udp
  - familiarity with information security concepts
  - familiarity with http and web techs

## what is wireshark?

- wireshark is a free and opensource network protocol and traffic analyzer that can be used to capture network traffic, troubleshoot networks, and much more
- in essence wireshark allows you to capture traffic on a network and presents the captured traffic in the form of individual packets for granular analysis
- wireshark captures and dissects packets on a network and displays the various packet fields and headers based on the type of packet that was captured

## packets

- a packet aka a network frame is a piece of data sent over the network
- packets contain various headers that are used to specify the type of packet, the source and destination ip, as well as the protocol

<img src="./packet aka network frame.png">

## wireshark for blue team

- in the context of blue team operations, wireshark is typically used to analyze previously captured traffic stored in the form of a pcap file for analysis and threat identification
- wireshark can be used to identify when a packet was sent, the source and destination ip, and the type of protocol
- this info is very useful for security pros as it can be used to identify malicious activity by pinpointing the time the attack was performed, the attack type and ips that were targeted or involved

## wireshark features

- live traffic/packet capture
- packet dissection
- import/export captured traffic using pcaps
- capture and display filters
- search for packets
- customize and color cod packets based on requirements
- much more

## what are pcap files?

- pcap(packet capture) is an api that is used to capture and record network packets from layer 2-7 of the osi model

<img src="../../osi model.png">

- wireshark uses the pcap file format to capture and store packets for later
- network traffic captured with wireshark can be exported or imported in the form of pcap files
- this allows analysts to import and analyze network traffic that was captured on another network at a different time

## installing

- https://www.wireshark.org