import ContextProvider from "@/components/context/ContextProvider";
import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "../../public/assets/css/flaticon.css";
import "../../public/assets/css/font-awesome-all.css";
import "../../public/assets/css/style.css";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import CustomLayout from "@/components/layout/CustomLayout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "ServiciosUnoaUno - Aseo para Instituciones Educativas, Colegios y Universidades",
  description: "Servicios especializados de limpieza y mantenimiento para instituciones educativas, colegios y universidades en Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17859600597"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17859600597');
            `,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${bricolage.variable}`}
        suppressHydrationWarning
      >
        <ContextProvider>
          <CustomLayout>
            {children}
          </CustomLayout>
        </ContextProvider>
      </body>
    </html>
  );
}