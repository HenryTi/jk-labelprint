import { appEnv } from "./appEnv";

interface Language {
    id: number;
    no: "zh-CN";
    description: "华 -中国";
};

interface SaleRegion {
    id: number;
    name: string;
    currency: 5;
    no: "CN";
};

interface Global {
    CHINA: number;
    CHINESE: Language;
    SALESREGION_CN: SaleRegion;
    ANDROIDAPPADDRESS: string;
    PIRVACYURL: string;
    CONTENTSITE: string;
};

// 生产配置
const GLOABLE_PRODUCTION: Global = {
    CHINA: 44,
    CHINESE: { "id": 196, "no": "zh-CN", "description": "华 -中国" },
    SALESREGION_CN: { "id": 1, "name": "中国大陆", "currency": 5, "no": "CN" },
    ANDROIDAPPADDRESS: "https://shop.jkchemical.com/download/jk-shop.apk",
    PIRVACYURL: "https://shop.jkchemical.com/privacy/shop.txt",
    CONTENTSITE: "https://web.jkchemical.com",
}

// 测试环境配置
const GLOABLE_TEST: Global = {
    CHINA: 43,
    CHINESE: { "id": 197, "no": "zh-CN", "description": "华 -中国" },
    SALESREGION_CN: { "id": 4, "name": "中国大陆", "currency": 5, "no": "CN" },
    ANDROIDAPPADDRESS: "https://shop.jkchemical.com/download/jk-shop.apk",
    PIRVACYURL: "https://test.jkchemical.com/privacy/shop.txt",
    CONTENTSITE: "https://test.jkchemical.com",
}

export const GLOABLE = appEnv.testing === true ? GLOABLE_TEST : GLOABLE_PRODUCTION;