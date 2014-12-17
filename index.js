var httpClient = require('superagent');
var Promise = require('bluebird');

function BitpayInvoiceGenerator(options) {
  if (!this.apiKey) { throw new Error('InvalidBitpayApiKey') }
  this.apiKey = options.apiKey
  this.notificationURL = options.notificationURL
}

BitpayInvoiceGenerator.prototype = {
  getNewInvoice: function(invoiceOptions) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var invoice = {
        price: invoiceOptions.amount,
        currency: 'BTC',
        notificationURL: _this.notificationURL,
        fullNotifications: true,
        posData: JSON.stringify({
          rippleAddress: invoiceOptions.data.rippleAddress
        })
      };
      httpClient
        .post('https://bitpay.com/api/invoice')
        .auth(_this.apiKey, '')
        .send(invoice)
        .end(function(error, invoiceResponse) {
          if (error) {
            reject(error);
          } else {
            resolve(invoiceResponse.body); 
          }
        });
    });
  }
}

module.exports = BitpayInvoiceGenerator;

