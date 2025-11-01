import PortfolioPage from "@/components/portfolioPage";

export const metadata = {
    title: "Portfolio | Usman Shouket",
    description: "View Usman Shouket — a passionate MERN stack web developer and digital marketer.",
      robots: {
    index: true,
    follow: true,
  }
};


const Page = () => {
    return (
        <PortfolioPage />
    )
}

export default Page;
