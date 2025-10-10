---
title: "CONETSI"
date: 2020-01-07
image: "/assets/my_img/projects/conetsi/thumb.png"
description: "A routing protocol for network state monitoring in low-power constrained networks"
---
### On-Demand Distributed Network State Information Collection

**Published in IEEE COMSNETS 2020:**
[![Static Badge](https://img.shields.io/badge/IEEEXplore-paper-blue)](https://ieeexplore.ieee.org/document/9027403){:target="_blank"}
[![Static Badge](https://img.shields.io/badge/GitHub-source-black)](https://github.com/srijith1996/conetsi){:target="_blank"}

<p style="text-align: justify;">
As the Internet of Things (IoT) continues to scale into industrial and smart-city environments, maintaining the health and performance of vast sensor networks becomes increasingly complex. Traditional monitoring approaches like centralized polling or static telemetry are often too bandwidth- and power-intensive for resource-constrained networks. The CONETSI project tackles this challenge by proposing a distributed and opportunistic mechanism for collecting Network State Information (NSI) — vital data such as link quality, queue length, and battery status — while minimizing communication overhead and ensuring fairness among network nodes.
</p>

<p style="text-align: justify;">
At the core of CONETSI lies an algorithm that allows nodes to self-organize into temporary chains for NSI aggregation. Rather than transmitting information individually, nodes advertise their data demands and join nearby nodes with similar urgency, forming an adaptive sequence that serially piggybacks state information toward a monitoring station. This process operates independently of existing routing protocols and can dynamically adapt to changing network conditions. Implemented within the Contiki-NG operating system for 6LoWPAN/RPL networks, the system ensures efficient bandwidth usage, balances energy consumption, and maintains equitable data collection opportunities across the network.
</p>

<p style="text-align: justify;">
Through theoretical analysis and simulation experiments, CONETSI demonstrates significant gains in channel utilization and energy efficiency compared to traditional methods. The results highlight how decentralized decision-making and local exploration can replace costly centralized control in large-scale IoT systems. By achieving scalable, low-overhead monitoring, CONETSI paves the way for sustainable management of dense sensor deployments in next-generation connected environments.
</p>