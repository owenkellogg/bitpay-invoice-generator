# Bitpay Invoice Generator

Simple Node.js tool to generate Bitcoin payment invoice pages

## Installation

    npm install --save bitpay-invoice-generator

## Usage

    var InvoiceGenerator = require('bitpay-invoice-generator')
    var invoiceGenerator = new InvoiceGenerator({
      apiKey: 'bitpayApiKey',
      notificationURL: 'https://stevenzeiler.com/callbacks/bitpay'
    })

    invoiceGenerator.getNewInvoice({
      amount: 15,
      data: {
        arbitrary: 'embedded information'
      }
    })
    .then(function(invoice) {
      // invoice payment url and information returned
    })

