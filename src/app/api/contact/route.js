import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json();

    // Basic server-side validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: "All required fields must be filled." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subjectLine = subject
      ? `[Mighty Homes] ${subject} from ${firstName} ${lastName}`
      : `[Mighty Homes] New Inquiry from ${firstName} ${lastName}`;

    // Email to company
    await transporter.sendMail({
      from: `"Mighty Homes Website" <${process.env.GMAIL_USER}>`,
      to: "info@mightygomesinc.ca",
      subject: subjectLine,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: #e1c08e; padding: 32px 40px; text-align: center; }
            .header h1 { color: #fff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1px; }
            .header p { color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 13px; }
            .body { padding: 32px 40px; }
            .field { margin-bottom: 18px; }
            .field label { display: block; font-size: 11px; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 4px; }
            .field p { margin: 0; font-size: 15px; color: #1a1a1a; font-weight: 500; }
            .divider { border: none; border-top: 1px solid #f0f0f0; margin: 20px 0; }
            .message-box { background: #fafafa; border-left: 3px solid #e1c08e; padding: 16px 20px; border-radius: 0 8px 8px 0; }
            .message-box p { margin: 0; color: #444; font-size: 14px; line-height: 1.7; }
            .footer { background: #f5f5f5; padding: 20px 40px; text-align: center; }
            .footer p { margin: 0; color: #aaa; font-size: 12px; }
            .footer a { color: #e1c08e; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>New Website Inquiry</h1>
              <p>Submitted via mightyhomesinc.ca</p>
            </div>
            <div class="body">
              <div style="display:flex;gap:20px;flex-wrap:wrap;">
                <div class="field" style="flex:1;min-width:200px;">
                  <label>First Name</label>
                  <p>${firstName}</p>
                </div>
                <div class="field" style="flex:1;min-width:200px;">
                  <label>Last Name</label>
                  <p>${lastName}</p>
                </div>
              </div>
              <hr class="divider" />
              <div style="display:flex;gap:20px;flex-wrap:wrap;">
                <div class="field" style="flex:1;min-width:200px;">
                  <label>Email Address</label>
                  <p><a href="mailto:${email}" style="color:#e1c08e;">${email}</a></p>
                </div>
                <div class="field" style="flex:1;min-width:200px;">
                  <label>Phone Number</label>
                  <p><a href="tel:${phone}" style="color:#e1c08e;">${phone}</a></p>
                </div>
              </div>
              ${subject ? `<hr class="divider" /><div class="field"><label>Subject</label><p>${subject}</p></div>` : ""}
              <hr class="divider" />
              <div class="field">
                <label>Message</label>
                <div class="message-box">
                  <p>${message.replace(/\n/g, "<br/>")}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Mighty Homes Inc. &bull; <a href="mailto:info@mightygomesinc.ca">info@mightygomesinc.ca</a> &bull; <a href="tel:5874357924">587-435-7924</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Mighty Homes" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Mighty Homes!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 30px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
            .header { background: #e1c08e; padding: 36px 40px; text-align: center; }
            .header h1 { color: #fff; margin: 0; font-size: 24px; font-weight: 800; }
            .header p { color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 14px; }
            .body { padding: 36px 40px; }
            .body p { color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 16px; }
            .highlight { background: #fdf8ef; border: 1px solid #e1c08e33; border-radius: 10px; padding: 20px 24px; margin: 24px 0; }
            .highlight p { margin: 0; color: #7a6235; font-size: 14px; }
            .cta { display: inline-block; background: #e1c08e; color: #fff; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-size: 14px; margin-top: 8px; }
            .footer { background: #f5f5f5; padding: 20px 40px; text-align: center; }
            .footer p { margin: 0; color: #aaa; font-size: 12px; }
            .footer a { color: #e1c08e; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>Thank You, ${firstName}!</h1>
              <p>We've received your message and will be in touch soon.</p>
            </div>
            <div class="body">
              <p>Hi ${firstName},</p>
              <p>
                Thank you for reaching out to <strong>Mighty Homes</strong>. We're excited to connect with you
                and help you on your journey to finding or building your perfect home.
              </p>
              <p>
                Our team typically responds within <strong>24 business hours</strong>. In the meantime,
                feel free to browse our website for inspiration.
              </p>
              <div class="highlight">
                <p><strong>Your message has been received.</strong><br/>
                Subject: ${subject || "General Inquiry"}<br/>
                Reference: #MH-${Date.now().toString().slice(-6)}</p>
              </div>
              <p>If you have any urgent questions, please don't hesitate to contact us directly:</p>
              <p>
                📞 <a href="tel:5874357924" style="color:#e1c08e;">587-435-7924</a><br/>
                ✉️ <a href="mailto:info@mightygomesinc.ca" style="color:#e1c08e;">info@mightygomesinc.ca</a>
              </p>
              <br/>
              <p style="color:#999;font-size:13px;">Warm regards,<br/><strong style="color:#1a1a1a;">The Mighty Homes Team</strong></p>
            </div>
            <div class="footer">
              <p>Mighty Homes Inc. &bull; Alberta, Canada &bull; <a href="mailto:info@mightygomesinc.ca">info@mightygomesinc.ca</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
