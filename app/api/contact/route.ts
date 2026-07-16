import { NextRequest, NextResponse } from "next/server";

const submissions = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

type Payload = Record<string, unknown>;
type Errors = Record<string, string>;

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: Payload) {
  const errors: Errors = {};
  const email = asString(payload.email);
  const description = asString(payload.description);

  if (asString(payload.website)) errors.website = "Submission rejected.";
  if (!asString(payload.name)) errors.name = "Enter your name.";
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = "Enter a valid work email.";
  if (!asString(payload.company)) errors.company = "Enter your company.";
  if (!asString(payload.interest)) errors.interest = "Select an area of interest.";
  if (description.length < 30) errors.description = "Describe the challenge in at least 30 characters.";
  if (payload.consent !== "on") errors.consent = "Confirm consent before sending.";

  return errors;
}

function rateLimited(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = submissions.get(ip);

  if (!current || current.resetAt < now) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > LIMIT;
}

export async function POST(request: NextRequest) {
  if (rateLimited(request)) {
    return NextResponse.json({ message: "Too many submissions. Try again later." }, { status: 429 });
  }

  const payload = (await request.json().catch(() => null)) as Payload | null;

  if (!payload) {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const errors = validate(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Inquiry accepted. Connect an email or CRM integration to route this lead in production."
  });
}
