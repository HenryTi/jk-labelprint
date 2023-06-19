import { SizeC15 } from './SizeC15';
import { SizeC25 } from './SizeC25';
import { SizeC35 } from './SizeC35';
import { SizeC45 } from './SizeC45';
import { SizeC55 } from './SizeC55';
import { SizeCX5 } from './SizeCX5';
import { SizeG1_1 } from './SizeG1_1';
import { SizeG1_2 } from './SizeG1_2';
import { SizeG1_EJK10 } from './SizeG1_EJK10';
import { SizeG1_EJK11 } from './SizeG1_EJK11';
import { SizeG1_EJK12 } from './SizeG1_EJK12';
import { SizeG1_EJK13 } from './SizeG1_EJK13';
import { SizeG1_EJK14 } from './SizeG1_EJK14';
import { SizeG1_EJK15 } from './SizeG1_EJK15';
import { SizeG3_1 } from './SizeG3_1';
import { SizeG3_2 } from './SizeG3_2';
import { SizeG3_EJK30 } from './SizeG3_EJK30';
import { SizeG3_EJK31 } from './SizeG3_EJK31';
import { SizeG3_EJK32 } from './SizeG3_EJK32';
import { SizeG3_EJK33 } from './SizeG3_EJK33';
import { SizeG3_EJK34 } from './SizeG3_EJK34';
import { SizeG3_EJK35 } from './SizeG3_EJK35';
import { SizeG4_EJK40 } from './SizeG4_EJK40';
import { SizeG4_EJK41 } from './SizeG4_EJK41';
import { SizeG4_EJK42 } from './SizeG4_EJK42';
import { SizeG4_EJK43 } from './SizeG4_EJK43';
import { SizeG4_EJK44 } from './SizeG4_EJK44';
import { SizeG4_EJK45 } from './SizeG4_EJK45';
import { SizeG6_1 } from './SizeG6_1';
import { SizeG6_2 } from './SizeG6_2';
import { SizeG6_EJK60 } from './SizeG6_EJK60';
import { SizeG6_EJK61 } from './SizeG6_EJK61';
import { SizeG6_EJK62 } from './SizeG6_EJK62';
import { SizeG6_EJK63 } from './SizeG6_EJK63';
import { SizeG6_EJK64 } from './SizeG6_EJK64';
import { SizeG6_EJK65 } from './SizeG6_EJK65';
import { SizeG7 } from './SizeG7';
import { SizeG7_EJK70 } from './SizeG7_EJK70';
import { SizeG7_EJK71 } from './SizeG7_EJK71';
import { SizeG7_EJK72 } from './SizeG7_EJK72';
import { SizeG7_EJK73 } from './SizeG7_EJK73';
import { SizeG7_EJK74 } from './SizeG7_EJK74';
import { SizeG7_EJK75 } from './SizeG7_EJK75';
import { SizeGN_EJKN } from './SizeGN_EJKN';
import { SizeZ1_modeZR } from './SizeZ1_modeZR';
import { SizeZ2_modeZR } from './SizeZ2_modeZR';
import { SizeZ3_modeZR } from './SizeZ3_modeZR';
import { SizeZ4_modeZR } from './SizeZ4_modeZR';
import { SizeZ5_modeZR } from './SizeZ5_modeZR';

export interface ITemplateProps {
    template?: any;
    tmplContent?: any;
}

export * from './A-SizeZ1_modeZR';
export * from './A-SizeZ5_modeZR';
export * from "./SizeZ1_modeZR";
export * from "./SizeZ2_modeZR";
export * from "./SizeZ3_modeZR";
export * from "./SizeZ4_modeZR";
export * from "./SizeZ5_modeZR";
export * from "./SizeC15";
export * from "./SizeC25";
export * from "./SizeC35";
export * from "./SizeC45";
export * from "./SizeC55";
export * from "./SizeCX5";


export const templates: { [key: string]: Function } = {
    "SizeC15": SizeC15,
    "SizeC25": SizeC25,
    "SizeC35": SizeC35,
    "SizeC45": SizeC45,
    "SizeC55": SizeC55,
    "SizeCX5": SizeCX5,
    "SizeG1_1": SizeG1_1,
    "SizeG1_2": SizeG1_2,
    "SizeG1_EJK10": SizeG1_EJK10,
    "SizeG1_EJK11": SizeG1_EJK11,
    "SizeG1_EJK12": SizeG1_EJK12,
    "SizeG1_EJK13": SizeG1_EJK13,
    "SizeG1_EJK14": SizeG1_EJK14,
    "SizeG1_EJK15": SizeG1_EJK15,
    "SizeG3_1": SizeG3_1,
    "SizeG3_2": SizeG3_2,
    "SizeG3_EJK30": SizeG3_EJK30,
    "SizeG3_EJK31": SizeG3_EJK31,
    "SizeG3_EJK32": SizeG3_EJK32,
    "SizeG3_EJK33": SizeG3_EJK33,
    "SizeG3_EJK34": SizeG3_EJK34,
    "SizeG3_EJK35": SizeG3_EJK35,
    "SizeG4_EJK40": SizeG4_EJK40,
    "SizeG4_EJK41": SizeG4_EJK41,
    "SizeG4_EJK42": SizeG4_EJK42,
    "SizeG4_EJK43": SizeG4_EJK43,
    "SizeG4_EJK44": SizeG4_EJK44,
    "SizeG4_EJK45": SizeG4_EJK45,
    "SizeG6_1": SizeG6_1,
    "SizeG6_2": SizeG6_2,
    "SizeG6_EJK60": SizeG6_EJK60,
    "SizeG6_EJK61": SizeG6_EJK61,
    "SizeG6_EJK62": SizeG6_EJK62,
    "SizeG6_EJK63": SizeG6_EJK63,
    "SizeG6_EJK64": SizeG6_EJK64,
    "SizeG6_EJK65": SizeG6_EJK65,
    "SizeG7_EJK70": SizeG7_EJK70,
    "SizeG7_EJK71": SizeG7_EJK71,
    "SizeG7_EJK72": SizeG7_EJK72,
    "SizeG7_EJK73": SizeG7_EJK73,
    "SizeG7_EJK74": SizeG7_EJK74,
    "SizeG7_EJK75": SizeG7_EJK75,
    "SizeG7": SizeG7,
    "SizeGN_EJKN": SizeGN_EJKN,
    "SizeZ1_modeZR": SizeZ1_modeZR,
    "SizeZ2_modeZR": SizeZ2_modeZR,
    "SizeZ3_modeZR": SizeZ3_modeZR,
    "SizeZ4_modeZR": SizeZ4_modeZR,
    "SizeZ5_modeZR": SizeZ5_modeZR,
};
