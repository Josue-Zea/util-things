// Para este modulo leer la documentación de nodemailer
const nodemailer = require("nodemailer");
const { secretConfig, mailConfig } = require("../config/config");
const {
  recoverTemplate,
  activationTemplate,
  activationTemplateAdmin,
} = require("./templates");

const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  port: 587,
  secure: false,
  auth: {
    user: mailConfig.mail,
    pass: mailConfig.password,
  },
});

async function sendRecoveryMail(name, tempoPass, email) {
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: mailConfig.mail, // sender address
      to: email, // list of receivers
      subject: "Solicitud de contraseña temporal.", // Subject line
      text: plainText(name, tempoPass), // plain text body
      html: recoverTemplate(name, tempoPass), // html body
    });

    console.log("Correo enviado: %s", info.messageId);
    return true;
  } catch (e) {
    console.log(`ERROR:: ${e.name}: ${e.message}`);
    return false;
  }
}

const plainText = (name, tempoPass) => {
  return `Utilice esta clave para restablecer su contraseña. Solo es válida durante 2 minutos.

    Pateo Bonito ( https://pateoBonito.com )
    
    ************
    Hola ${name},
    ************
    
    Recientemente, solicitó restablecer la contraseña de su cuenta de Pateo Bonito. Utilice el botón de abajo para restablecerlo. Este restablecimiento de contraseña solo es válido durante los próximos 2 minutos.
    
    Contraseña temporal ( ${tempoPass} )
    
    Si no solicitó un restablecimiento de contraseña, ignore este correo electrónico.
    
    Thanks,
    The Pateo Bonito team
    
    [Pateo Bonito, LLC]
    
    Los mas gallos S.A.`;
};

async function sendActivationMail(email, name, token) {
  try {
    // send mail with defined transport object
    const url = `${secretConfig.backUrl}/api/sesion/activar/${token}`;
    let info = await transporter.sendMail({
      from: mailConfig.mail, // sender address
      to: email, // list of receivers
      subject: "Bienvenido a Pateo Bonito.", // Subject line
      text: "Bienvenido a Pateo Bonito", // plain text body
      html: activationTemplate(name, url), // html body
    });

    console.log("MSG:: Correo enviado: %s new account", info.messageId);
    return true;
  } catch (e) {
    console.log(`ERROR:: ${e.name}: ${e.message}`);
    return false;
  }
}

async function sendActivationMailAdmin(email, name, password, tipo) {
  try {
    var cuenta = "ADMIN";
    if (tipo == 2) {
      var cuenta = "EMPLEADO";
    }
    let info = await transporter.sendMail({
      from: mailConfig.mail, // sender address
      to: email, // list of receivers
      subject: "Bienvenido a Pateo Bonito.", // Subject line
      text: "Bienvenido a Pateo Bonito", // plain text body
      html: activationTemplateAdmin(name, password, cuenta), // html body
    });

    console.log("MSG:: Correo enviado: %s new account", info.messageId);
    return true;
  } catch (e) {
    console.log(`ERROR:: ${e.name}: ${e.message}`);
    return false;
  }
}

module.exports = {
  sendRecoveryMail,
  sendActivationMail,
  sendActivationMailAdmin,
};