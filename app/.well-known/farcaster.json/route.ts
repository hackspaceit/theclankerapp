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
    "version": "1",
    "iconUrl": "https://clanker-dep.vercel.app/icon.avif",
    "homeUrl": "https://clanker-dep.vercel.app",
    "imageUrl": "https://clanker-dep.vercel.app/hero.jpeg",
    "splashImageUrl": "https://clanker-dep.vercel.app/plash.gif",
    "splashBackgroundColor": "#000000",
    "webhookUrl": "https://clanker-dep.vercel.app/api/webhook",
    "subtitle": "TheClankerApp",
    "description": "easy way to deploy token",
    "primaryCategory": "finance",
    "heroImageUrl": "https://clanker-dep.vercel.app/hero.jpeg",
    "ogImageUrl": "https://clanker-dep.vercel.app/hero.jpeg"
    },
  });
}
