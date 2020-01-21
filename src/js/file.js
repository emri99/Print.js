import { createBlobAndPrint, getAbsoluteUrl, printFile } from './functions'

export default {
  print: (params, printFrame, defaultMime) => {
    const mime = params.mime || defaultMime

    // Check if we have base64 data
    if (params.base64) {
      const bytesArray = Uint8Array.from(atob(params.printable), c => c.charCodeAt(0))
      createBlobAndPrint(params, printFrame, bytesArray, mime)
      return
    }

    // Format pdf url
    printFile(getAbsoluteUrl(params.printable), mime, params, printFrame)
  }
}
