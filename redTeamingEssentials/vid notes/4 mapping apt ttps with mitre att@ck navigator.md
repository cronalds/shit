# video 4

## mitre att@ck navigator

- open source tool designed to help users explore and operationalize the mitre att@ck kb
- it provides basic navigation and annotation of att@ck matrices, something people already do in excel
- you can use the navigator to visualize your defensive coverage, your red/blue team planning, the frequency of detected techniques or anything else you wanna do
- allows manipulation of the cells in the matrix ie color coding, adding comments, etc
- the principle feature of the navigator is the ability for users to define layers - custom views of the att@ck kb - ie showing just the techniques for a particular platform or highlighting techniques a specific adversary is known to use

<img src="./mitre att@ck navigator.png">

- the navigator has 3 main layers; enterprise att@ck, mobile att@ck, and ics att@ck, with options for more, including custom.
- the navigator highlights techniques used by a specific apt in a campaign spanning over the various tactics
- you can specify which version of att@ck you would want to use due to new versions containing updates to ids and other areas
- can export to json and excel, ass well as rendering to svg
- can filter by platforms such aws windows, linux, macOS, network, containers, SaaS, etc
- can search for apts and highlight all of their known used techniques; you can search for anything in att@ck such as any known software, threat group, mitigations, campaigns, data sources, assets, etc
- can use a scoring system with a color gradient to measure success
- can view ttps of various threat actors in a single layer as well as showing commonalities between them
