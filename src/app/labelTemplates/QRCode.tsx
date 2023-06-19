import QRCode from 'qrcode.react';

export function CreateQRCode(value:string|any = "j&k") {
    return <QRCode id="qrCode2" fgColor="#000000" style={{ width: "100%", height: "100%" }} value={value} />
};

