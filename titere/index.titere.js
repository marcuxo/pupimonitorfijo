const puppeteer = require('puppeteer')

console.log('welcome to titere');

(async () => {
    /** lanza el navegador y abre una pagina en una nueva ventana */
    const browser = await puppeteer.launch()
    const page = await browser.newPage();

    /**  */
    await page.goto("https://google.com");

    await page.setViewport({width: 1080, height: 1024});
    // await browser.close();
})()
