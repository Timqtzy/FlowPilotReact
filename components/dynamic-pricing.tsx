"use client";

import { useCurrency } from "@/components/currency-context";
import { convertPrice, formatPrice } from "@/components/currency-changer";

interface PricingCardProps {
  title: string;
  usdPrice: number;
  description: string;
  features: string[];
  featureDetails?: string[]; // New prop for detailed descriptions
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
  featureDetails = [], // Default to empty array
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
          <div className="mb-2">
            <div className="text-4xl lg:text-3xl xl:text-4xl font-bold text-purple-600 dark:text-purple-400 leading-tight">
              {formattedPrice}
            </div>
            <div className="text-lg text-slate-500 dark:text-slate-400 mt-1">
              /month
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          {features.map((feature, i) => (
            <div key={i} className="group/feature relative">
              <div className="flex items-start gap-3 cursor-help transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg p-2 -m-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 group-hover/feature:scale-110 group-hover/feature:bg-purple-200 dark:group-hover/feature:bg-purple-800">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300 transition-colors duration-200 group-hover/feature:text-slate-900 dark:group-hover/feature:text-white">
                  {feature}
                </span>
                
                {/* Hover hint indicator */}
                {featureDetails[i] && (
                  <div className="ml-auto opacity-0 group-hover/feature:opacity-100 transition-all duration-300 transform translate-x-2 group-hover/feature:translate-x-0">
                    <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center animate-pulse">
                      <svg className="w-3 h-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Hover tooltip with detailed description */}
              {featureDetails[i] && (
                <div className="absolute left-0 top-full mt-2 z-50 opacity-0 group-hover/feature:opacity-100 transition-all duration-300 pointer-events-none group-hover/feature:pointer-events-auto transform translate-y-2 group-hover/feature:translate-y-0">
                  <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-3 rounded-lg shadow-xl max-w-xs text-sm leading-relaxed border border-slate-700 dark:border-slate-300">
                    {featureDetails[i]}
                    {/* Arrow pointing up */}
                    <div className="absolute -top-2 left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-900 dark:border-b-slate-100"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Hover discovery hint */}
          {featureDetails.some(detail => detail) && (
            <div className="mt-6 p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-purple-700 dark:text-purple-300">
                <div className="flex items-center gap-1 sm:gap-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium whitespace-nowrap">💡 Pro tip:</span>
                </div>
                <span className="sm:ml-1 leading-relaxed">Hover over features to see detailed descriptions</span>
              </div>
            </div>
          )}
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
