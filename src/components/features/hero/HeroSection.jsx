import Image from "next/image";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

/**
 * Hero Section Component
 * Promo banner with CTA button
 * Mobile: Compact vertical layout
 * Desktop: Minimal height compact hero
 */
export default function HeroSection() {
  return (
    <>
      {/* Mobile Hero */}
      <div className="px-4 mt-2 mb-6 md:hidden">
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 shadow-lg shadow-[#88f59b]/20 aspect-[4/3]">
          {/* Background Decoration */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#88f59b]/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#88f59b]/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-between p-6 z-10">
            <div>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-slate-900 text-xs font-bold rounded-full mb-3 shadow-lg shadow-[#88f59b]/30">
                Promo
              </span>
              <h2 className="text-3xl font-black text-white leading-none tracking-tight drop-shadow-sm">
                Hot &<br />
                Fresh
              </h2>
              <p className="text-white/90 text-sm font-medium mt-2 max-w-[140px]">
                50% Off Pepperoni Feast today only!
              </p>
            </div>
            <button className="relative bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full px-6 py-2.5 shadow-lg shadow-[#88f59b]/30 hover:shadow-xl hover:shadow-[#88f59b]/40 transition-all duration-200 group overflow-hidden self-start">
              <span className="relative z-10 flex items-center gap-2 text-slate-900 font-bold text-xs">
                Order Now
                <Icon
                  name="arrow_forward"
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              {/* White oval inside - centered horizontally */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-7 bg-white/30 rounded-full"></div>
            </button>
          </div>

          {/* Hero Image */}
          <div className="absolute -right-16 top-4 w-[65%] h-[120%] relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIc-5IQ-XIQdcuppk6_Bdo-MQK8Elmre3T3c3Xv4V53b63F6vlImAt3LveS2aU7ToyyVSY_WU7EwRQzSQjV5M_1Etu_sYbfAhX-UPIduNYHJnCzYh-2yMUKPFNGQ61uu9m6mK_Hfn8l_u_DNyBp4y6GX56z6AgbPD8QY4Jd_-ZabFxAVyCT4i70pMbynd11ulKjaCOU2Vt5TPn0EqfDLSz__ao_ILQZ0Wn-H4ZREP2G9Y0eh5O1USf67bZDkd-ZJG5mbTiczLCIRo"
              alt="Delicious pepperoni pizza with melted cheese"
              fill
              className="object-cover object-center rounded-full shadow-2xl rotate-12"
              priority
            />
          </div>
        </div>
      </div>

      {/* Desktop Hero - Minimal compact height */}
      <div className="hidden md:block w-full mb-8">
        <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-lg shadow-[#88f59b]/20 h-32">
          {/* Background Decoration */}
          <div className="absolute -right-20 top-0 w-40 h-40 bg-[#88f59b]/20 rounded-full blur-2xl"></div>
          <div className="absolute -left-20 bottom-0 w-40 h-40 bg-[#88f59b]/10 rounded-full blur-2xl"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-between px-8">
            {/* Left Side - Content */}
            <div className="flex items-center gap-6">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-slate-900 text-xs font-bold rounded-full shadow-lg shadow-[#88f59b]/30">
                Promo
              </span>
              <div>
                <h2 className="text-2xl font-black text-white leading-tight tracking-tight">
                  Hot & Fresh Pizza
                </h2>
                <p className="text-sm text-white/90 font-medium mt-0.5">
                  50% Off Pepperoni Feast today only!
                </p>
              </div>
            </div>

            {/* Right Side - CTA */}
            <button className="relative bg-gradient-to-r from-[#88f59b] to-[#5fd672] rounded-full px-8 py-3 shadow-lg shadow-[#88f59b]/30 hover:shadow-xl hover:shadow-[#88f59b]/40 transition-all duration-200 group overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 text-slate-900 font-bold text-sm">
                Order Now
                <Icon
                  name="arrow_forward"
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              {/* White oval inside - centered horizontally */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-white/30 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
