import React, { forwardRef } from 'react';
import Image from 'next/image';
import { numberToWords } from '@/utils/numberToWords';

const InvoicePreview = forwardRef(({ invoiceData, focusedField }: { invoiceData: any, focusedField: string | null }, ref: React.Ref<HTMLDivElement>) => {
  const { 
    customerName, customerPhone, customerAddress, customerEmail, 
    contractNo, issueDate,
    itemType, itemCapacity, itemSpeed, itemFS, itemQuantity, itemUnitPrice,
    targetCurrency, exchangeRate,
    descriptionOfGoods, deliveryTerms, leadTime, paymentTerms,
    portOfShipment, destination, countryOfOrigin,
    beneficiaryBank, accountNo, bankAddress, beneficiary, beneficiaryAddress
  } = invoiceData;

  const total = (itemQuantity || 0) * (itemUnitPrice || 0);
  const targetTotal = total * (exchangeRate || 0);
  const totalInWords = numberToWords(total);

  const highlightClass = "bg-yellow-200 transition-colors duration-300";

  const DetailRow = ({ label, value, fieldId }: { label: string, value: any, fieldId: string }) => (
    <div className={`flex ${focusedField === fieldId ? highlightClass : ''}`}>
      <p className="font-bold w-48 flex-shrink-0">{label}</p>
      <p>{value}</p>
    </div>
  );

  return (
    <div className="bg-white text-black text-sm" ref={ref}>
      {/* Header Banner */}
      <div className="mb-2">
        <Image src="/logo-xinfuji.png" alt="Xinfuji Banner" width={1200} height={150} className="w-full h-auto" priority />
      </div>

      {/* Company Info & Title */}
      <div className="text-center my-4">
        <h1 className="text-xl font-bold text-gray-800">Suzhou Xinfuji Electromechanical Co., Ltd.</h1>
        <p className="text-xs text-gray-600">Dade Industrial Zone, Taoyuan Town, Wujiang District, Suzhou City, Jiangsu Province, China.</p>
        <p className="text-xs text-gray-500 mt-1">
          <span>Tel: +86 18018599919</span> |
          <span className="mx-2">Website: www.xinfuji.com</span> |
          <span>E-mail: info@xinfuji.com</span>
        </p>
        <h2 className="text-lg font-bold mt-4 underline decoration-double">PROFOMA INVOICE</h2>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <p className={focusedField === 'customerName' ? highlightClass : ''}><strong>Messrs.:</strong> {customerName}</p>
          <p className={focusedField === 'customerPhone' ? highlightClass : ''}><strong>Tel:</strong> {customerPhone}</p>
          <p className={focusedField === 'customerAddress' ? highlightClass : ''}><strong>Address:</strong> {customerAddress}</p>
          <p className={focusedField === 'customerEmail' ? highlightClass : ''}><strong>Email:</strong> {customerEmail}</p>
        </div>
        <div className="text-left">
          <p className={focusedField === 'contractNo' ? highlightClass : ''}><strong>Contract No.:</strong> {contractNo}</p>
          <p className={focusedField === 'issueDate' ? highlightClass : ''}><strong>Issue Date:</strong> {issueDate}</p>
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full border-collapse border border-black text-center text-xs">
        <thead>
          <tr className="bg-gray-200">
            <th rowSpan={2} className="p-1 border border-black align-middle">No.</th>
            <th colSpan={4} className="p-1 border border-black">Commodity Description</th>
            <th colSpan={2} className="p-1 border border-black">Quantity</th>
            <th colSpan={2} className="p-1 border border-black">Price (USD)</th>
          </tr>
          <tr className="bg-gray-200">
            <th className="p-1 border border-black font-semibold">Type</th>
            <th className="p-1 border border-black font-semibold">Capacity</th>
            <th className="p-1 border border-black font-semibold">Speed</th>
            <th className="p-1 border border-black font-semibold">F/S</th>
            <th className="p-1 border border-black font-semibold">Quantity</th>
            <th className="p-1 border border-black font-semibold">Unit</th>
            <th className="p-1 border border-black font-semibold">Unit Price</th>
            <th className="p-1 border border-black font-semibold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-1 border border-black">1</td>
            <td className={`p-1 border border-black ${focusedField === 'itemType' ? highlightClass : ''}`}>{itemType}</td>
            <td className={`p-1 border border-black ${focusedField === 'itemCapacity' ? highlightClass : ''}`}>{itemCapacity}</td>
            <td className={`p-1 border border-black ${focusedField === 'itemSpeed' ? highlightClass : ''}`}>{itemSpeed}</td>
            <td className={`p-1 border border-black ${focusedField === 'itemFS' ? highlightClass : ''}`}>{itemFS}</td>
            <td className={`p-1 border border-black ${focusedField === 'itemQuantity' ? highlightClass : ''}`}>{itemQuantity}</td>
            <td className="p-1 border border-black">UNIT</td>
            <td className={`p-1 border border-black text-right ${focusedField === 'itemUnitPrice' ? highlightClass : ''}`}>{itemUnitPrice}</td>
            <td className="p-1 border border-black text-right">{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {/* Total Section */}
      <div className="flex justify-between items-start p-1 border border-black border-t-0">
        <div className="p-1">
          <p><strong>Total:</strong></p>
          <p className="uppercase text-xs">US DOLLARS {totalInWords}</p>
        </div>
        <div className="text-right p-1">
          <p className="font-bold">$ {total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className={`font-bold ${focusedField === 'exchangeRate' ? highlightClass : ''}`}>
            {targetCurrency && `${targetCurrency} ${targetTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          </p>
        </div>
      </div>

      {/* Details & Bank Info */}
      <div className="space-y-1 text-xs mt-2">
        <DetailRow label="Description Of Goods:" value={descriptionOfGoods} fieldId="descriptionOfGoods" />
        <DetailRow label="Delivery Terms:" value={deliveryTerms} fieldId="deliveryTerms" />
        <DetailRow label="Lead Time:" value={leadTime} fieldId="leadTime" />
        <DetailRow label="Payment Terms:" value={paymentTerms} fieldId="paymentTerms" />
        <DetailRow label="Port of Shipment:" value={portOfShipment} fieldId="portOfShipment" />
        <DetailRow label="Destination:" value={destination} fieldId="destination" />
        <DetailRow label="Country of Origin:" value={countryOfOrigin} fieldId="countryOfOrigin" />
        
        <p className="font-bold pt-2 mt-2 border-t border-gray-300">Bank Information:</p>
        <DetailRow label="Beneficiary Bank:" value={beneficiaryBank} fieldId="beneficiaryBank" />
        <DetailRow label="A/C No:" value={accountNo} fieldId="accountNo" />
        <DetailRow label="Bank Address:" value={bankAddress} fieldId="bankAddress" />
        <DetailRow label="Beneficiary:" value={beneficiary} fieldId="beneficiary" />
        <DetailRow label="Add of Beneficiary:" value={beneficiaryAddress} fieldId="beneficiaryAddress" />
      </div>

      {/* Signature Section */}
      <div className="flex justify-between mt-4 text-sm">
        <div className="w-1/2">
          <p className="font-bold">Buyer (stamp&sign)</p>
          <div className="border-t-2 border-black mt-4 w-3/4"></div>
        </div>
        <div className="w-1/2 text-right">
          <p className="font-bold">Seller (stamp&sign)</p>
          <div className="border-t-2 border-black mt-4 w-3/4 ml-auto"></div>
        </div>
      </div>
    </div>
  );
});

InvoicePreview.displayName = 'InvoicePreview';

export default InvoicePreview;
