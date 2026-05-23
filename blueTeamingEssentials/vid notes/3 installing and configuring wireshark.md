# video 3

## configuring

- capture options:
  - input:
    - enable promiscuous mode on all interfaces = checked
    - filters for interfaces
  - output:
    - output format = pcap
  - options:
    - name resolution: mac addresses and network names = checked
    - display options: autoscroll during live capture = checked

- edit > preferences:
  - columns:
    - click time, change to utc time
    - add new column called source port, type = src port
    - add new column called destination port, type = dest port