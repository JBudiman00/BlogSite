# BlogSite
Developing a frontend blog website to track me and my girlfriends adventures. 

Version 1.0

Tech Stack:

&nbsp;&nbsp;&nbsp;&nbsp;Frontend - Next.JS, Tailwind CSS

&nbsp;&nbsp;&nbsp;&nbsp;Backend - Express.JS

&nbsp;&nbsp;&nbsp;&nbsp;ORM - Prisma

&nbsp;&nbsp;&nbsp;&nbsp;Database - MySQL

Platform:
The frontend is hosted on Vercel and the backend uses serverless functions from Vercel. 

Security Authentication:
Secure JWT Authentication is used for admin login. An http-only access token and refresh token is generated.
The access token has a lifespan of 15 minutes to reduce security threat vulnerabilites, with the refresh token serving to allow
users to get new tokens without having to relog into the system. The passport library was used to make this possible. 

Color Scheme:
Taken from a template on Figma: https://www.figma.com/file/YYJNV4iBowwdagGVS1tbeB/Neutral-color-palette-inspiration-(Community)?type=design&node-id=0-1&mode=design&t=VRmvzCKe7T0KHeBb-0

Features:
  
&nbsp;&nbsp;&nbsp;&nbsp;-Home page (Recent, Random, featured blogs)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/9467375d-ad63-493c-b0c9-055310d94e42)

&nbsp;&nbsp;&nbsp;&nbsp;-Nav Bar tabs (Access Nathan, Chloe, Chloe+Nathan tabs)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/084546fd-5dc7-46ba-a7ec-be9a8f70291f)


&nbsp;&nbsp;&nbsp;&nbsp;-Search page (Basic description for each blog + searching by name)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/99d8b8c3-bd44-403b-8f8f-55649579d068)

&nbsp;&nbsp;&nbsp;&nbsp;-Blog page (View blog)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/b8a5f470-d98b-4f23-b0da-dd1badde324c)

&nbsp;&nbsp;&nbsp;&nbsp;-Admin Login page (Secure JWT authentication with access token and refresh token cookies)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/cbf1cca5-2860-4132-9e2c-fad50555209b)


&nbsp;&nbsp;&nbsp;&nbsp;-Admin Control Page (Create, Read, Edit and Delete blogs from custom Admin UI)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/f3d79c91-6422-49f5-a32c-b3870c597d0b)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/1bb230d4-0376-4ef6-962b-cca55d426e42)
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/ab4bdef9-54ad-4e4b-8c0f-96c75d3c83d9)


&nbsp;&nbsp;&nbsp;&nbsp;-Swagger API documentation 
![image](https://github.com/JBudiman00/BlogSite/assets/65978976/4732e95f-ac4b-42b4-96df-d181ce9b0f1d)

Message me with questions and details! I'm currently working on V1.1 to fix bugs and issues I noticed when deploying the server initially and plan to add image support. 
