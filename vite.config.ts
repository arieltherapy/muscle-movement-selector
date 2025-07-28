import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // 1. ייבוא התוסף

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. הוספת התוסף עם הגדרות בסיסיות
    VitePWA({
      registerType: 'autoUpdate', // יעדכן את האפליקציה אוטומטית כשיש גרסה חדשה
      manifest: {
        name: 'Muscle Movement Selector', // שם האפליקציה שיופיע בהתקנה
        short_name: 'MuscleApp', // שם קצר לאייקון
        description: 'My awesome muscle selector app', // תיאור קצר
        theme_color: '#ffffff', // צבע רקע למסך הפתיחה
        icons: [
          {
            src: 'pwa-192x192.png', // נצטרך ליצור את קובץ התמונה הזה
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // וגם את זה
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})