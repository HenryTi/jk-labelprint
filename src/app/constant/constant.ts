type EJK = {
    name: string;
    width: string;
    height: string;
    icon: number;
};

type ObjEJK = {
    [key: string]: EJK;
};

type IconMap = {
    name: string;
    src: string;
};

type IdMap = {
    [key: number]: string
}



/* 英文标签模板信息 */
export const EJK: ObjEJK = {
    EJK10: { name: "ejk10", width: "175mm", height: "100mm", icon: 0 },
    EJK11: { name: "ejk11", width: "175mm", height: "100mm", icon: 1 },
    EJK12: { name: "ejk12", width: "200mm", height: "100mm", icon: 2 },
    EJK13: { name: "ejk13", width: "200mm", height: "100mm", icon: 3 },
    EJK14: { name: "ejk14", width: "200mm", height: "100mm", icon: 4 },
    EJK15: { name: "ejk15", width: "200mm", height: "100mm", icon: 5 },
    EJK30: { name: "ejk30", width: "160mm", height: "65mm", icon: 0 },
    EJK31: { name: "ejk31", width: "160mm", height: "65mm", icon: 1 },
    EJK32: { name: "ejk32", width: "197mm", height: "65mm", icon: 2 },
    EJK33: { name: "ejk33", width: "197mm", height: "65mm", icon: 3 },
    EJK34: { name: "ejk34", width: "197mm", height: "65mm", icon: 4 },
    EJK35: { name: "ejk35", width: "197mm", height: "65mm", icon: 5 },
    EJK40: { name: "ejk40", width: "118mm", height: "53mm", icon: 0 },
    EJK41: { name: "ejk41", width: "118mm", height: "53mm", icon: 1 },
    EJK42: { name: "ejk42", width: "118mm", height: "53mm", icon: 2 },
    EJK43: { name: "ejk43", width: "118mm", height: "53mm", icon: 3 },
    EJK44: { name: "ejk44", width: "118mm", height: "53mm", icon: 4 },
    EJK45: { name: "ejk45", width: "118mm", height: "53mm", icon: 5 },
    EJK60: { name: "ejk60", width: "95mm", height: "33mm", icon: 0 },
    EJK61: { name: "ejk61", width: "95mm", height: "33mm", icon: 1 },
    EJK62: { name: "ejk62", width: "140mm", height: "33mm", icon: 2 },
    EJK63: { name: "ejk63", width: "140mm", height: "33mm", icon: 3 },
    EJK64: { name: "ejk64", width: "140mm", height: "33mm", icon: 4 },
    EJK65: { name: "ejk65", width: "140mm", height: "33mm", icon: 5 },
    EJK70: { name: "ejk70", width: "68mm", height: "27mm", icon: 0 },
    EJK71: { name: "ejk71", width: "68mm", height: "27mm", icon: 1 },
    EJK72: { name: "ejk72", width: "68mm", height: "27mm", icon: 2 },
    EJK73: { name: "ejk73", width: "68mm", height: "27mm", icon: 3 },
    EJK74: { name: "ejk74", width: "68mm", height: "27mm", icon: 4 },
    EJK75: { name: "ejk75", width: "68mm", height: "27mm", icon: 5 },
};

/* 危标代码与图对应关系 */
export const ICON_MAP: IconMap[] = [
    { name: "LK", src: "GHS02.gif" },
    { name: "LM", src: "GSH04.gif" },
    { name: "LN", src: "GHS07.gif" },
    { name: "LO", src: "GHS03.gif" },
    { name: "LP", src: "GHS05.gif" },
    { name: "LQ", src: "GHS09.gif" },
    { name: "LR", src: "GHS01.gif" },
    { name: "LS", src: "GHS06.gif" },
    { name: "LT", src: "GHS08.gif" },
];

/* 小模板 */
export const SMALL_TEMPLATE: string[] = [
    "CJK45",
    "CAM45",
    "CJK55",
    "CAM55",
    "EJK60",
    "EJK61",
    "EJK70",
    "EJK71",
    "EJK72",
    "EJK73",
    "EJK74",
    "EJK75",
];

/*  品牌  */
export const BRAND: IdMap = {
    18: "Amethyst",
    71:  "J&K"
}

/* 语言  */
export const LANGUAGE: IdMap = {
    196: "中文",
    56: "英文"
}