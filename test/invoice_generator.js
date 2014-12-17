var assert = require('assert')
var InvoiceGenerator = require(__dirname+'/../')

const BITPAY_API_KEY = process.env['BITPAY_API_KEY']

describe('Invoice Generator', function() {

  before(function() {
    invoiceGenerator = new InvoiceGenerator({
      apiKey: BITPAY_API_KEY,
      notificationURL: 'https://stevenzeiler.com/callbacks/bitpay'
    })
  })

  it('should get a bitpay invoice', function(done) {
    invoiceGenerator.getNewInvoice({
      amount: 15,
      data: {
        arbitrary: 'embedded information'
      }
    })
    .then(function(invoice) {
      console.log('INVOICE', invoice)
      // invoice payment url and information returned
      assert(invoice.id)
      assert(invoice.url)
      done()
    })
    .catch(function(error) {
      console.log('ERROR', error) 
      console.log('please set process env variable BITPAY_API_KEY')
    })
  })
})

