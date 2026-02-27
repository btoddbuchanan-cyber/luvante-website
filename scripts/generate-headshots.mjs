/**
 * Generate professional AI-enhanced headshots via OpenRouter (Gemini 3 Pro Image Preview)
 * Usage: node scripts/generate-headshots.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "YOUR_API_KEY_HERE";
const MODEL = "google/gemini-3-pro-image-preview";

const TEAM_MEMBERS = [
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Chris-Angelou.png",
    name: "Chris Angelou",
    role: "CEO",
    output: "chris-angelou.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Morgan-Allan-22.png",
    name: "Morgan Allan",
    role: "Product Design",
    output: "morgan-allan.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Todd-Buchanan.png",
    name: "Todd Buchanan",
    role: "Corporate Development",
    output: "todd-buchanan.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Justin-Maxwell.png",
    name: "Justin Maxwell",
    role: "Investor Relations",
    output: "justin-maxwell.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Elliott-Routly-2.png",
    name: "Elliott Routly",
    role: "Finance & Treasury",
    output: "elliott-routly.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Enoch-Lenge.png",
    name: "Enoch Lenge",
    role: "Sales",
    output: "enoch-lenge.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-Adam-Procell1.png",
    name: "Adam Procell",
    role: "Strategy Advisor",
    output: "adam-procell.png",
  },
  {
    file: "Luvante-Leadership-Team-for-Sustainable-Elevated-EV-Charging-Stations-John-Belbusti.png",
    name: "John Belbusti",
    role: "Scale-up Advisor",
    output: "john-belbusti.png",
  },
];

const PROMPT = `Create a professional corporate headshot based on this photo.

CRITICAL: Keep the EXACT same person's likeness, face shape, features, skin tone, hair — they must be clearly recognizable as the same person.

Requirements:
- Professional studio-quality lighting with soft, even key light and subtle rim light
- Clean dark gradient background (deep navy blue #002c49 fading to charcoal #1a1a1a)
- Sharp focus on face with gentle background blur
- Professional warm color grading with natural skin tones
- Person should appear confident, approachable, and executive-level
- Head and shoulders framing, centered, slight angle
- Professional business attire (dark suit, white/light shirt)
- Square crop format
- High-end Fortune 500 executive team page quality

Generate the enhanced professional headshot image now.`;

async function generateHeadshot(member) {
  const imagePath = path.join(IMAGES_DIR, member.file);

  if (!fs.existsSync(imagePath)) {
    console.error(`  [SKIP] Source image not found: ${member.file}`);
    return false;
  }

  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString("base64");

  console.log(`  [SEND] Calling OpenRouter for ${member.name}...`);

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        modalities: ["text", "image"],
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: PROMPT },
              {
                type: "image_url",
                image_url: { url: `data:image/png;base64,${base64Image}` },
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`  [ERROR] API error for ${member.name}: ${response.status} - ${errorText.substring(0, 300)}`);
      return false;
    }

    const data = await response.json();
    const msg = data.choices?.[0]?.message;

    if (!msg) {
      console.error(`  [ERROR] No message in response for ${member.name}`);
      return false;
    }

    // Check the images field (OpenRouter's Gemini format)
    if (msg.images && msg.images.length > 0) {
      for (const img of msg.images) {
        if (img.image_url?.url) {
          const match = img.image_url.url.match(/^data:image\/(\w+);base64,(.+)$/);
          if (match) {
            const ext = match[1] === "jpeg" ? "jpg" : match[1];
            const outputName = member.output.replace(/\.\w+$/, `.${ext}`);
            const outputPath = path.join(IMAGES_DIR, "team", outputName);
            fs.writeFileSync(outputPath, Buffer.from(match[2], "base64"));
            const size = (fs.statSync(outputPath).size / 1024).toFixed(0);
            console.log(`  [OK] Saved: ${outputName} (${size} KB)`);
            return true;
          }
        }
      }
    }

    // Fallback: check content array
    if (Array.isArray(msg.content)) {
      for (const part of msg.content) {
        if (part.type === "image_url" && part.image_url?.url) {
          const match = part.image_url.url.match(/^data:image\/(\w+);base64,(.+)$/);
          if (match) {
            const outputPath = path.join(IMAGES_DIR, "team", member.output);
            fs.writeFileSync(outputPath, Buffer.from(match[2], "base64"));
            console.log(`  [OK] Saved (content): ${member.output}`);
            return true;
          }
        }
      }
    }

    console.log(`  [WARN] No image found in response for ${member.name}`);
    console.log(`  Keys:`, Object.keys(msg));
    return false;
  } catch (err) {
    console.error(`  [ERROR] Failed for ${member.name}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log("=== Luvante AI Headshot Generator ===");
  console.log(`Model: ${MODEL}`);
  console.log(`Team members: ${TEAM_MEMBERS.length}\n`);

  const teamDir = path.join(IMAGES_DIR, "team");
  if (!fs.existsSync(teamDir)) {
    fs.mkdirSync(teamDir, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (const member of TEAM_MEMBERS) {
    console.log(`\n[${success + failed + 1}/${TEAM_MEMBERS.length}] Processing ${member.name} (${member.role})...`);
    const result = await generateHeadshot(member);
    if (result) success++;
    else failed++;

    // Delay between requests to avoid rate limits
    if (TEAM_MEMBERS.indexOf(member) < TEAM_MEMBERS.length - 1) {
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Success: ${success}, Failed: ${failed}`);
}

main().catch(console.error);
