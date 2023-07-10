# BlogSite
Developing a frontend blog website to track me and my girlfriends adventures. 

Version 1.0
Features:
  
&nbsp;&nbsp;&nbsp;&nbsp;-Home page (Recent, Random, featured blogs)
  
&nbsp;&nbsp;&nbsp;&nbsp;-Nav Bar tabs (Access Nathan, Chloe, Chloe+Nathan tabs)

&nbsp;&nbsp;&nbsp;&nbsp;-Search page (Basic description for each blog + searching by name)

&nbsp;&nbsp;&nbsp;&nbsp;-Blog page (View blog)

&nbsp;&nbsp;&nbsp;&nbsp;-Admin Login page (Secure JWT authentication with access token and refresh token cookies)

&nbsp;&nbsp;&nbsp;&nbsp;-Admin Control Page (Create, Read, Edit and Delete blogs from custom Admin UI)

&nbsp;&nbsp;&nbsp;&nbsp;-Swagger API documentation 

Tech Stack:
Frontend - Next.JS, Tailwind CSS
Backend - Express.JS
ORM - Prisma
Database - MySQL

Platform:
The frontend is hosted on Vercel and the backend uses serverless functions from Vercel. 

Security Authentication:
Secure JWT Authentication is used for admin login. An http-only access token and refresh token is generated.
The access token has a lifespan of 15 minutes to reduce security threat vulnerabilites, with the refresh token serving to allow
users to get new tokens without having to relog into the system. The passport library was used to make this possible. 

Color Scheme:
Taken from a template on Figma: https://www.figma.com/file/YYJNV4iBowwdagGVS1tbeB/Neutral-color-palette-inspiration-(Community)?type=design&node-id=0-1&mode=design&t=VRmvzCKe7T0KHeBb-0

Message me with questions and details! I'm currently working on V1.1 to fix bugs and issues I noticed when deploying the server initially and plan to add image support. 
