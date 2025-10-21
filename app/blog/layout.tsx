import { CurrencyProvider } from "@/components/currency-context";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CurrencyProvider>{children}</CurrencyProvider>;
}
