export enum Tabs { Home, Portfolio, Commission, Prices, Contact };
export enum Languages { En, Cht };

// Dictionaries
export const langDictionary = {
    'en': Languages.En,
    'cht': Languages.Cht,
};
export const tabDictionary = {
    'home': Tabs.Home,
    'portfolio': Tabs.Portfolio,
    'commission': Tabs.Commission,
    'prices':Tabs.Prices,
    'contact': Tabs.Contact
};
export function translateToString(query: any, dictionary: Object): string {
  for (const key in dictionary) {
    if (dictionary[key] === query) {
      return key;
    }
  }
  return '';
}