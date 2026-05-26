/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette officielle Féeline Création
        blanc: '#FFFFFF',
        ivoire: '#F7F5EE',
        champagne: '#EFE6D3',
        beigeSable: '#E6DCC3',
        orDore: '#D4AF37',
        orMetallise: '#BFA46A',
        encre: '#2A2A2A',
      },
      fontFamily: {
        // Typographies officielles de la charte
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        // Espacements personnalisés pour titres et capitales
        ultratight: '-0.02em',
        tightish: '-0.01em',
        normalplus: '0.02em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
        ceremonial: '0.3em',
      },
      maxWidth: {
        prose: '65ch',
        contenu: '1200px',
        ceremonie: '900px',
      },
      spacing: {
        section: '6rem',
        sectionLg: '9rem',
      },
    },
  },
  plugins: [],
};
