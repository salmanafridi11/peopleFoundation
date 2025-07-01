import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-red-600 via-purple-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Column 1 */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-sm mb-4">NEW YORK OFFICE</h3>
            <p className="text-xs opacity-80">
              United Nations Foundation<br />
              lorem ipsum lorem lorem<br />
              lorem
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-sm mb-4">WHAT WE DO</h3>
            <ul className="space-y-2">
              <li className="text-xs opacity-80">Issues</li>
              <li className="text-xs opacity-80">Initiatives</li>
              <li className="text-xs opacity-80">Communities</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-sm mb-4">WHY WE DO IT</h3>
            <ul className="space-y-2">
              <li className="text-xs opacity-80">Overview</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-sm mb-4">WHO WE ARE</h3>
            <ul className="space-y-2">
              <li className="text-xs opacity-80">Our Approach</li>
              <li className="text-xs opacity-80">Our Financials</li>
              <li className="text-xs opacity-80">Our Mission and History</li>
              <li className="text-xs opacity-80">Our Partners</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-sm mb-4">GET INVOLVED</h3>
            <ul className="space-y-2">
              <li className="text-xs opacity-80">Give</li>
              <li className="text-xs opacity-80">Learn</li>
              <li className="text-xs opacity-80">Act</li>
            </ul>
          </div>
        </div>

        {/* Bottom section with policy links and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-4 border-t border-white border-opacity-20">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-xs opacity-80 hover:opacity-100">Privacy Policy</a>
            <a href="#" className="text-xs opacity-80 hover:opacity-100">Contact Us</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="opacity-80 hover:opacity-100">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <span className="sr-only">Infinity</span>
                ∞
              </div>
            </a>
            <a href="#" className="opacity-80 hover:opacity-100">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <span className="sr-only">Instagram</span>
                □
              </div>
            </a>
            <a href="#" className="opacity-80 hover:opacity-100">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <span className="sr-only">LinkedIn</span>
                in
              </div>
            </a>
            <a href="#" className="opacity-80 hover:opacity-100">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white">
                <span className="sr-only">Twitter</span>
                X
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;