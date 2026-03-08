import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { fullName, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `${fullName} <${process.env.EMAIL_USER}>`,
      replyTo: `"${fullName}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Message from Portfolio",
      text: `Name: ${fullName}\nEmail: ${email}\nMessage:\n${message}`,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}