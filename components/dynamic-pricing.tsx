"use client";

import { useCurrency } from "@/components/currency-context";
import { convertPrice, formatPrice } from "@/components/currency-changer";

interface PricingCardProps {
  title: string;
  usdPrice: number;
  description: string;
  features: string[];
  badge?: string;
  badgeColor?: string;
  icon: React.ReactNode;
  gradient: string;
  buttonText: string;
  buttonHref: string;
  popular?: boolean;
  enterprise?: boolean;
}

export function PricingCard({
  title,
  usdPrice,
  description,
  features,
  badge,
  badgeColor = "from-purple-600 to-violet-600",
  icon,
  gradient,
  buttonText,
  buttonHref,
  popular = false,
  enterprise = false,
}: PricingCardProps) {
  const { selectedCurrency } = useCurrency();
  const convertedPrice = convertPrice(usdPrice, selectedCurrency);
  const formattedPrice = formatPrice(convertedPrice, selectedCurrency);

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
      <div className="relative bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
        {badge && (
          <div className="absolute top-4 right-4">
            <div className={`bg-gradient-to-r ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold ${enterprise ? 'animate-pulse' : ''}`}>
              {badge}
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center`}>
            {icon}
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {formattedPrice}
            <span className="text-lg text-slate-500 dark:text-slate-400">
              /month
            </span>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-700 dark:text-slate-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-auto">
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full bg-gradient-to-r ${gradient} hover:from-purple-700 hover:to-violet-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-center`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
