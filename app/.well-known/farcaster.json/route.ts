export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL;

  return Response.json({
    "accountAssociation": {
    "header": "eyJmaWQiOjUxMzE5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDBhYTYzY2Q5ODA4OGQzQTcyNzA0MjM1ZDVCYjgxZjZjOTE5MzM2NTMifQ",
    "payload": "eyJkb21haW4iOiJ0aGVjbGFua2VyYXBwLnZlcmNlbC5hcHAifQ",
    "signature": "MHg3NDMyMzQ5NTI2MWFhYzYyYmVhOWMwZTRjZWQ3MDExYzYxODY1ZDhkYjg3NjZhYjkxZmY3MDc5MmE1ZTNjOGJlMDM2MzU4OTU5MDk3NDg4MzViODQxYzE5ZWM5NTc1M2I5NDE0OWIyZDljOGFmMDkxMGUwYWRiYjdkNmJmMDdjMTFj"
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
