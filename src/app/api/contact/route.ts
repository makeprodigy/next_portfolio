import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the incoming data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service configuration missing' },
        { status: 500 }
      );
    }
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || 'payneparihar13@gmail.com';

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: receiverEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject} - from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111; line-height: 1.6;">
          <h2 style="margin-top: 0; color: #000; border-bottom: 2px solid #eaeaea; padding-bottom: 12px;">New Message from Portfolio</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 6px 0; color: #666; width: 90px;"><strong>Name:</strong></td>
              <td style="padding: 6px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 6px 0; color: #111;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #666;"><strong>Subject:</strong></td>
              <td style="padding: 6px 0; color: #111; font-weight: 600;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 18px; background-color: #f9fafb; border-left: 4px solid #111; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; color: #222; font-size: 15px;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
      text: `New contact form submission from your portfolio:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend email delivery error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email via Resend' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      id: data?.id,
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
