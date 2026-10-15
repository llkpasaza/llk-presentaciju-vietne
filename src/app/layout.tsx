import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "LL & K | Ēku pārvaldīšana",
description:
"Profesionāla ēku apsaimniekošana, tehniskā uzturēšana un pārskatāma finanšu pārvaldība Rīgā.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="lv">
<body>{children}</body>
</html>
);
}
