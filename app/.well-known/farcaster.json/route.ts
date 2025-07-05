export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL;

  return Response.json({
    "accountAssociation": {
    "header": "",
    "payload": "",
    "signature": ""
  },
     "frame": {
    "name": "The Clanker App",
    "version": "next",
    "iconUrl": "https://theclankerapp.vercel.app/icon.avif",
    "homeUrl": "https://theclankerapp.vercel.app",
    "imageUrl": "https://theclankerapp.vercel.app/hero.jpeg",
    "splashImageUrl": "https://theclankerapp.vercel.app/plash.gif",
    "splashBackgroundColor": "#ffffff",
    "webhookUrl": "https://theclankerapp.vercel.app/api/webhook",
    "subtitle": "TheClankerApp",
    "description": "easy way to deploy token",
    "primaryCategory": "finance",
    "heroImageUrl": "https://theclankerapp.vercel.app/hero.jpeg",
    "ogImageUrl": "https://theclankerapp.vercel.app/hero.jpeg"
    },
  });
}
