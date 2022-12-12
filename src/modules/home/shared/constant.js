import { ReactComponent as Messenger } from "../../../assets/service-logo/messenger.svg";
import { ReactComponent as Gmail } from "../../../assets/service-logo/gmail.svg";
import { ReactComponent as Twitter } from "../../../assets/service-logo/twitter.svg";
import { ReactComponent as Linkedin } from "../../../assets/service-logo/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../../assets/service-logo/whatsapp.svg";
import { ReactComponent as Zalo } from "../../../assets/service-logo/zalo.svg";


export const services = {
  zalo: 'zalo',
  messenger: 'messenger',
  twitter: 'twitter',
  linkedin: 'linkedin',
  whatsapp: 'whatsapp',
  gmail: 'gmail'
}

export const ServiceLogoIcon = {
  [services.zalo]: Zalo,
  [services.messenger]: Messenger,
  [services.twitter]: Twitter,
  [services.linkedin]: Linkedin,
  [services.whatsapp]: Whatsapp,
  [services.gmail]: Gmail,
}