//export type TCountry = {id: string, name: string, capital: string, language: string, currency: string, description: string, url: string};
//export type TCountryItemProps = {name: string, capital?: string, language?: string, currency?: string, description?: string, url: string, onPress?: (() => void) };
export type TPlace = {id:string, name: string, location?: string, url: string[], favorite:boolean, about: string, longitude?:string, latitude?:string, onPress?: (() => void), onLongPress?: (() => void) };
//export type TPlaceItemProps = {name: string, country: string | string[], description?: string, url: string[], favorite:boolean, onPress?: (() => void), onLongPress?: (() => void) };

