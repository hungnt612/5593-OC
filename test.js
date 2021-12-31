

// constant variable
const default_link_icon1="https://s3.kstorage.vn/digitalcard/icon/icon1/"
const default_link_icon2="https://s3.kstorage.vn/digitalcard/icon/icon2/"
const default_link_icon3="https://s3.kstorage.vn/digitalcard/icon/icon3/"
const default_link_icon4="https://s3.kstorage.vn/digitalcard/icon/icon4/"
const default_link_icon5="https://s3.kstorage.vn/digitalcard/icon/icon5/"
// console.log(default_link_icon5 + "phone.png")

// icon 1
const iconMot = [
    {
        id: 1,
        name: "iconmot",
        description: "hihi",
        roles: ['admin', 'premium', 'user'],
        item: [
            {
                "type": "phone",
                "label": "Điện thoại",
                "input": "text",
                "icon": default_link_icon1 + "phone.png",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "tel://",
                "value": "",
                "visible": true
            },
            {
                "type": "email",
                "label": "Email",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Email của bạn",
                "baseUrl": "mailto:",
                "value": "",
                "visible": true
            },
            {
                "type": "zalo",
                "label": "Zalo",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "https://zalo.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "facebook",
                "label": "Facebook",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Link Facebook của bạn",
                "baseUrl": "https://fb.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "instagram",
                "label": "Instagram",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Link Instagram của bạn",
                "baseUrl": "https://instagram.com/",
                "visible": true
            },
            {
                "type": "telegram",
                "label": "Telegram",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên tài khoản của bạn",
                "baseUrl": "https://t.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "twitter",
                "label": "Twitter",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập Twitter của bạn",
                "baseUrl": "https://twitter.com/",
                "visible": true
            },
            {
                "type": "Snapchat",
                "label": "Snapchat",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập Snapchat của bạn",
                "baseUrl": "https://www.snapchat.com/add/",
                "visible": true
            },
            {
                "type": "Behance",
                "label": "Behance",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập Behance của bạn",
                "baseUrl": "https://www.behance.net/",
                "visible": true
            },
            {
                "type": "Pinterest",
                "label": "Pinterest",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập Pinterest của bạn",
                "baseUrl": "https://www.pinterest.com/",
                "visible": true
            },
            {
                "type": "Linkedin",
                "label": "Linkedin",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Link Linkedin của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Youtube",
                "label": "Youtube",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Link kênh Youtube của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "tiktok",
                "label": "TikTok",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập TikTok của bạn",
                "baseUrl": "https://www.tiktok.com/@",
                "visible": true
            },
            {
                "type": "Dribble",
                "label": "Dribble",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập Dribble của bạn",
                "baseUrl": "https://dribbble.com/",
                "visible": true
            },
            {
                "type": "Sound Cloud",
                "label": "Sound Cloud",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Link Sound Cloud của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Flickr",
                "label": "Flickr",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Link Flickr của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Line",
                "label": "Line",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "ID Line của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Kakao Talk",
                "label": "Kakao Talk",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "ID Kakao Talk của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Whatsapp",
                "label": "Whatsapp",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Số điện thoại Whatsapp của bạn",
                "baseUrl": "https://wa.me/",
                "visible": true
            },
            {
                "type": "shopee",
                "label": "Shopee",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên đăng nhập Shopee của bạn",
                "baseUrl": "https://shopee.vn/",
                "visible": true
            },
            {
                "type": "lazada",
                "label": "Lazada",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên shop Lazada của bạn",
                "baseUrl": "https://www.lazada.vn/shop/",
                "visible": true
            },
            {
                "type": "tiki",
                "label": "Tiki",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Tên shop Tiki của bạn",
                "baseUrl": "https://tiki.vn/cua-hang/",
                "visible": true
            },
            {
                "type": "momo",
                "label": "Momo",
                "input": "text",
                "icon": default_link_icon1 + "",
                "placeholder": "Số điện thoại đăng ký Momo của bạn",
                "baseUrl": "https://nhantien.momo.vn/",
                "visible": true
            },
            {
                "type": "tpBank",
                "label": "TP Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "TechcomBank",
                "label": "TechcomBank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietcombank",
                "label": "Vietcombank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VP Bank",
                "label": "VP Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "BIDV Bank",
                "label": "BIDV Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "MB Bank",
                "label": "MB Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "ACB Bank",
                "label": "ACB Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Agribank",
                "label": "Agribank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Eximbank",
                "label": "Eximbank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Sacombank",
                "label": "Sacombank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SCB Bank",
                "label": "SCB Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SEA Bank",
                "label": "SEA Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SHB Bank",
                "label": "SHB Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VIB Bank",
                "label": "VIB Bank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietinbank",
                "label": "Vietinbank",
                "input": "textArea",
                "icon": default_link_icon1 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            }
        ],
    }
]

// icon 2
const iconHai = [
    {
        id: 1,
        name: "iconhai",
        description: "hihi",
        roles: ['admin', 'premium', 'user'],
        item: [
            {
                "type": "phone",
                "label": "Điện thoại",
                "input": "text",
                "icon": default_link_icon2 + "phone.png",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "tel://",
                "value": "",
                "visible": true
            },
            {
                "type": "email",
                "label": "Email",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Email của bạn",
                "baseUrl": "mailto:",
                "value": "",
                "visible": true
            },
            {
                "type": "zalo",
                "label": "Zalo",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "https://zalo.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "facebook",
                "label": "Facebook",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Link Facebook của bạn",
                "baseUrl": "https://fb.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "instagram",
                "label": "Instagram",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Link Instagram của bạn",
                "baseUrl": "https://instagram.com/",
                "visible": true
            },
            {
                "type": "telegram",
                "label": "Telegram",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên tài khoản của bạn",
                "baseUrl": "https://t.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "twitter",
                "label": "Twitter",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập Twitter của bạn",
                "baseUrl": "https://twitter.com/",
                "visible": true
            },
            {
                "type": "Snapchat",
                "label": "Snapchat",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập Snapchat của bạn",
                "baseUrl": "https://www.snapchat.com/add/",
                "visible": true
            },
            {
                "type": "Behance",
                "label": "Behance",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập Behance của bạn",
                "baseUrl": "https://www.behance.net/",
                "visible": true
            },
            {
                "type": "Pinterest",
                "label": "Pinterest",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập Pinterest của bạn",
                "baseUrl": "https://www.pinterest.com/",
                "visible": true
            },
            {
                "type": "Linkedin",
                "label": "Linkedin",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Link Linkedin của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Youtube",
                "label": "Youtube",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Link kênh Youtube của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "tiktok",
                "label": "TikTok",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập TikTok của bạn",
                "baseUrl": "https://www.tiktok.com/@",
                "visible": true
            },
            {
                "type": "Dribble",
                "label": "Dribble",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập Dribble của bạn",
                "baseUrl": "https://dribbble.com/",
                "visible": true
            },
            {
                "type": "Sound Cloud",
                "label": "Sound Cloud",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Link Sound Cloud của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Flickr",
                "label": "Flickr",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Link Flickr của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Line",
                "label": "Line",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "ID Line của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Kakao Talk",
                "label": "Kakao Talk",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "ID Kakao Talk của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Whatsapp",
                "label": "Whatsapp",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Số điện thoại Whatsapp của bạn",
                "baseUrl": "https://wa.me/",
                "visible": true
            },
            {
                "type": "shopee",
                "label": "Shopee",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên đăng nhập Shopee của bạn",
                "baseUrl": "https://shopee.vn/",
                "visible": true
            },
            {
                "type": "lazada",
                "label": "Lazada",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên shop Lazada của bạn",
                "baseUrl": "https://www.lazada.vn/shop/",
                "visible": true
            },
            {
                "type": "tiki",
                "label": "Tiki",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Tên shop Tiki của bạn",
                "baseUrl": "https://tiki.vn/cua-hang/",
                "visible": true
            },
            {
                "type": "momo",
                "label": "Momo",
                "input": "text",
                "icon": default_link_icon2 + "",
                "placeholder": "Số điện thoại đăng ký Momo của bạn",
                "baseUrl": "https://nhantien.momo.vn/",
                "visible": true
            },
            {
                "type": "tpBank",
                "label": "TP Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "TechcomBank",
                "label": "TechcomBank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietcombank",
                "label": "Vietcombank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VP Bank",
                "label": "VP Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "BIDV Bank",
                "label": "BIDV Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "MB Bank",
                "label": "MB Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "ACB Bank",
                "label": "ACB Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Agribank",
                "label": "Agribank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Eximbank",
                "label": "Eximbank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Sacombank",
                "label": "Sacombank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SCB Bank",
                "label": "SCB Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SEA Bank",
                "label": "SEA Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SHB Bank",
                "label": "SHB Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VIB Bank",
                "label": "VIB Bank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietinbank",
                "label": "Vietinbank",
                "input": "textArea",
                "icon": default_link_icon2 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            }
        ],
    }
]

// icon 3
const iconBa = [
    {
        id: 1,
        name: "iconba",
        description: "hihi",
        roles: ['admin', 'premium', 'user'],
        item: [
            {
                "type": "phone",
                "label": "Điện thoại",
                "input": "text",
                "icon": default_link_icon3 + "phone.png",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "tel://",
                "value": "",
                "visible": true
            },
            {
                "type": "email",
                "label": "Email",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Email của bạn",
                "baseUrl": "mailto:",
                "value": "",
                "visible": true
            },
            {
                "type": "zalo",
                "label": "Zalo",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "https://zalo.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "facebook",
                "label": "Facebook",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Link Facebook của bạn",
                "baseUrl": "https://fb.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "instagram",
                "label": "Instagram",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Link Instagram của bạn",
                "baseUrl": "https://instagram.com/",
                "visible": true
            },
            {
                "type": "telegram",
                "label": "Telegram",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên tài khoản của bạn",
                "baseUrl": "https://t.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "twitter",
                "label": "Twitter",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập Twitter của bạn",
                "baseUrl": "https://twitter.com/",
                "visible": true
            },
            {
                "type": "Snapchat",
                "label": "Snapchat",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập Snapchat của bạn",
                "baseUrl": "https://www.snapchat.com/add/",
                "visible": true
            },
            {
                "type": "Behance",
                "label": "Behance",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập Behance của bạn",
                "baseUrl": "https://www.behance.net/",
                "visible": true
            },
            {
                "type": "Pinterest",
                "label": "Pinterest",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập Pinterest của bạn",
                "baseUrl": "https://www.pinterest.com/",
                "visible": true
            },
            {
                "type": "Linkedin",
                "label": "Linkedin",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Link Linkedin của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Youtube",
                "label": "Youtube",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Link kênh Youtube của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "tiktok",
                "label": "TikTok",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập TikTok của bạn",
                "baseUrl": "https://www.tiktok.com/@",
                "visible": true
            },
            {
                "type": "Dribble",
                "label": "Dribble",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập Dribble của bạn",
                "baseUrl": "https://dribbble.com/",
                "visible": true
            },
            {
                "type": "Sound Cloud",
                "label": "Sound Cloud",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Link Sound Cloud của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Flickr",
                "label": "Flickr",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Link Flickr của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Line",
                "label": "Line",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "ID Line của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Kakao Talk",
                "label": "Kakao Talk",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "ID Kakao Talk của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Whatsapp",
                "label": "Whatsapp",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Số điện thoại Whatsapp của bạn",
                "baseUrl": "https://wa.me/",
                "visible": true
            },
            {
                "type": "shopee",
                "label": "Shopee",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên đăng nhập Shopee của bạn",
                "baseUrl": "https://shopee.vn/",
                "visible": true
            },
            {
                "type": "lazada",
                "label": "Lazada",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên shop Lazada của bạn",
                "baseUrl": "https://www.lazada.vn/shop/",
                "visible": true
            },
            {
                "type": "tiki",
                "label": "Tiki",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Tên shop Tiki của bạn",
                "baseUrl": "https://tiki.vn/cua-hang/",
                "visible": true
            },
            {
                "type": "momo",
                "label": "Momo",
                "input": "text",
                "icon": default_link_icon3 + "",
                "placeholder": "Số điện thoại đăng ký Momo của bạn",
                "baseUrl": "https://nhantien.momo.vn/",
                "visible": true
            },
            {
                "type": "tpBank",
                "label": "TP Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "TechcomBank",
                "label": "TechcomBank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietcombank",
                "label": "Vietcombank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VP Bank",
                "label": "VP Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "BIDV Bank",
                "label": "BIDV Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "MB Bank",
                "label": "MB Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "ACB Bank",
                "label": "ACB Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Agribank",
                "label": "Agribank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Eximbank",
                "label": "Eximbank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Sacombank",
                "label": "Sacombank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SCB Bank",
                "label": "SCB Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SEA Bank",
                "label": "SEA Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SHB Bank",
                "label": "SHB Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VIB Bank",
                "label": "VIB Bank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietinbank",
                "label": "Vietinbank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            }
        ],
    }
]

// icon 4
const iconBon = [
    {
        id: 1,
        name: "iconbon",
        description: "hihi",
        roles: ['admin', 'premium', 'user'],
        item: [
            {
                "type": "phone",
                "label": "Điện thoại",
                "input": "text",
                "icon": default_link_icon4 + "phone.png",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "tel://",
                "value": "",
                "visible": true
            },
            {
                "type": "email",
                "label": "Email",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Email của bạn",
                "baseUrl": "mailto:",
                "value": "",
                "visible": true
            },
            {
                "type": "zalo",
                "label": "Zalo",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "https://zalo.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "facebook",
                "label": "Facebook",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Link Facebook của bạn",
                "baseUrl": "https://fb.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "instagram",
                "label": "Instagram",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Link Instagram của bạn",
                "baseUrl": "https://instagram.com/",
                "visible": true
            },
            {
                "type": "telegram",
                "label": "Telegram",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên tài khoản của bạn",
                "baseUrl": "https://t.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "twitter",
                "label": "Twitter",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập Twitter của bạn",
                "baseUrl": "https://twitter.com/",
                "visible": true
            },
            {
                "type": "Snapchat",
                "label": "Snapchat",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập Snapchat của bạn",
                "baseUrl": "https://www.snapchat.com/add/",
                "visible": true
            },
            {
                "type": "Behance",
                "label": "Behance",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập Behance của bạn",
                "baseUrl": "https://www.behance.net/",
                "visible": true
            },
            {
                "type": "Pinterest",
                "label": "Pinterest",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập Pinterest của bạn",
                "baseUrl": "https://www.pinterest.com/",
                "visible": true
            },
            {
                "type": "Linkedin",
                "label": "Linkedin",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Link Linkedin của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Youtube",
                "label": "Youtube",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Link kênh Youtube của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "tiktok",
                "label": "TikTok",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập TikTok của bạn",
                "baseUrl": "https://www.tiktok.com/@",
                "visible": true
            },
            {
                "type": "Dribble",
                "label": "Dribble",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập Dribble của bạn",
                "baseUrl": "https://dribbble.com/",
                "visible": true
            },
            {
                "type": "Sound Cloud",
                "label": "Sound Cloud",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Link Sound Cloud của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Flickr",
                "label": "Flickr",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Link Flickr của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Line",
                "label": "Line",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "ID Line của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Kakao Talk",
                "label": "Kakao Talk",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "ID Kakao Talk của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Whatsapp",
                "label": "Whatsapp",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Số điện thoại Whatsapp của bạn",
                "baseUrl": "https://wa.me/",
                "visible": true
            },
            {
                "type": "shopee",
                "label": "Shopee",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên đăng nhập Shopee của bạn",
                "baseUrl": "https://shopee.vn/",
                "visible": true
            },
            {
                "type": "lazada",
                "label": "Lazada",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên shop Lazada của bạn",
                "baseUrl": "https://www.lazada.vn/shop/",
                "visible": true
            },
            {
                "type": "tiki",
                "label": "Tiki",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Tên shop Tiki của bạn",
                "baseUrl": "https://tiki.vn/cua-hang/",
                "visible": true
            },
            {
                "type": "momo",
                "label": "Momo",
                "input": "text",
                "icon": default_link_icon4 + "",
                "placeholder": "Số điện thoại đăng ký Momo của bạn",
                "baseUrl": "https://nhantien.momo.vn/",
                "visible": true
            },
            {
                "type": "tpBank",
                "label": "TP Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "TechcomBank",
                "label": "TechcomBank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietcombank",
                "label": "Vietcombank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VP Bank",
                "label": "VP Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "BIDV Bank",
                "label": "BIDV Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "MB Bank",
                "label": "MB Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "ACB Bank",
                "label": "ACB Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Agribank",
                "label": "Agribank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Eximbank",
                "label": "Eximbank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Sacombank",
                "label": "Sacombank",
                "input": "textArea",
                "icon": default_link_icon3 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SCB Bank",
                "label": "SCB Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SEA Bank",
                "label": "SEA Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SHB Bank",
                "label": "SHB Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VIB Bank",
                "label": "VIB Bank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietinbank",
                "label": "Vietinbank",
                "input": "textArea",
                "icon": default_link_icon4 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            }
        ],
    }
]

// icon 5
const iconNam = [
    {
        id: 1,
        name: "iconnam",
        description: "hihi",
        roles: ['admin', 'premium', 'user'],
        item: [
            {
                "type": "phone",
                "label": "Điện thoại",
                "input": "text",
                "icon": default_link_icon5 + "phone.png",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "tel://",
                "value": "",
                "visible": true
            },
            {
                "type": "email",
                "label": "Email",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Email của bạn",
                "baseUrl": "mailto:",
                "value": "",
                "visible": true
            },
            {
                "type": "zalo",
                "label": "Zalo",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Số điện thoại của bạn",
                "baseUrl": "https://zalo.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "facebook",
                "label": "Facebook",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Link Facebook của bạn",
                "baseUrl": "https://fb.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "instagram",
                "label": "Instagram",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Link Instagram của bạn",
                "baseUrl": "https://instagram.com/",
                "visible": true
            },
            {
                "type": "telegram",
                "label": "Telegram",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên tài khoản của bạn",
                "baseUrl": "https://t.me/",
                "value": "",
                "visible": true
            },
            {
                "type": "twitter",
                "label": "Twitter",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập Twitter của bạn",
                "baseUrl": "https://twitter.com/",
                "visible": true
            },
            {
                "type": "Snapchat",
                "label": "Snapchat",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập Snapchat của bạn",
                "baseUrl": "https://www.snapchat.com/add/",
                "visible": true
            },
            {
                "type": "Behance",
                "label": "Behance",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập Behance của bạn",
                "baseUrl": "https://www.behance.net/",
                "visible": true
            },
            {
                "type": "Pinterest",
                "label": "Pinterest",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập Pinterest của bạn",
                "baseUrl": "https://www.pinterest.com/",
                "visible": true
            },
            {
                "type": "Linkedin",
                "label": "Linkedin",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Link Linkedin của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Youtube",
                "label": "Youtube",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Link kênh Youtube của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "tiktok",
                "label": "TikTok",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập TikTok của bạn",
                "baseUrl": "https://www.tiktok.com/@",
                "visible": true
            },
            {
                "type": "Dribble",
                "label": "Dribble",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập Dribble của bạn",
                "baseUrl": "https://dribbble.com/",
                "visible": true
            },
            {
                "type": "Sound Cloud",
                "label": "Sound Cloud",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Link Sound Cloud của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Flickr",
                "label": "Flickr",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Link Flickr của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Line",
                "label": "Line",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "ID Line của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Kakao Talk",
                "label": "Kakao Talk",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "ID Kakao Talk của bạn",
                "baseUrl": "",
                "visible": true
            },
            {
                "type": "Whatsapp",
                "label": "Whatsapp",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Số điện thoại Whatsapp của bạn",
                "baseUrl": "https://wa.me/",
                "visible": true
            },
            {
                "type": "shopee",
                "label": "Shopee",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên đăng nhập Shopee của bạn",
                "baseUrl": "https://shopee.vn/",
                "visible": true
            },
            {
                "type": "lazada",
                "label": "Lazada",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên shop Lazada của bạn",
                "baseUrl": "https://www.lazada.vn/shop/",
                "visible": true
            },
            {
                "type": "tiki",
                "label": "Tiki",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Tên shop Tiki của bạn",
                "baseUrl": "https://tiki.vn/cua-hang/",
                "visible": true
            },
            {
                "type": "momo",
                "label": "Momo",
                "input": "text",
                "icon": default_link_icon5 + "",
                "placeholder": "Số điện thoại đăng ký Momo của bạn",
                "baseUrl": "https://nhantien.momo.vn/",
                "visible": true
            },
            {
                "type": "tpBank",
                "label": "TP Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "TechcomBank",
                "label": "TechcomBank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietcombank",
                "label": "Vietcombank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VP Bank",
                "label": "VP Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "BIDV Bank",
                "label": "BIDV Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "MB Bank",
                "label": "MB Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "ACB Bank",
                "label": "ACB Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Agribank",
                "label": "Agribank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Eximbank",
                "label": "Eximbank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Sacombank",
                "label": "Sacombank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SCB Bank",
                "label": "SCB Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SEA Bank",
                "label": "SEA Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "SHB Bank",
                "label": "SHB Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "VIB Bank",
                "label": "VIB Bank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            },
            {
                "type": "Vietinbank",
                "label": "Vietinbank",
                "input": "textArea",
                "icon": default_link_icon5 + "",
                "placeholder": "Số tài khoản: \nChi nhánh: ",
                "visible": true
            }
        ],
    }
]
