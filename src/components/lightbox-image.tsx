"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface LightboxImageProps {
  src: string;
  alt: string;
  className: string;
}

export default function LightboxImage({
  src,
  alt,
  className,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`relative block aspect-[1236/1600] w-full cursor-zoom-in overflow-hidden rounded-lg ring-1 ring-gray-900/10 transition hover:opacity-90 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="384px"
          className="object-contain"
        />
      </button>
      <p className="mt-2 text-center text-xs text-gray-500">
        Click the flyer to view it larger
      </p>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="fixed right-4 top-4 z-10 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70"
        >
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="max-w-2xl">
            <Image
              src={src}
              alt={alt}
              width={1236}
              height={1600}
              sizes="(max-width: 672px) 100vw, 672px"
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
