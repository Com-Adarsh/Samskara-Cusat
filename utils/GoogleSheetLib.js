// utils/GoogleSheetLib.js

// Replace with your published Google Sheet JSON endpoint or a simple CSV-to-JSON logic
const SHEET_URL = "YOUR_GOOGLE_SHEET_CSV_EXPORT_URL";

export async function fetchArtisticSubmissions() {
  try {
    const response = await fetch(SHEET_URL);
    const data = await response.text();
    
    // Simple CSV to JSON parser
    const rows = data.split('\n').slice(1); // Skip header row
    return rows.map(row => {
      const [timestamp, artist, title, type, url, sketchUrl] = row.split(',');
      return {
        artist: artist.trim(),
        title: title.trim(),
        type: type.trim(), // e.g., "Photography", "Painting", "Music"
        url: url.trim(),
        sketchUrl: sketchUrl ? sketchUrl.trim() : null
      };
    });
  } catch (error) {
    console.error("Error fetching Samskara data:", error);
    return [];
  }
}
