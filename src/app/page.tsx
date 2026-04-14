'use client';

import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import InvoiceForm from "@/components/InvoiceForm";
import InvoicePreview from "@/components/InvoicePreview";

export default function Home() {
  const [invoiceData, setInvoiceData] = useState({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="p-8">
      <div id="printable-wrapper" className="grid grid-cols-2 gap-8 items-start">
        <div className="col-span-1 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">输入区域</h2>
          <InvoiceForm setInvoiceData={setInvoiceData} setFocusedField={setFocusedField} />
        </div>
        <div className="col-span-1 sticky top-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">预览区域</h2>
              <button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                导出 PDF
              </button>
            </div>
            <div ref={previewRef} id="printable">
              <InvoicePreview invoiceData={invoiceData} focusedField={focusedField} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
