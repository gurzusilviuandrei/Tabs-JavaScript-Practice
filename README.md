https://github.com/gurzusilviuandrei/Tabs-JavaScript-Practice
--Start Of The Project-- V.0  (08/07/2026)


Added Buttons and Style
09/07/2026

- Created The Buttons
- Improved the Style
- Added Color Transition to Background Color when the Cursor is on the Buttons

Final Version
✅  Built a fully functional Tab Navigation System using HTML, CSS, and JavaScript.
Clicking a tab:
Highlights the active tab (only one can be active at a time).
Changes the entire page background color to simulate switching between different pages.

The first tab ("Home") is active by default when the page loads.
Clean, responsive flexbox layout for the tabs.
Smooth hover and active states.

🐞 BUGS

- Multiple tabs active at once
- Initial Home tab not active on load
- Double active tabs
- Tabs had different widths

SOLUTIONS
- Used forEach to remove tab-active from all tabs before adding to the clicked one
- Added code after event listeners to manually activate tabs[0]
- Removed active class from HTML, let JS control everything
- Added min-width + text-align: center

  
