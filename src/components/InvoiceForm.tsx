'use client';

import React from 'react';

const InvoiceForm = ({ setInvoiceData, setFocusedField }: { 
  setInvoiceData: React.Dispatch<React.SetStateAction<any>>,
  setFocusedField: React.Dispatch<React.SetStateAction<string | null>>
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInvoiceData((prevData: any) => ({ ...prevData, [id]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    setFocusedField(e.target.id);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3";

  return (
    <div 
      className="space-y-4" 
      onChange={handleChange} 
      onFocus={handleFocus} 
      onBlur={handleBlur}
    >
      <h3 className="text-lg font-semibold">客户信息 / Customer Info</h3>
      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">客户名称 / Messrs.</label>
        <input type="text" id="customerName" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">电话 / Tel</label>
        <input type="text" id="customerPhone" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="customerAddress" className="block text-sm font-medium text-gray-700">地址 / Address</label>
        <input type="text" id="customerAddress" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">邮箱 / Email</label>
        <input type="email" id="customerEmail" className={inputClasses} />
      </div>

      <h3 className="text-lg font-semibold">发票信息 / Invoice Info</h3>
      <div>
        <label htmlFor="contractNo" className="block text-sm font-medium text-gray-700">合同号 / Contract No.</label>
        <input type="text" id="contractNo" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="issueDate" className="block text-sm font-medium text-gray-700">签发日期 / Issue Date</label>
        <input type="date" id="issueDate" className={inputClasses} />
      </div>

      <h3 className="text-lg font-semibold">商品信息 / Commodity Description</h3>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2">
          <label htmlFor="itemType" className="block text-sm font-medium text-gray-700">Type</label>
          <input type="text" id="itemType" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="itemCapacity" className="block text-sm font-medium text-gray-700">Capacity</label>
          <input type="text" id="itemCapacity" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="itemSpeed" className="block text-sm font-medium text-gray-700">Speed</label>
          <input type="text" id="itemSpeed" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="itemFS" className="block text-sm font-medium text-gray-700">F/S</label>
          <input type="text" id="itemFS" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="itemQuantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input type="number" id="itemQuantity" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="itemUnitPrice" className="block text-sm font-medium text-gray-700">Unit Price</label>
          <input type="number" id="itemUnitPrice" className={inputClasses} />
        </div>
      </div>

      <h3 className="text-lg font-semibold">总计 / Total</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <label htmlFor="targetCurrency" className="block text-sm font-medium text-gray-700">目标货币</label>
          <select id="targetCurrency" className={inputClasses} defaultValue="">
            <option value="">NA</option>
            <option>NGN</option>
            <option>CNY</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="exchangeRate" className="block text-sm font-medium text-gray-700">汇率 (1 USD = ?)</label>
          <input type="number" id="exchangeRate" className={inputClasses} placeholder="e.g., 1450.50" />
        </div>
      </div>

      <h3 className="text-lg font-semibold">条款 & 详情 / Terms & Details</h3>
      <div>
        <label htmlFor="descriptionOfGoods" className="block text-sm font-medium text-gray-700">货物描述 / Description Of Goods</label>
        <input type="text" id="descriptionOfGoods" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="deliveryTerms" className="block text-sm font-medium text-gray-700">交货条款 / Delivery Terms</label>
        <input type="text" id="deliveryTerms" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="leadTime" className="block text-sm font-medium text-gray-700">交货时间 / Lead Time</label>
        <input type="text" id="leadTime" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="paymentTerms" className="block text-sm font-medium text-gray-700">付款条件 / Payment Terms</label>
        <textarea id="paymentTerms" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
      <div>
        <label htmlFor="portOfShipment" className="block text-sm font-medium text-gray-700">装运港 / Port of Shipment</label>
        <input type="text" id="portOfShipment" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">目的地 / Destination</label>
        <input type="text" id="destination" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="countryOfOrigin" className="block text-sm font-medium text-gray-700">原产国 / Country of Origin</label>
        <input type="text" id="countryOfOrigin" className={inputClasses} />
      </div>

      <h3 className="text-lg font-semibold">银行 & 受益人 / Bank & Beneficiary</h3>
      <div>
        <label htmlFor="beneficiaryBank" className="block text-sm font-medium text-gray-700">受益人银行 / Beneficiary Bank</label>
        <input type="text" id="beneficiaryBank" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="accountNo" className="block text-sm font-medium text-gray-700">账号 / A/C No</label>
        <input type="text" id="accountNo" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="bankAddress" className="block text-sm font-medium text-gray-700">银行地址 / Bank Address</label>
        <input type="text" id="bankAddress" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="beneficiary" className="block text-sm font-medium text-gray-700">受益人 / Beneficiary</label>
        <input type="text" id="beneficiary" className={inputClasses} />
      </div>
      <div>
        <label htmlFor="beneficiaryAddress" className="block text-sm font-medium text-gray-700">受益人地址 / Add of Beneficiary</label>
        <textarea id="beneficiaryAddress" rows={2} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
    </div>
  );
};

export default InvoiceForm;
