import Anthropic from "@anthropic-ai/sdk"


const client = new Anthropic(
  {
  defaultHeaders: { "anthropic-workspace-id": "wrkspc_016SrsT1gxLtpgoJLHfUjA1V" },
  }
);

const response = await client.messages.create({
  model: "claude-opus-5",
  max_tokens: 1024,
  messages: [{ role: "user", content: "What is an AI agent, in one sentence?" }],
});

console.dir(response, { depth: null });