import { Resend } from "resend";
import { NextResponse } from "next/server";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: ContactForm = await request.json();
    const { firstName, lastName, email, organization, inquiryType, message } =
      body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Luvante Website <onboarding@resend.dev>",
      to: "btb@luvante.com",
      replyTo: email,
      subject: `New ${inquiryType || "General"} Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Organization</td><td style="padding:8px;">${organization || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Inquiry Type</td><td style="padding:8px;">${inquiryType || "—"}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
