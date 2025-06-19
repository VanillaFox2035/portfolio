export function translateToString(query: any, dictionary: Object): string {
  for (const key in dictionary) {
    if (dictionary[key] === query) {
      return key;
    }
  }
  return '';
}

export function fetchJson(url: string): Promise<object> {
    return new Promise<object>((resolve, reject) => {
        // Fetc from url
        fetch(url)
        .then((response) => {
            // Read json
            response.json()
            .then((json) => {
                resolve(json);
            })
            .catch((e) => {
                reject(e);
            });
        })
        .catch((e) => {
            reject(e);
        })
    });
}