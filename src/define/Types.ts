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
const url = 'https://portfoliodata.vanillafox.site:4100/';
const iconUrl = url + 'img/icon/';
export const links = {
    // Websites
    'twitter': 'https://x.com/VanillaFox2035',
    'pixiv': 'https://www.pixiv.net/users/15478244',
    'facebook': 'https://www.facebook.com/Kitsune2035',
    'patreon': 'https://www.patreon.com/vanillafox2035',
    'fanbox': 'https://vanillafox2035.fanbox.cc/',
    'ko-fi': 'https://ko-fi.com/vanillafox2035',
    'vgen': 'https://vgen.co/VanillaFox2035/',
    'booth': 'https://vanillafox2035.booth.pm/',
    'google-forms': 'https://docs.google.com/forms/d/e/1FAIpQLSdYljZXsyVolmA5BZ1qwTm0yGPyJ1SDSv6wa2xB-6gzzQA69w/viewform?usp=sharing&ouid=115214375722577269856',
    'email': 'vanillafox2035@gmail.com',
    // images
    'profile-image': iconUrl + 'profile-image.png',
    'logo-image': iconUrl + 'logo.png',
    'showcase-image': url + 'img/banner/2025_0617_irys_92.jpg',
    'hamburger-image': iconUrl + 'hamburger.svg',
    'twitter-image': iconUrl + 'icon-x.png',
    'pixiv-image': iconUrl + 'icon-pixiv.png',
    'facebook-image': iconUrl + 'icon-facebook.png',
    'patreon-image': iconUrl + 'icon-patreon.png',
    'fanbox-image': iconUrl + 'icon-fanbox.png',
    'ko-fi-image': iconUrl + 'icon-ko-fi.png',
    'vgen-image': iconUrl + 'icon-vgen.png',
    'booth-image': iconUrl + 'icon-booth.png',
    'google-forms-image': iconUrl + 'icon-google-form.png',
    'email-image': iconUrl + 'icon-mail.png',
    'close-button-image': iconUrl + 'icon-x.svg',
    'green-checkmark-image': iconUrl + 'circle-check.svg',
    'gray-x-image': iconUrl + 'circle-x.svg',
    'red-x-image': iconUrl + 'circle-x-red.svg',
    // jsons
    'commission-url': url + 'commission',
    'gallery-url': url + 'gallery',
    // strings
    'ga-id': 'G-G3H89X28MH',
}

// Old links using Dropbox
/*
export const links = {
    // Websites
    'twitter': 'https://x.com/VanillaFox2035',
    'pixiv': 'https://www.pixiv.net/users/15478244',
    'facebook': 'https://www.facebook.com/Kitsune2035',
    'patreon': 'https://www.patreon.com/vanillafox2035',
    'fanbox': 'https://vanillafox2035.fanbox.cc/',
    'ko-fi': 'https://ko-fi.com/vanillafox2035',
    'vgen': 'https://vgen.co/VanillaFox2035/',
    'booth': 'https://vanillafox2035.booth.pm/',
    'google-forms': 'https://docs.google.com/forms/d/e/1FAIpQLSdYljZXsyVolmA5BZ1qwTm0yGPyJ1SDSv6wa2xB-6gzzQA69w/viewform?usp=sharing&ouid=115214375722577269856',
    'email': 'vanillafox2035@gmail.com',
    // images
    'profile-image': 'https://dl.dropboxusercontent.com/scl/fi/obeyvs4hhouit5z0jziig/profile-image.png?rlkey=cat59xwyxauakfucprcgu5pic&st=fb16jn2s&dl=0',
    'logo-image': 'https://dl.dropboxusercontent.com/scl/fi/j8fu7ts3kcnomdk2ery83/logo.png?rlkey=i0s0i0ci7o5wavk2gkcrp8qgj&st=67e5a5r7&dl=0',
    'showcase-image': 'https://dl.dropboxusercontent.com/scl/fi/5h7fra14p67n0b93we5lu/2025_0617_irys_92.jpg?rlkey=2qgo24hkri5aqz7wyktlbh4hb&st=xbd9r1lc&dl=0',
    'hamburger-image': 'https://dl.dropboxusercontent.com/scl/fi/kcp934aysto334beabgla/hamburger.svg?rlkey=f8bn3kvnzozyn3zvqwad258u9&st=4oywmwxv&dl=0',
    'twitter-image': 'https://dl.dropboxusercontent.com/scl/fi/cqww62nnb3c7gclsfu6gn/icon-x.png?rlkey=n5j7r96oht59u7947fi8k5av3&st=ljnxobff&dl=0',
    'pixiv-image': 'https://dl.dropboxusercontent.com/scl/fi/9xbrrf6dz0zzkd5vycy8n/icon-pixiv.png?rlkey=qx6swmh4icn5ab8a4470zp1zx&st=ae096wqr&dl=0',
    'facebook-image': 'https://dl.dropboxusercontent.com/scl/fi/w5dzrl2l9cq1pupotnolg/icon-facebook.png?rlkey=zubddlcd2q7k34uoo7sy440ab&st=goh460re&dl=0',
    'patreon-image': 'https://dl.dropboxusercontent.com/scl/fi/88aamdlorw7y73uveege8/icon-patreon.png?rlkey=9eyr5e830967nlqz5kuccus0q&st=zeb4tfhy&dl=0',
    'fanbox-image': 'https://dl.dropboxusercontent.com/scl/fi/1t6ih9z72tbn9hxnvw9vg/icon-fanbox.png?rlkey=gcxb5j0y7qah1oukga9aae27k&st=phhwa01a&dl=0',
    'ko-fi-image': 'https://dl.dropboxusercontent.com/scl/fi/g9o5uy8v0jgo59lmw9zp4/icon-ko-fi.png?rlkey=2aje7akf1hatjqxjxha6scr29&st=vqzx9bq4&dl=0',
    'vgen-image': 'https://dl.dropboxusercontent.com/scl/fi/tdck4dtr1qps1pglmc7dd/icon-vgen.png?rlkey=e0bnpic2w2f1pb90mrsmluqgh&st=f3w0ymgx&dl=0',
    'booth-image': 'https://dl.dropboxusercontent.com/scl/fi/gxbe8qhicm36ljaezlnbn/icon-booth.png?rlkey=poeiq5y6ac9oqiifrry6z1ow5&st=8wnfd6tn&dl=0',
    'google-forms-image': 'https://dl.dropboxusercontent.com/scl/fi/o4hf9n8mmdu4usriqta9e/icon-google-form.png?rlkey=1evu83k17dkhuq6oe34a6qmk2&st=ewm7rcec&dl=0',
    'email-image': 'https://dl.dropboxusercontent.com/scl/fi/a77ntwt4fiq4k0wpkuqnf/icon-mail.png?rlkey=hm9r5uun93aybn6630dszw2vm&st=q2oa8knl&dl=0',
    'close-button-image': 'https://dl.dropboxusercontent.com/scl/fi/r059t98a7l4mibeicw6yf/button-x.svg?rlkey=6ybclvvtpagsfgivcwmty82l1&st=vijznqt7&dl=0',
    'green-checkmark-image': 'https://dl.dropboxusercontent.com/scl/fi/4jm2g12r10i1szg0xpnkm/circle-check.svg?rlkey=5p98pj08p24lu27gwlcqf0sa9&st=pqz77wdo&dl=0',
    'gray-x-image': 'https://dl.dropboxusercontent.com/scl/fi/cpefen5w8ybzuj1sj4vbj/circle-x.svg?rlkey=yivmy5qg00n1fpo8qg3e3zpls&st=y2mgcrne&dl=0',
    'red-x-image': 'https://dl.dropboxusercontent.com/scl/fi/hx98phv2lzsd2hva4vjp2/circle-x-red.svg?rlkey=9ixw8pr05nf4iym20h7ise4ry&st=g9bmjnqq&dl=0',
    // jsons
    'commission-url': 'https://dl.dropboxusercontent.com/scl/fi/z3vpyfcqwyfg5kuwdi2fw/Commission.json?rlkey=9czot91664v5qt74z5n3jodwf&st=zqn4mlue&dl=0',
    'gallery-url': 'https://dl.dropboxusercontent.com/scl/fi/jl1ofvcaorabw4urp0dqo/Portfolio.json?rlkey=3rhge7smdjurfoqjc4duyoqoo&st=aja2d9ve&dl=0',
    // strings
    'ga-id': 'G-G3H89X28MH',
}
*/