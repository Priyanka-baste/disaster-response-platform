# disaster-response-platform


A backend-heavy MERN stack application to coordinate disaster response efforts in real-time using geospatial mapping, social media feeds, and AI-powered analysis.

---

## 🚀 Features

- 📝 **Disaster Management**: Add, update, delete, and view disasters with tags, descriptions, and geolocations.
- 📍 **Geospatial Mapping**: Locate resources and shelters near a disaster using Supabase/PostgreSQL geospatial queries.
- 📦 **Supabase Caching**: External API results are cached in Supabase to reduce API costs and rate limit issues.
- 🧠 **Google Gemini API**:
  - Extract location names from text
  - Verify authenticity of disaster-related images
- 💬 **Social Media Monitoring**: Real-time monitoring using mock Twitter or Bluesky API.
- 📰 **Browse Page**: Fetch official government and relief updates via scraping.
- 🔄 **Real-time Updates**: WebSocket (Socket.IO) integration for live update events.

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL with PostGIS)
- **APIs**: Google Gemini, Mock Twitter API, Nominatim (OpenStreetMap)
- **WebSockets**: Socket.IO
- **Caching**: Supabase (TTL 1 hour)

---

## 📂 Folder Structure

