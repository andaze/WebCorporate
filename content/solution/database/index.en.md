---
title: "AZURE COSMOS DATABASE"
date: 2022-02-23T17:03:34+09:00
weight: 0
cardImage: database.jpg

---

Why is "database optimization" important? An increasing number of companies are using NOSQL to complement traditional RDBs to handle exponentially growing data, such as real-time analytics while holding large amounts of data.

So far we have used a database called RDBMS. The internal data structure was normalized, and it was necessary to refer to several master tables to display one screen.

A database called NOSQL, on the other hand, allows you to design the information you need in one shot. By adding the number of servers, you will be able to flexibly deal with the increase in data volume and traffic.

**Pros of NOSQL**

- Can take the data storage format optimized for the application
- Can store data without defining data type
- Performance can be easily improved by adding more servers

**Cons**

- Data integrity needs to be considered in design

![ Image is not Available !](cosmos-database.webp)

### Case

**Industry**: Automobile manufacturing

**Overview**: Raw data from IoT devices is stored in a large-capacity database, Azure Table Storage. For inquiries from the system, data is aggregated and processed by the regular startup of Azure Function to create Json data optimized for the display format. By saving to the Cosmos database that can store flexible data, the inquiry screen has been improved so that the necessary information can be referenced almost in an instant.


## Contract
- Planning and design: Semi-delegation contract
- Production: Contract contract

## Deliverables

**Basic set**

- Understanding the current situation and understanding your solution
- Goal design, milestone formulation
- Requirements definition document
- Basic design document creation
- Prototype/POC creation
- Conducting a review meeting



**Design**

- Content layout design
- Navigation design
- Performance design
- Cache design

**As your IT team**

- AMP Specialist
- HTML/CSS coder

**Operation**

- System usage analysis
- Planning of improvement measures
- Support Desk
- Functional description for administrators