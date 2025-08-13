# Pakistan Events Website

EventPulse – A Full-Stack Animated Event Showcase Web App for Pakistan with Real-Time GitHub Metrics


The application integrates advanced features such as:

1. Real-time GitHub metrics.

2. Weather forecasts via OpenWeather API

3. Google Calendar and Maps integration

4. Animated countdown timers

5. Social sharing across major platforms

6. Admin dashboard for event management

7. Filtering, searching, and sorting functionality

8. Responsive design optimized for mobile and desktop.

Whether you're an event organizer, attendee, or developer, EventPulse demonstrates how modern tools and animations can enhance the event experience.
## Acknowledgements

I would like to express my sincere gratitude to the following technologies and services that made this project possible:

1. Python Flask – for powering the backend with flexibility and speed

2. Tailwind CSS – for rapid, responsive, and modern UI styling

3. React.js / Jinja2 – for building a dynamic and interactive frontend

4. Google Maps & Calendar APIs – for seamless event location and scheduling integration

5. OpenWeather API – for providing accurate weather forecasts for event locations

6. Framer Motion / AOS.js / GSAP – for stunning animations and smooth transitions

7. FontAwesome & Heroicons – for enriching the UI with intuitive icons

8. GitHub API – for displaying real-time repository metrics

9. Flask Extensions – including Flask-WTF, Flask-CORS, Flask-Mail, and more, for streamlined backend functionality


## API Reference

#### All events

```bash
  GET /api/events
```

| Parameter | Type     | Description                |
|:--------| :------- |:------------------------- |
| `None` | `-` | Returns all available events |


#### Get Event by ID

```bash
  GET /api/events/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create Event

```bash
  POST /api/events
```

| Body Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Title`      | `string` | **Required**. Event tite |
| `description`      | `string` | **Required**. Full event details |
| `date`      | `string` | **Required**. Event date(YYYY-MM-DD |
| `Time`      | `string` | **Required**. Event time (HH:MM) |
| `location`      | `string` | **Required**. Event address |
| `category`      | `string` | **Required**. Event category |
| `image_url`      | `string` | Optional image URL |


#### Update Event

```bash
  PUT /api/events/{id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event |


#### Delete Event

```bash
  DELETE /api/events/{id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of event |






## Appendix

This section provides additional information and resources related to the EventPulse project.

🗂️ Project Structure

Pakistan-Events-Website/

├── .gitignore

├── eslint.config.js

├── index.html

├── package.json

├── package-lock.json

├── postcss.config.js

├── tailwind.config.js

├── tsconfig.app.json

├── tsconfig.json

├── tsconfig.node.json

├── vite.config.ts

└── src/

    ├── App.tsx                  
    ├── index.css                
    ├── main.tsx                
    ├── vite-env.d.ts           
    ├── components/            
    ├── context/                
    ├── data/            
    ├──pages/                   
    └── types/                  


🔐 API Keys & Environment Variables:

To run this project, you will need to set the following environment variables:

1. GOOGLE_MAPS_API_KEY

2. GOOGLE_CALENDAR_CLIENT_ID

3. GOOGLE_CALENDAR_CLIENT_SECRET

4. OPENWEATHER_API_KEY

5. SECRET_KEY (SMTP)


📁 **Event Data**

Event details and image URLs are provided in the Excel file located at:


```bash
  /data/events_data.xlsx
```

You can modify or extend this file to add new events or update existing ones.


💡 **Suggestions for Deployment
Use Gunicorn or uWSGI for production WSGI serving**

1. Use Gunicorn or uWSGI for production WSGI serving

2. Deploy via Render, Heroku, or VPS with Nginx + Supervisor

3. For React frontend, consider serving it via Nginx or using Flask-CORS during development


## Authors



👤 Author

**Zohab**

Full-Stack Developer & Data Science Enthusiast ,Digital Marketer

Bridging data, research, and web development to create impactful digital solutions. Passionate about building full-stack applications and applying data science to solve real-world problems.

📬 Email: zohabalam845@gmail.com

💼 LinkedIn: linkedin.com/in/zohab-alam-27259428b

💻 GitHub: @developerZohab

## 🎨 Color References

| Parameter | Type     | Description                |
|:--------| :------- |:------------------------- |
| Primary Green | #28a745|Primary action buttons, highlights, icons  |
| Light Green | #1e7e34  | Success alerts, backgrounds, badges|
| White | #ffffff  |Backgrounds, containers, text contrast|
| Light Green | #f8f9fa  |Card backgrounds, UI padding areas|


## Run

To run this project 

```bash
  npm run dev
```
## 🌐 Live Development Server

🚀 **Pakistan Events Website** – Development Preview  
[![Open Pakistan Events Website](https://img.shields.io/badge/Open%20Website-Click%20Here-brightgreen?style=for-the-badge)](https://pakistan-events-website.vercel.app)

> This is the development version of the Pakistan Events Tracker, built with Flask, API integrations, and real-time event updates.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`Node.js`

`Python --version`

`VITE_API_URL`

`VITE_APP_NAME`

`VITE_FIREBASE_KEY`

`VITE_GOOGLE_MAPS_KEY`

🚫 Warning

Do not store sensitive credentials (like secret API keys or database credentials) in these files for frontend projects. These variables are exposed in the client-side bundle.






## Demo

https://drive.google.com/file/d/1UXhsb117bXtqBnWIy8Zo7n48_EGHDlx8/view?usp=sharing


## FAQ

#### Question 1

1. How do I start the development server?

Run the following command to launch the application locally:

````npm run dev````

This will start the Vite development server at http://localhost:5173

#### Question 2

2. How do I configure environment variables?


Create a **.env** file in the project root and define your variables using the VITE_ prefix. For example:

`VITE_API_URL=https://api.example.com`

These can be accessed in your code via import.meta.env.VITE_API_URL.



## Screenshots

(https://drive.google.com/file/d/1kWuJDTIur7oqib_hOAuZ99B8Mi3nsdmX/view?usp=sharing)

