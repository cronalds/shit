# video 8

## snort install

- snort.org

- sudo apt-get update
- sudo apt-get install snort 

- "ifconfig"
  - specify interface, first listed where ip != 127.0.0.1
- specify address range, need to look into later more indepth
  - "ip a s"
    - under the interface name garnered from above, check inet
- list interface/s for snort to listen on

- confirm snort is installed with "snort --version"

- ensure your vm is set to promiscuous mode=allow all under advanced in network settings
- if not on a vm, "sudo ip link set {interfaceName} promisc on"

- "man snort" for snort manual

## config

- "ls -al /etc/snort" lists all dirs/files for snort
- make a copy of snort.conf as a backup

- snort.conf outlines what you need to do to configure and the order
  - ipvar HOME_NET {ip}
  - EXTERNAL_NET leave as "any"
  - can change servers if not home_net
  - include rules at the bottom
  - look into this more

- start snort in self test mode:
  - "sudo snort -T -i {interfaceName} /etc/snort/snort.conf"
