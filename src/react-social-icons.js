import 'social-icons'
import {
  SocialIcon,
  networkFor,
  register,
  social_icons,
  network_names,
  uri_regex
} from './component.jsx'

export function getKeys() {
  return [...network_names]
}

export {
  SocialIcon,
  networkFor,
  register,
  social_icons,
  network_names,
  uri_regex,
}
