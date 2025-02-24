/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	  "*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		fontFamily: {
		  sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
		  rethink: ["var(--font-rethink-sans)", "sans-serif"],
		  bricolage: ["var(--font-bricolage-grotesque)", "sans-serif"],
		  gent: ["var(--font-gent-sans)", "sans-serif"],
		},
		fontWeight: {
		  "heading-bold": "700",
		},
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		  "infinite-scroll": {
			from: { transform: "translateX(0)" },
			to: { transform: "translateX(calc(-50% - 2rem))" },
		  },
		  "gradient-x": {
			"0%, 100%": {
			  "background-size": "200% 200%",
			  "background-position": "left center",
			},
			"50%": {
			  "background-size": "200% 200%",
			  "background-position": "right center",
			},
		  },
		  "fade-in-up": {
			"0%": {
			  opacity: "0",
			  transform: "translateY(20px)",
			},
			"100%": {
			  opacity: "1",
			  transform: "translateY(0)",
			},
		  },
		  "fade-in-down": {
			"0%": {
			  opacity: "0",
			  transform: "translateY(-20px)",
			},
			"100%": {
			  opacity: "1",
			  transform: "translateY(0)",
			},
		  },
		  "fade-in": {
			"0%": {
			  opacity: "0",
			},
			"100%": {
			  opacity: "1",
			},
		  },
		  ripple: {
			"0%": { transform: "scale(0)", opacity: "0.5" },
			"100%": { transform: "scale(1)", opacity: "0" },
		  },
		  "glass-shine": {
			"0%": { transform: "translateX(-100%) skew(10deg)" },
			"100%": { transform: "translateX(200%) skew(10deg)" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
		  "accordion-up": "accordion-up 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
		  "infinite-scroll": "infinite-scroll 60s linear infinite",
		  "gradient-x": "gradient-x 15s ease infinite",
		  "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.33, 1, 0.68, 1)",
		  "fade-in-down": "fade-in-down 0.7s cubic-bezier(0.33, 1, 0.68, 1)",
		  "fade-in": "fade-in 0.7s cubic-bezier(0.33, 1, 0.68, 1)",
		  ripple: "ripple 1s linear infinite",
		  "glass-shine": "glass-shine 1.5s ease-in-out infinite",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }
  
  