function generateQr() {
    let canvas = document.getElementById("canvas");
    let url = document.getElementById("qrInput");
    QRCode.toCanvas(canvas, url.value, (err) => {
        if(err) console.error(err);
        console.log('scan berhasil');
    })
}