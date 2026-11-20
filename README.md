# AirPulsar MCP Server — 25-Tool AI Company Discovery, Fit Intelligence & Outreach for Claude, Cursor, OpenCode & Antigravity

**Find companies worth contacting — and know why they fit.**

Describe who you need in **any country** (US, Russia, Europe, UK, Asia, LATAM & worldwide). AirPulsar finds real company websites via live Google Search Grounding, explains **"Why this offer fits them"** (0–10 score backed by live site facts and source URLs), verifies decision-makers (DNS/MX & Microsoft 365), and writes personal emails in **any language** — ready for human-approved Gmail dispatch (`gmail.send`) or 25-column RFC 4180 CSV export.

> **Official npm connector:** [`npx -y airpulsar-mcp`](https://www.npmjs.com/package/airpulsar-mcp) (macOS, Linux & Windows)
> **Hosted MCP & setup docs:** [https://airpulsar.com/mcp](https://airpulsar.com/mcp)
> **Live interactive demo (no login):** [https://airpulsar.com/demo](https://airpulsar.com/demo)
> **Web workspace:** [https://airpulsar.com](https://airpulsar.com)

---

## Why AirPulsar MCP (Instead of Stale Databases or Raw Chat Search)

| Problem with Legacy Stack (Apollo, ZoomInfo, Clay, Raw Chat) | AirPulsar MCP (25 Tools) |
|---|---|
| Stale US-centric contact lists with 30–40% bounce rates | **Zero static databases** — live Google Search in **any country & language** |
| No clear reason why a prospect actually needs your offer | **Fit Intelligence** — 0–10 score + *"Why this offer fits them"* with live source URLs |
| Plain chat search leaves hours of manual MX checks & deduping | **Automated DNS/MX + Microsoft 365 verification** + persistent suppression list |
| $150–$800/mo across multiple tools & credit markups | **Dual-Key Google AI Studio BYOK** (~$0.006/company, $0 markup) + **$12/mo** flat plan |
| Full inbox read access required by outreach tools | **Zero Inbox Spying** — official write-only Gmail OAuth (`gmail.send` scope only) |
| Generic blasts sent at 3 a.m. | **Human-approved personal emails** in any language, scheduled 09:00–17:00 recipient local time, or **25-col RFC 4180 CSV** |

---

## Connect in 30 Seconds

1. Get your `AIRPULSAR_API_TOKEN` at [https://airpulsar.com/mcp](https://airpulsar.com/mcp) (7-day free trial, no credit card).
2. Add the official npm connector (`airpulsar-mcp`) to your MCP client:

### Claude Desktop / Cursor / OpenCode / Antigravity (macOS & Linux)
```json
{
  "mcpServers": {
    "airpulsar": {
      "command": "npx",
      "args": ["-y", "airpulsar-mcp"],
      "env": {
        "AIRPULSAR_API_TOKEN": "YOUR_AIRPULSAR_API_TOKEN"
      }
    }
  }
}
```

### Windows (`cmd /c npx`)
```json
{
  "mcpServers": {
    "airpulsar": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "airpulsar-mcp"],
      "env": {
        "AIRPULSAR_API_TOKEN": "YOUR_AIRPULSAR_API_TOKEN"
      }
    }
  }
}
```

### Claude Code (CLI) & Streamable HTTP
```bash
claude mcp add --transport http airpulsar https://airpulsar.com/mcp
```

---

## 25 MCP Tools — Full Discovery-to-Outreach Pipeline

**Workspace & Mission Management**
| Tool | What it does |
|---|---|
| `get_user_profile` | Sender identity, defaults & workspace info |
| `get_billing_status` | Subscription status, trial/plan details & quotas |
| `list_missions` | List all active company discovery missions |
| `create_mission` | Create a mission with target country/ICP & offer |
| `update_mission_offer` | Update offer text, value proposition or signature |
| `delete_mission` | Delete an obsolete mission cleanly |
| `set_campaign_status` | Pause/resume outreach queues safely |

**Live Company Discovery & Fit Intelligence**
| Tool | What it does |
|---|---|
| `add_company_lead` | Save a researched company with fit score, facts, contacts & drafts |
| `get_leads` | Query and filter researched companies across a mission |
| `get_company_dossier` | Full dossier: live site facts, source URLs, fit reasoning & decision-makers |
| `enrich_company_data` | Deepen research and verification on an existing company |
| `export_leads_csv` | Export all researched companies (with or without email) to 25-column RFC 4180 CSV |

**Decision-Maker Verification & Safety**
| Tool | What it does |
|---|---|
| `update_company_contacts` | Update verified executives & DNS/MX + Microsoft 365 results |
| `get_email_status` | Check deliverability & queue status of any contact |
| `manage_blacklist` | Manage permanent do-not-contact domains & unsubscribes |

**Gmail OAuth Outreach (`gmail.send` Only) & Templates**
| Tool | What it does |
|---|---|
| `connect_mission_email` | Attach a dedicated Gmail account per mission |
| `set_sender_alias` | Configure Gmail Send-As custom domain alias |
| `get_domain_email_guide` | Step-by-step free custom domain email setup in Gmail |
| `disconnect_email` | Disconnect Gmail access cleanly |
| `update_email_drafts` | Edit & approve 1–3 step personal email sequences |
| `manage_contact_queue` | Set `SELECTED` / `SPARE` / `EXCLUDED` contact routing |
| `get_scheduled_outreach` | Inspect recipient-local timezone send schedule |
| `reschedule_outreach` | Recalculate anti-collision working-hours schedule |
| `set_lead_reminder` | Schedule follow-up reminders |
| `update_delivery_settings` | Configure local working hours, spacing & daily limits |
| `manage_campaign_templates` | Save, apply & reuse proven outreach templates |

---

## Core Engineering Principles

1. **Any Country, Any Language:** Works equally well for B2B sales, manufacturing, logistics, exporters, agencies, R&D partnerships, venture outreach, and hiring across the US, Russia, Europe, UK, Asia, and LATAM.
2. **Fit Reasoning First:** Every company is scored (`0–10`) with a concrete *"Why this offer fits them"* brief grounded in live website facts before you ever send a message.
3. **Smart Navigator Mode:** When a company only publishes a general gateway (`info@`, `office@`), AirPulsar identifies the relevant decision-maker and addresses them in the first paragraph so reception routes your inquiry internally.
4. **Human Control & Zero Inbox Spying:** Export everything to 25-column RFC 4180 CSV, or send human-approved drafts via write-only Gmail OAuth (`gmail.send`) strictly during each recipient's 09:00–17:00 local business hours.

---

## Transparent Pricing (BYOK Wholesale Model)

- **7-Day Full PRO Free Trial** — no credit card required
- **Dual-Key Google AI Studio BYOK:** connect your own Google AI Studio key (~**$0.006** inference cost per company, **5,000 free monthly Google Search calls** on a paid key, optional Free Tier key for ~55% token savings, **$0 markup on contacts**)
- **Flat Platform Plans:** **$12/month** · **$30/3 months ($10/mo)** · **$99/year ($8.25/mo)** — unlimited missions, unlimited Gmail accounts, 25-col CSV export, and all 25 MCP tools.

---

## Links

- 🌐 [AirPulsar Web App](https://airpulsar.com)
- ▶️ [Interactive Demo (No Login)](https://airpulsar.com/demo)
- 🧩 [MCP Setup & 25 Tools](https://airpulsar.com/mcp)
- 📦 [npm Package (`airpulsar-mcp`)](https://www.npmjs.com/package/airpulsar-mcp)
- 💰 [Pricing](https://airpulsar.com/pricing)
- 🔒 [Privacy Policy](https://airpulsar.com/privacy) · 🚫 [Anti-Spam Policy](https://airpulsar.com/anti-spam) · 📄 [Terms](https://airpulsar.com/terms)
- 📧 Support: support@airpulsar.com

## License

Documentation in this repository is released under the [MIT License](LICENSE). The hosted AirPulsar service is a commercial product; see [airpulsar.com](https://airpulsar.com) for terms.
