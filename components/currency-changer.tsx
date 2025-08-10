"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, RefreshCw } from "lucide-react";
import { useCurrency } from "./currency-context";

export type Currency = {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Exchange rate relative to USD
};

interface CurrencyChangerProps {
  onCurrencyChange: (currency: Currency) => void;
  selectedCurrency: Currency;
}

export function CurrencyChanger({ onCurrencyChange, selectedCurrency }: CurrencyChangerProps) {
  const { currencies, isLoading, lastUpdated, refreshRates } = useCurrency();

  const handleRefresh = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await refreshRates();
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 px-3 py-2 h-9 text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{selectedCurrency.code}</span>
            <span className="sm:hidden">{selectedCurrency.symbol}</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {currencies.map((currency) => (
            <DropdownMenuItem
              key={currency.code}
              onClick={() => onCurrencyChange(currency)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{currency.symbol}</span>
                <span>{currency.code}</span>
              </div>
              <span className="text-sm text-muted-foreground">{currency.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleRefresh}
        disabled={isLoading}
        className="p-2 h-9 w-9"
        title={`Last updated: ${lastUpdated ? lastUpdated.toLocaleString() : 'Never'}`}
      >
        <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
      </Button>
    </div>
  );
}

// Utility function to convert prices
export function convertPrice(usdPrice: number, currency: Currency): number {
  return Math.round(usdPrice * currency.rate * 100) / 100;
}

// Utility function to format price with currency
export function formatPrice(price: number, currency: Currency): string {
  if (currency.code === "JPY") {
    return `${currency.symbol}${Math.round(price)}`;
  }
  return `${currency.symbol}${price.toFixed(2)}`;
}
