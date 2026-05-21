# video 6

## what is recon?

- the adversary is trying to gather information they can use to plan future operations.

- recon consists of techniques that involve adversaries actively or passively gathering information that can be used to support targeting. such information may include personal details, victims systems, or personal contacts. this information can be leveraged by the adversary to aid in other phases of the adversary lifecycle, such as using gathered information to plan and execute initial access, to prioritize post compromise objectives, or to drive and lead further recon efforts.

- recon is split into 2 categories based on interaction with the target:
  - active: actively engaging/interacting with the target network, hosts, personal contacts etc(port scanning, vuln scanning, web app scanning, social engineering)
  - passive recon: using public info(osint including but not limited to whois, osint, dns, search engine dorks)

## mitre att@ck recon techniques

- key techniques:
  - ip addresses
  - dns info
  - osint
  - network info

## practical

- domains:
  - first get ip
    - on kali you use "host domain.address.com.net.org.etc" in the terminal to get ipv4 and ipv6 addresses, as well as mail server
  - nslookup can also be used
  - "traceroute domain.address.com.net.org.etc" will show the route taken through each gateway/system
  - to enumerate dns information "dnsrecon -d domain.address.com.net.org.etc" -d for domain
  - to identify if a network is being protected by some sort of firewall or proxying we use "wafw00f domain.address.com.net.org.etc" and it tells us if there is anything like cloudflare etc
  - "dig domain.address.com.net.org.etc"
  - "whois domain.address.com.net.org.etc" for domain registry information through icann
  - "whatweb domain.address.com.net.org.etc" to see the stack that the website uses, whether theres a cms, etc
  - theres a firefox addon called wappalyzer for seeing what stack is being used also
  - builtwith is another site profiler tool
  - theHarvester is used to gather osint on a company or domain
    - "theHarvester -d domain.address.com.net.org.etc -b google,linkedin,bing,duckduckgo,yahoo,twitter,sublist3r" -b x,y,z lists sources, -d d.com.etc for domain
  - "sublist3r domain.address.com.net.org.etc" to enumerate subdirectories and discover other potential entrypoints
  - google dorks:
    - "site:domain.address.com.net.org.etc" site:x limits searches to only include results from that site
    - '"exact verbatim" etcetera' "" filters searches to include only verbatim input between "" in results
    "site:\*.domain.address.com.net.org.etc" \*.x is the wildcard operator, so anything joined to the stated domain with a . is targeted as a result
    - "-site:domain.address.com.net.org.etc" removes the base site from results ie "site:\*.domain.address.com.net.org.etc -site:domain.address.com.net.org.etc" returns only subdomains
    - "inurl:x" to target only results with x in the url ie "site:\*.domain.address.com.net.org.etc inurl:login"
    - "filetype:x" to only result with specific filetypes
  - "dnsrecon -d domain.address.com.net.org.etc -t axfr" this is for performing a zone transfer which gives us a list of subdomains and dns records that could be helpful
  - for subdomain bruteforcing you can use fierce, "fierce --domain domain.address.com.net.org.etc" and can specify wordlist also
  - like fierce knockpy is a subdomain bruteforcer "knockpy domain.address.com.net.org.etc"
  - nmap network mapper "nmap -sS -A -p 76-973 -v -oN output.txt domain.address.com.net.org.etc"
    - -sS = stealthy
    - -A = aggressive so gets more info on versions/os/etc
    - -p 76-973 = port range to scan
    - -v = verbose output
    - -oN output.txt = output to txt 
    - "nmap -iL /location/of/ip_addresses_file.txt" to scan many ips
    - "ls -al /usr/share/nmap/scripts | grep nameToGrepBy" to search through nmap scripts, then you can use "--script=grepResult" to check vulnerability susceptability etc ie
      - "nmap -sS -A -p 76-973 -v --script=ssl-heartbleed -oN output.txt domain.address.com.net.org.etc"
  - nikto
  - dirb, gobuster, wfuzz, cmsmap, wpscan -> help identify vulns

## sn1per

- git clone https://github.com/1N3/Sn1per.git
- cd Sn1per
- sudo bash install.sh
- "sudo sniper" to run "sudo sniper -t domain.address.com.net.org.etc -m stealth -o -re" // this is passive, if active/aggressive then it will send a lot of requests to the target so may look sus, if active/aggressive then best to rotate proxies
- sniper/loot/workspace/domainName/reports is where the generated reports from the scans are saved

## amass

- sudo apt-get install amass
- subcommands:
  - intel: discover targets for enumeration
  - enum: perform enumerations and map networks
  - viz: visualize enum results
  - track: track differences between enums
  - db: manipulate the amass graph db
  - dns: resolve dns names
- "amass intel -whois -d domain.address.com.net.org.etc -dir outputFolderName"
- "amass enum -d domain.address.com.net.org.etc -src -ip -brute -dir outputFolderName" // bruteforce subdomains
- "amass db -dir outputFolderName -list" // list reports
- "amass viz -dir outputFolderName -d3" // outputs a graph with a visualization from the report; orang shows ips, green is subdomain, pink is the net block, dark blue provides A.S., and red shows the domain

## recon-ng

- "recon-ng" to enter the cli
- "marketplace search x"
- "marketplace install x"
- "modules search x"
- "modules load x"
- "options list"
- "options set SOURCE domain.name"
- "exit"

