# video 4

## capture filter

<img src="./wireshark capture filter.png">

- tcp, udp, icmp, etc
- filter by src and dst also ie "src 127.0.0.1" or "dst 127.0.0.1"
- string together with "and" like "src 127.0.0.1 and udp" or "src 127.0.0.1 and port 80"

## display filters

- ip.src == 127.0.0.1 is how you specify ip unlike in capture, src and dst still
- instead of using "and" we use &&
- tcp.port == 80 to specify port; works this way for all protocols
- to see options to access for any protocols in the display filters just type "." and wait for the dropdown, you can scroll through to see anything youd need
- ip.addr >= 127.0.0.1 && ip.addr <= 127.0.0.500 gets the packets for that range

- right clicking a packet > follow > tcp, udp, tls, http, http/2, QUIC; allows to follow the flow of requests and answers in an easy to follow manner

## coloring rules

- view > coloring rules
  - \+ for new coloring rule, add name and filter, then can change back and fore color
