# video 5

## analyzing malicious packets

- https://github.com/AlexisAhmed/Wireshark-Traffic-Analysis
  - password = infected
  - includes ssl keys captured with mitm and pcap file

- display filter = tcp.handshake.type eq 1
- follow the tcp stream
- to use the ssl keys:
  - edit > preferences > protocols > tls > pre master secret log filename, browse for ssl key file and press ok
- if still encrypted then empty display filter and refill then try again to follow
- display filter = (http.request or tls.handshake.type eq 1) and !(ssdp)
  - this displays all http requests or tls handshakes excepting ssdp protocol
- we see a request of interest using the GET verb requesting a resource called invest_20.dll
  - we follow the http stream
  - http response 200 OK
  - we exit the follow
- we ensure the display filter above is "(http.request or tls.handshake.type eq 1) and !(ssdp)" file > export objects > http
- select the item with filename = invest_20.dll, and save to desktop, we can then use virus total etc
- with the filter of "(http.request or tls.handshake.type eq 1) and !(ssdp)" we can also see some interesting post requests such as to docs.php
  - following the tls stream we see the server is called mitmproxy 6.0.0.0.dev and hosted at 105711.com
- we then use a filter of "nbns" we find many entries including info="Registration NB DESKTOP-U54AJ8K" which gives us info on what system/s have been infected so we can hand this information off to incident response
