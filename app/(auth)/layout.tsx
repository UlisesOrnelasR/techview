import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-2">
      <div className="p-20 bg-amber-400 text-black">AuthLayout</div>
      {children}
    </div>
  );
}
