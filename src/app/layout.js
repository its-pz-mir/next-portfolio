import Navbar from "@/components/navbar";
import "./globals.css";
import { Raleway } from "next/font/google"
import { ThemeProvider } from "next-themes";
import MblTabs from "@/components/mbltabs";
import Navigation from "@/components/navigation";
import ProfileDetails from "@/components/profileDetails";
import { Analytics } from "@vercel/analytics/next"

const raleway = Raleway({
  subsets: ['latin']
})

// METASATA for SEO
export const metadata = {
  title: "Home | Usman Shoukat - Full Stack Developer",
  description: "Portfolio of Usman Shoukat, a MERN stack web developer from Pakistan.",
  keywords: [
    "Usman Shoukat",
    "MERN Stack Developer",
    "Full Stack Developer Pakistan",
    "React.js",
    "Node.js",
    "Web Design",
    "Digital Marketing"
  ],
  openGraph: {
    title: "Usman Shoukat | Full Stack Developer",
    description: "Explore my web development projects and digital marketing expertise.",
    url: "https://www.usmanshouket.tech",
    siteName: "Usman Shoukat Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Usman Shoukat Portfolio Preview",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" webcrx="" suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-[#F2F5F9] dark:bg-[#0E141B]`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <div className="mbl-tab md:hidden">
            <MblTabs />
          </div>
          <div>
            <header>
              <Navbar />
            </header>
          </div>
          <div className="hidden md:block navigation overflow-x-hidden">
            <Navigation />
          </div>
          <div className="container my-6 mx-auto grid grid-cols-[25%_75%] gap-2">
            <aside className="bg-white dark:bg-[#1A1F25] rounded-lg p-4 hidden md:block">
              <ProfileDetails />
            </aside>
            <main className="bg-white dark:bg-[#1A1F25] p-4 w-screen md:w-full overflow-x-hidde rounded-lg">{children}
              <Analytics />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
