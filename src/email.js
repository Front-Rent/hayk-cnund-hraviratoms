import emailjs from "emailjs-com";

const YOUR_SERVICE_ID = "service_jgl2b61";
const YOUR_TEMPLATE_ID = "template_8ufkscl";
const YOUR_USER_ID = "gCuXPlQf4Wy1to_Wf";

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
