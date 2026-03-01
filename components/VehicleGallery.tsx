'use client';

import { useState, useCallback } from 'react';

type Props = {
  images: string[];
  title: string;
};

export default function VehicleGallery({ images, title }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="bg-[#f7f7f7] w-full aspect-[4/3] rounded-2xl flex items-center justify-center border border-gray-100">
        <span className="text-gray-400 font-medium text-lg tracking-wide uppercase">No Image Available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative bg-[#f7f7f7] w-full aspect-[4/3] rounded-2xl border border-gray-100 shadow-sm overflow-hidden group">
        <img
          src={images[activeIndex]}
          alt={`${title} — photo ${activeIndex + 1} of ${images.length}`}
          className="w-full h-full object-cover"
        />

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image counter badge */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-sm font-medium px-3 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip — all images */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View photo ${i + 1}`}
              className={`aspect-[4/3] rounded-lg border-2 overflow-hidden flex-shrink-0 transition-all ${
                i === activeIndex
                  ? 'border-[#1e3a8a] opacity-100 shadow'
                  : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
