export const convertedMsgFromAuth = (message: string) => {
  let convertedMsg: string;
  switch (message) {
    case "auth/email-already-in-use": {
      convertedMsg = "Podany adres email jest już w użyciu";
      break;
    }
    default: {
      convertedMsg = "Coś poszło nie tak";
      break;
    }
  }
  return convertedMsg;
};
