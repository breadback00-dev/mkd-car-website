'use client';

import { useState } from 'react';

export default function FinanceCalculator({ price }: { price: number }) {
    const minDeposit = Math.round(price * 0.1);
    const maxDeposit = Math.round(price * 0.5);

    const [deposit, setDeposit] = useState(minDeposit);
    const [term, setTerm] = useState(48);

    const APR = 14.9;
    const loan = price - deposit;
    const monthlyRate = APR / 1200;
    const monthly = loan <= 0
        ? 0
        : Math.round((loan * (monthlyRate * Math.pow(1 + monthlyRate, term))) / (Math.pow(1 + monthlyRate, term) - 1));
    const totalPayable = deposit + monthly * term;
    const totalInterest = totalPayable - price;

    const depositPercent = Math.round((deposit / price) * 100);

    return (
        <div className="mb-10">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Finance Calculator
            </h3>

            <div className="bg-[#f7f7f7] border border-gray-200 rounded-2xl p-6">

                {/* Monthly payment display */}
                <div className="bg-[#1e3a8a] text-white rounded-xl p-5 mb-6 text-center">
                    <p className="text-sm font-medium text-blue-200 mb-1">Estimated monthly payment</p>
                    <p className="text-5xl font-extrabold tracking-tight">
                        £{monthly.toLocaleString()}
                        <span className="text-2xl font-bold text-blue-200">/mo</span>
                    </p>
                    <p className="text-blue-200 text-sm mt-2">{term} months · {APR}% APR representative</p>
                </div>

                {/* Deposit slider */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-gray-700">Deposit</label>
                        <span className="text-sm font-bold text-[#1e3a8a]">£{deposit.toLocaleString()} ({depositPercent}%)</span>
                    </div>
                    <input
                        type="range"
                        min={minDeposit}
                        max={maxDeposit}
                        step={50}
                        value={deposit}
                        onChange={(e) => setDeposit(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e3a8a]"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>£{minDeposit.toLocaleString()} (10%)</span>
                        <span>£{maxDeposit.toLocaleString()} (50%)</span>
                    </div>
                </div>

                {/* Term selector */}
                <div className="mb-6">
                    <label className="text-sm font-bold text-gray-700 block mb-2">Loan Term</label>
                    <div className="grid grid-cols-4 gap-2">
                        {[24, 36, 48, 60].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTerm(t)}
                                className={`py-2.5 rounded-lg text-sm font-bold transition-all border ${
                                    term === t
                                        ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#1e3a8a] hover:text-[#1e3a8a]'
                                }`}
                            >
                                {t}mo
                            </button>
                        ))}
                    </div>
                </div>

                {/* Summary breakdown */}
                <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100 text-sm mb-4">
                    <div className="flex justify-between px-4 py-3">
                        <span className="text-gray-500">Vehicle price</span>
                        <span className="font-bold text-gray-900">£{price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between px-4 py-3">
                        <span className="text-gray-500">Deposit</span>
                        <span className="font-bold text-gray-900">£{deposit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between px-4 py-3">
                        <span className="text-gray-500">Amount financed</span>
                        <span className="font-bold text-gray-900">£{loan.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between px-4 py-3">
                        <span className="text-gray-500">Total interest</span>
                        <span className="font-bold text-gray-900">£{totalInterest.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between px-4 py-3 bg-gray-50 rounded-b-xl">
                        <span className="font-bold text-gray-900">Total amount payable</span>
                        <span className="font-bold text-[#1e3a8a]">£{totalPayable.toLocaleString()}</span>
                    </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                    This calculator provides an estimate only. Figures are based on {APR}% APR representative.
                    Final rates depend on individual circumstances and lender approval.
                    Call us on <a href="tel:07729419246" className="text-[#1e3a8a] font-semibold">07729 419246</a> to discuss your options.
                </p>
            </div>
        </div>
    );
}
