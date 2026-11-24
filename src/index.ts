#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListToolsRequestSchema, CallToolRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import * as fs from "fs";
import * as path from "path";

// Read tools metadata from tools.json located next to this file or in package root
function loadToolsMetadata(): any[] {
  const candidatePaths = [
    path.join(__dirname, "tools.json"),
    path.join(__dirname, "../src/tools.json"),
    path.join(process.cwd(), "tools.json")
  ];
  for (const p of candidatePaths) {
    if (fs.existsSync(p)) {
      try {
        return JSON.parse(fs.readFileSync(p, "utf-8"));
      } catch { }
    }
  }
  return [];
}

const tools = loadToolsMetadata();

const token = (process.env.AIRPULSAR_TOKEN || process.env.AIRPULSAR_API_KEY || process.argv[2] || "").trim();

const API_ENDPOINT = process.env.AIRPULSAR_ENDPOINT || "https://us-central1-gen-lang-client-0027271379.cloudfunctions.net/executeMcpTool";

const server = new Server(
  {
    name: "airpulsar-copilot",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools,
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (!token) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: "Missing AIRPULSAR_TOKEN. Set the AIRPULSAR_TOKEN environment variable (from https://airpulsar.com/mcp) to invoke AirPulsar tools.",
        },
      ],
    };
  }

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        tool: name,
        args: args || {},
      }),
      signal: AbortSignal.timeout(25_000),
    });

    const data: any = await response.json();

    if (!response.ok) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `AirPulsar API Error (${response.status}): ${data?.error || JSON.stringify(data)}`,
          },
        ],
      };
    }

    return data;
  } catch (error: any) {
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: `Network Error contacting AirPulsar Gateway: ${error.message}`,
        },
      ],
    };
  }
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("AirPulsar MCP Server running on stdio");
}

run().catch((err) => {
  console.error("Fatal MCP error:", err);
  process.exit(1);
});

