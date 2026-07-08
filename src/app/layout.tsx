import type { Metadata } from "next";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-arabic",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Promodex Agency | ئاژانسی دیجیتاڵی پرۆمۆدێکس",
  description: "ئاژانسی دیجیتاڵی پرۆمۆدێکس (سڕیاس). پێشکەشکاری باشترین خزمەتگوزارییەکانی سۆشیاڵ میدیا، براندینگ و دروستکردنی وێبسایت.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ku"
      dir="rtl"
      className={`${notoArabic.variable} ${jakartaSans.variable} font-sans h-full scroll-smooth`}
    >
      <body className="min-h-full bg-brand-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
