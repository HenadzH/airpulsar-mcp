# AirPulsar MCP Server — 22-Tool B2B Lead Generation & Autonomous Cold Email Outreach for Claude Desktop & Cursor

**The first B2B outreach MCP server that finds live companies in the open web, verifies executive emails, and schedules timezone-aware Gmail outreach — entirely from your AI chat.**

> **Endpoint:** `https://airpulsar.com/mcp` (Streamable HTTP, hosted, OAuth-secured)
> **Web dashboard:** [https://airpulsar.com](https://airpulsar.com)
> **Docs & MCP page:** [https://airpulsar.com/mcp](https://airpulsar.com/mcp)

Most lead-generation MCP servers hand you a static database of questionable age. AirPulsar is different: it is an **Apollo.io alternative built on live Google Search Grounding** — every company is scraped from the real, working web at the moment you ask, DNS/MX-verified, with decision-maker emails verified against Microsoft 365 tenants before anything is sent.

---

## Why AirPulsar MCP

| Pain with the old stack (Apollo + Hunter + Clay + Instantly) | AirPulsar MCP |
|---|---|
| $300–$800/mo across 4 tools, 2 days of CSV plumbing | **$12/mo** (or 20 companies free on sign-in), one conversation |
| 35–40% bounce rates from stale purchased databases | **Zero stale databases** — live web search + MX verification at query time |
| Manual copy-paste of leads between tools | Your AI agent saves companies, contacts, and drafts directly via tools |
| Follow-ups sent at 3 a.m. recipient time | **Timezone-aware scheduling** (09:00–17:00 local) with anti-collision spacing |
| Broad "VP of Whatever" blast lists | **Operational Owner targeting** (180° Inversion Law — buyers, never competitors) |

## Connect in 30 seconds

### Claude (Desktop / Web)
1. Open **Settings → Connectors → Add custom connector**
2. Paste: `https://airpulsar.com/mcp`
3. Sign in with your Google account when prompted

### Claude Code (CLI)
```bash
claude mcp add --transport http airpulsar https://airpulsar.com/mcp
```

### Cursor / Cline / Windsurf
```json
{
  "mcpServers": {
    "airpulsar": { "url": "https://airpulsar.com/mcp" }
  }
}
```

You need a free AirPulsar account (sign in once at [airpulsar.com](https://airpulsar.com)). New accounts get **20 cloud-researched companies free**.

## 22 tools — full pipeline, one protocol

**Mission control**
| Tool | What it does |
|---|---|
| `get_user_profile` | Your sender identity & workspace info |
| `get_billing_status` | Plan, quota, and remaining free companies |
| `list_missions` / `create_mission` | Manage ABM missions with your offer + ICP |
| `set_campaign_status` | Pause/resume discovery & email queues safely |

**Live company discovery**
| Tool | What it does |
|---|---|
| `add_company_lead` | Save a researched company with facts, contacts, and drafts |
| `get_leads` | Query the pipeline with full-text search |
| `get_company_dossier` | Deep dossier: facts, tech stack, decision-makers |
| `enrich_company_data` | Deepen research on an existing lead |
| `export_leads_csv` | Export the whole list for CRM |

**Contact intelligence**
| Tool | What it does |
|---|---|
| `update_company_contacts` | Push verified executives (16-pattern M365 email hunt results) |
| `get_email_status` | Deliverability status of any contact |
| `manage_blacklist` | Global clean list / suppression |

**Gmail outreach (write-only OAuth — we can never read your inbox)**
| Tool | What it does |
|---|---|
| `connect_mission_email` | Connect a Gmail sender per mission |
| `disconnect_email` | Revoke access |
| `update_email_drafts` | Store the personalized 3-step sequence |
| `manage_contact_queue` | SELECTED / SPARE / REJECTED strategy per contact |
| `get_scheduled_outreach` | Inspect the computed send schedule |
| `reschedule_outreach` | Recalculate timezone-aware schedule |
| `set_lead_reminder` | Surface follow-ups in your Reminders tab |
| `update_delivery_settings` | Working hours, pacing, daily caps |

**Reusable templates**
| Tool | What it does |
|---|---|
| `manage_campaign_templates` | SAVE / APPLY / DELETE proven 3-step sequences |

## 3 built-in prompts

- **`b2b_outreach_strategy`** — design a 180°-inverted ABM mission (queries, exclusions, operational-owner personas)
- **`research_company`** — deep fact reconnaissance + 50/50 Win-Win outreach draft for one company
- **`handle_prospect_reply`** — freeze follow-ups, analyze sentiment, set reminders, draft a reply

## What makes the outreach different

1. **180° Inversion Law** — the agent targets *buyers and operators* of your offer, never competitors, directories, or job boards.
2. **Operational Owner targeting** — not the CEO by default: the person whose daily KPI hurts (Chief Engineer, VP Sales, Supply Chain Director…).
3. **Navigator Mode** — if only `info@` / `sales@` exists, the letter politely asks the office to route it to the named decision-maker.
4. **50/50 Win-Win Bridge** — every letter is 50% your offer + 50% verified facts from the prospect's own website. 45–80 words, 2–5 word subjects, zero hype.
5. **13-Layer Deliverability Shield** — official Gmail OAuth (`gmail.send` only, CASA-avoiding by design), recipient-local working hours, anti-collision scheduling across the queue.

## Pricing

- **20 companies free** immediately after Google sign-in (no card)
- **Bring Your Own Key:** your Google AI Studio key = 5,000 free search calls/month from Google; real inference cost ≈ **$0.006 per company**, $0 platform markup
- **Full unlimited:** **$12/mo** (or $59/6 months · $99/year)

## Repository status

This repository is the **public showcase** for the hosted AirPulsar MCP server. The server itself runs at `https://airpulsar.com/mcp` and is part of the [AirPulsar platform](https://airpulsar.com). Documentation, connection guides, and the tool reference live here.

- 🌐 [Web app](https://airpulsar.com)
- 🧩 [MCP endpoint](https://airpulsar.com/mcp)
- 🔒 [Privacy policy](https://airpulsar.com/privacy)
- 🚫 [Anti-spam policy](https://airpulsar.com/anti-spam)
- 📧 Support: support@airpulsar.com

## License

Documentation in this repository is released under the [MIT License](LICENSE). The hosted AirPulsar service is a commercial product; see [airpulsar.com](https://airpulsar.com) for terms.
