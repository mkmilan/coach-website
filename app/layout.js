import "@/styles/globals.scss";

export const metadata = {
  metadataBase: new URL("https://milanendurancelab.com"),
  title: {
    default: "Milan Endurance Coaching",
    template: "%s | Milan Endurance Coaching"
  },
  description: "Evidence-based endurance coaching for runners, cyclists, and triathletes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
