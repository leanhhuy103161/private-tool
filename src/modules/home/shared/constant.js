import { ReactComponent as Messenger } from "../../../assets/service-logo/messenger.svg";
import { ReactComponent as Zalo } from "../../../assets/service-logo/zalo.svg";
import { ReactComponent as Viber } from "../../../assets/service-logo/viber.svg";
import { ReactComponent as Sms } from "../../../assets/service-logo/sms.svg";

export const services = {
  zalo: 'zalo',
  messenger: 'messenger',
  twitter: 'twitter',
  linkedin: 'linkedin',
  whatsapp: 'whatsapp',
  gmail: 'gmail',
  viber: 'viber',
  sms: 'sms',
}

export const ServiceLogoIcon = {
  [services.zalo]: Zalo,
  [services.messenger]: Messenger,
  [services.sms]: Sms,
  [services.viber]: Viber,
}

export const ServicesList = [
  {
    icon: Zalo,
    name: services.zalo,
    number: "17"
  },
  {
    icon: Messenger,
    name: services.messenger,
    number: "19"
  },
  {
    icon: Sms,
    name: services.sms,
    number: "22"
  },
  {
    icon: Viber,
    name: services.viber,
    number: "11"
  },
]