module.exports = {
  async afterCreate(event) {
    const { result } = event;

    await strapi.plugins["email"].services.email.send({
      to: process.env.NOTIFICATION_TO,
      from: `${result.contactName} via Photowert <${process.env.EMAIL_FROM}>`,
      subject: `photowert.com | Neue Anfrage von ${result.contactName} (${result.emailAddress})`,
      text: `Name: ${result.contactName}<br/>Email: ${
        result.emailAddress
      }<br/><br/>${result.msgBody.replace(/[\n\r]+/gm, "<br/>")}`,
    });
  },
};
