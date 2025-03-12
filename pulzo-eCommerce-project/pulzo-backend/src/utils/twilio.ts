import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

const twilioClient = twilio(accountSid, authToken);

export async function sendEnquirySMS(
  to: string,
  productName: string,
  customerName: string
) {
  try {
    const message = await twilioClient.messages.create({
      body: `Hi ${customerName}, thank you for your enquiry about ${productName}. Our support team will contact you within 24 hours. For urgent issues, call us at ${process.env.COMPANY_PHONE}.`,
      from: twilioPhone,
      to: to,
    });
    console.log("SMS sent:", message.sid);
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
}
