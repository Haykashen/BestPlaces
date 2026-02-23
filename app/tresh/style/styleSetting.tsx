import styleDarkWeb from '@/app/tresh/style/styleDarkWeb';
import styleLightWeb from '@/app/tresh/style/styleLightWeb';
import styleDarkAndroid from '@/app/tresh/style/styleDarkAndroid';
import styleLightAndroid from '@/app/tresh/style/styleLightAndroid';  
  
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