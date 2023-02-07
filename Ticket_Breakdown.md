# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Create a table to store Agents' custom IDs for each Faility
  - Primary fields should be Faility and Agent ids, and data field is custom id of Agent.
  - Define ORM(Object Relational Mapping) and a validation of custom id field to be unique.
  - It can't exceed 1 hour to complete this task.

2. Create functions to set and get custom id of Agent for specific Facility
  - A get function `getCustomAgentId` should be called with the Facility's id and the Agent's id. If the Facility did't register custom id of the Agent, it will have to return **NULL** value.
  - A set function `setCustomAgentId` should be called with the Facility's id, the Agent's id and custom id to set. And it should ensure that the new custom id is not duplicated. If not, make exception for that.
  - Create unit tests to validate `getCustomAgentId` and `setCustomAgentId` functions with **jest**.
  - This task will take around 2 hrs at most.

3. Refactor the function `generateReport` to render PDF with custom ids of Agents 
  - Add new parameter Facility id to the function `generateReport` to get custom id of Agent.
  - Replace Agent database id with custom in rendering function if the returning result of `getCustomAgentId` is not **NULL**.
  - It will take around 30 mins to complete.
