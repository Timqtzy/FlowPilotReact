"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Currency } from "./currency-changer";

interface CurrencyContextType {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  currencies: Currency[];
  isLoading: boolean;
  lastUpdated: Date | null;
  refreshRates: () => Promise<void>;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    rate: 1,
  });
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchExchangeRates = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/exchange-rates');
      const data = await response.json();
      
      if (data.success) {
        setCurrencies(data.rates);
        setLastUpdated(new Date(data.updatedAt));
        
        // Update selected currency with new rate if it exists
        const updatedSelectedCurrency = data.rates.find(
          (c: Currency) => c.code === selectedCurrency.code
        );
        if (updatedSelectedCurrency) {
          setSelectedCurrency(updatedSelectedCurrency);
        }
        
        // If no currencies are set yet, set the first one as default
        if (currencies.length === 0 && data.rates.length > 0) {
          setCurrencies(data.rates);
        }
      } else {
        console.error('Failed to fetch exchange rates:', data.error);
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshRates = async () => {
    await fetchExchangeRates();
  };

  useEffect(() => {
    // Load selected currency from localStorage
    const saved = localStorage.getItem("selectedCurrency");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSelectedCurrency(parsed);
      } catch (error) {
        console.error("Failed to parse saved currency:", error);
      }
    }

    // Fetch initial exchange rates
    fetchExchangeRates();
  }, []);

  useEffect(() => {
    // Save selected currency to localStorage
    localStorage.setItem("selectedCurrency", JSON.stringify(selectedCurrency));
  }, [selectedCurrency]);

  return (
    <CurrencyContext.Provider value={{ 
      selectedCurrency, 
      setSelectedCurrency, 
      currencies, 
      isLoading, 
      lastUpdated, 
      refreshRates 
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
