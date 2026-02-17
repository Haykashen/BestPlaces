import styleDarkWeb from '@/assets/themes/styleDarkWeb';
import styleLightWeb from '@/assets/themes/styleLightWeb';
import styleDarkAndroid from '@/assets/themes/styleDarkAndroid';
import styleLightAndroid from '@/assets/themes/styleLightAndroid';  
  
const styleSetting: { [key: string]: { [key: string]: any } } = {
    'dark': {
        'android': styleDarkAndroid,
        'ios': styleDarkAndroid,
        'web': styleDarkWeb,
    },
    'light': {
        'android': styleLightAndroid,
        'ios': styleLightAndroid,
        'web': styleLightWeb,
    }
}

export default styleSetting;