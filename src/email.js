import emailjs from "emailjs-com";

const YOUR_SERVICE_ID = "service_iddtzgd";
const YOUR_TEMPLATE_ID = "template_4lc90yw";
const YOUR_USER_ID = "G4oq1Ldx3K5iqSUp3";

const sendEmail = async (name, attendance) => {
  try {
    const templateParams = {
      name,
      attendance,
      to_email1: "haykzakaryan1@outlook.com",
      to_email2: "rparonyan00@gmail.com",
    };
    const result = await emailjs.send(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      templateParams,
      YOUR_USER_ID
    );
    console.log("Email sent successfully:", result.text);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

export default sendEmail;
