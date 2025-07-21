export type TCountry = {id: string, name: string, capital: string, language: string, currency: string, description: string, url: string};
export type TPlace = {id:string, name:string, description: string, longitude:string, latitude:string, country: TCountry, url:string[]};
export type TPlaceItemProps = {name: string, country: string | string[], description?: string, url: string[], onPress?: (() => void) };
export type TCountryItemProps = {name: string, capital?: string, language?: string, currency?: string, description?: string, url: string, onPress?: (() => void) };
//export type TSearchInput = {value:string, onChange: (() => void)}