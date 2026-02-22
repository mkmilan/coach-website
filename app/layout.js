import "@/styles/globals.scss";

export const metadata = {
  title: "Milan Endurance Coaching",
  description: "Evidence-based endurance coaching for runners, cyclists, and triathletes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
