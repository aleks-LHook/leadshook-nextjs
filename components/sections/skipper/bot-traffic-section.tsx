"use client";

import { motion } from "motion/react";
import { useState, useRef } from "react";

const stats = [
  {
    label: "Bad Bot Traffic 2024",
    value: "37%",
    change: "+5%",
    isPositive: false,
  },
  {
    label: "Attribution Loss",
    value: "30-40%",
    change: "Industry Avg",
    isPositive: false,
  },
  {
    label: "Growth Since 2015",
    value: "+99%",
    change: "Nearly Doubled",
    isPositive: false,
  },
  {
    label: "Average Wasted Ad Spend",
    value: "30%",
    change: "Going Up In Smoke",
    isPositive: false,
  },
];

// Chart data points - Bad bot traffic percentage by year
const chartData = [
  { month: "2015", primary: 18.6, secondary: 0 },
  { month: "2016", primary: 19.9, secondary: 0 },
  { month: "2017", primary: 21.8, secondary: 0 },
  { month: "2018", primary: 20.4, secondary: 0 },
  { month: "2019", primary: 24.1, secondary: 0 },
  { month: "2020", primary: 25.6, secondary: 0 },
  { month: "2021", primary: 27.7, secondary: 0 },
  { month: "2022", primary: 29.5, secondary: 0 },
  { month: "2023", primary: 32, secondary: 0 },
  { month: "2024", primary: 37, secondary: 0 },
];

export default function BotTrafficSection() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const chartRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!chartRef.current) return;

    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pointWidth = rect.width / chartData.length;
    const index = Math.floor(x / pointWidth);

    if (index >= 0 && index < chartData.length) {
      setHoveredPoint(index);
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  return (
    <section className="py-20 px-4 bg-neutral-50 dark:bg-black">
      <div className="w-full max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#262C5B] dark:text-white leading-tight">
              37% of Your Traffic is Fake
            </h2>
            <div className="space-y-4 text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p>
                The data is alarming: bad bot traffic hit 37% in 2024, up 99% 
                since 2015. That means roughly a third of your ad spend is wasted 
                on bots, click farms, and fraudsters who will never buy.
              </p>
              <p className="text-xl md:text-2xl text-red-500 dark:text-red-400 font-semibold">
                Your analytics lie. Your CRM is polluted. Your budget is bleeding.
              </p>
              <p className="pt-2">
                Skipper fixes this automatically using LeadsHook's security features. 
                It identifies fake traffic in real-time, blocks bots, flags suspicious 
                visitors, and ensures only real prospects reach your funnel. No manual 
                monitoring, no guessing.
              </p>
              <p className="text-xl md:text-2xl text-[#262C5B] dark:text-white font-semibold pt-2">
                You run ads. Skipper ensures they reach humans. Your budget works harder.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`rounded-xl p-4 md:p-6 border ${
                    index === 0
                      ? "border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/5"
                      : "border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800/50"
                  }`}
                >
                  <p className={`text-xs md:text-sm mb-2 ${index === 0 ? "text-blue-600 dark:text-blue-400" : "text-neutral-600 dark:text-neutral-400"}`}>
                    {stat.label}
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</p>
                    <div
                      className={`flex items-center gap-1 text-xs md:text-sm font-medium ${
                        stat.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {stat.isPositive ? (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 10L8 6L4 10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M4 6L8 10L12 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      <span className="hidden md:inline">{stat.change}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Chart - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 rounded-2xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-800 shadow-lg"
        >
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Bad Bot Traffic Rising</h3>
            <div className="text-xs text-red-700 dark:text-neutral-400 bg-red-500/20 dark:bg-red-500/10 border border-red-500/40 dark:border-red-500/30 px-3 py-1 rounded-full">
              📈 Growing Problem
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Bad bot traffic has nearly doubled since 2015, costing advertisers billions in wasted ad spend and skewed analytics.
            Protect your funnel with LeadsHook's server-side tracking.
          </p>

          {/* Chart Area */}
          <div
            ref={chartRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-80 bg-gradient-to-b from-neutral-200/40 dark:from-neutral-800/30 to-transparent rounded-xl p-6 border border-neutral-300 dark:border-neutral-800/50 cursor-crosshair"
          >
            {/* Tooltip */}
            {hoveredPoint !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute z-50 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 shadow-xl pointer-events-none"
                style={{
                  left: `${tooltipPos.x}px`,
                  top: `${tooltipPos.y - 80}px`,
                  transform: 'translateX(-50%)',
                }}
              >
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">{chartData[hoveredPoint].month}</p>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-sm text-neutral-900 dark:text-white font-medium">
                    Bad Bot Traffic: {chartData[hoveredPoint].primary}%
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                  {hoveredPoint === 0 ? 'Baseline year' :
                   `+${(chartData[hoveredPoint].primary - chartData[0].primary).toFixed(1)}% since 2015`}
                </p>
              </motion.div>
            )}

            {/* Hover indicator line */}
            {hoveredPoint !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-6 bottom-10 w-px bg-neutral-400 dark:bg-neutral-600 pointer-events-none"
                style={{
                  left: `${((hoveredPoint + 0.5) / chartData.length) * 100}%`,
                }}
              />
            )}

            {/* Y-axis grid lines */}
            <div className="absolute inset-6 flex flex-col justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="border-t border-dashed border-neutral-300 dark:border-neutral-700/50" />
              ))}
            </div>

            {/* SVG Chart */}
            <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
              {/* Bad bot traffic line (red/orange - showing upward trend from 18.6% to 37%) */}
              <path
                d="M 0 250 L 111 245 L 222 238 L 333 242 L 444 220 L 555 212 L 666 200 L 777 185 L 888 165 L 1000 120"
                fill="none"
                stroke="url(#redGradient)"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              {/* Area under line */}
              <path
                d="M 0 250 L 111 245 L 222 238 L 333 242 L 444 220 L 555 212 L 666 200 L 777 185 L 888 165 L 1000 120 L 1000 300 L 0 300 Z"
                fill="url(#redFill)"
                opacity="0.3"
              />

              {/* Hover dots */}
              {hoveredPoint !== null && (
                <>
                  {/* Calculate Y position based on data */}
                  <circle
                    cx={((hoveredPoint + 0.5) / chartData.length) * 1000}
                    cy={250 - ((chartData[hoveredPoint].primary - 18.6) / (37 - 18.6)) * 130}
                    r="6"
                    fill="#ef4444"
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="drop-shadow-lg"
                  />
                </>
              )}

              {/* Gradients */}
              <defs>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="redFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-6 right-6 flex justify-between text-xs text-neutral-600 dark:text-neutral-500 mt-2">
              {chartData.map((data) => (
                <span key={data.month}>{data.month}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
