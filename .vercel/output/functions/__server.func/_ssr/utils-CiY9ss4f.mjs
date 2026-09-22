import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CiY9ss4f.js
var SITE = {
	name: "MGN UNIFORMS",
	shortName: "MGN",
	tagline: "Workplace uniforms, made in Karachi.",
	description: "Custom uniforms for hotels, hospitals, factories, and enterprises across Pakistan. Scrubs, workwear, hospitality, and branded apparel — not school or college uniforms.",
	founded: 2020,
	city: "Karachi",
	email: "hello@mgnuniforms.com",
	address: "Office 270, Cooperative Market, Abdullah Haroon Road, Saddar, Karachi",
	region: "Sindh, Pakistan",
	linkedin: "https://pk.linkedin.com/company/mgnuniforms"
};
var NAV = [
	{
		href: "/industries",
		label: "Industries"
	},
	{
		href: "/lookbook",
		label: "Lookbook"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/quote",
		label: "Request a quote"
	}
];
var INDUSTRIES = [
	{
		slug: "hotels",
		title: "Hotels & hospitality",
		short: "Hotels",
		kicker: "Front of house to the pass",
		summary: "Uniforms that hold up through check-in, turn-down, and service — tailored enough for the lobby, practical enough for the floor.",
		image: "/images/hotels.jpg",
		imageAlt: "Hotel staff in custom navy and cream uniforms in a marble lobby",
		roles: [
			"Front office & concierge",
			"Bell & guest services",
			"Housekeeping",
			"Food & beverage",
			"Chef whites & kitchen",
			"Engineering & facilities",
			"Spa & leisure",
			"Security"
		],
		fabrics: [
			"Stain-resistant poly-cotton for F&B",
			"Breathable poplin for front office",
			"Heavy-duty weaves for housekeeping",
			"Chef cotton and cool-touch coats"
		],
		body: "A hotel is read in the first ten seconds. We programme full properties: colour-coded departments, embroidered names and crests, and grading that fits South Asian body types — not imported size charts. From 25-key boutique houses to large city hotels, every role gets a uniform that works a full shift in Karachi heat and Lahore winters."
	},
	{
		slug: "hospitals",
		title: "Hospitals & clinics",
		short: "Hospitals",
		kicker: "Scrubs, coats, and ward teams",
		summary: "Medical apparel built for long rounds, frequent washes, and clear department identity — without looking like catalogue leftovers.",
		image: "/images/hospitals.jpg",
		imageAlt: "Doctors and nurses in custom sage and navy scrubs",
		roles: [
			"Scrub sets",
			"Lab coats & consult coats",
			"Nursing tunics",
			"OT and procedure wear",
			"Front desk & admin",
			"Ward housekeeping",
			"Pharmacy & labs",
			"Patient-facing support"
		],
		fabrics: [
			"Stretch scrub blends for movement",
			"Easy-wash poly-cotton that keeps colour",
			"Antimicrobial options on request",
			"Soft-hand lab-coat twills"
		],
		body: "Hospitals need uniforms that survive industrial laundry and still look composed on the ward. We colour-code by department, embroider hospital marks, and cut scrubs that actually move. Programmes cover doctors, nurses, technicians, and support staff — one supplier, consistent fabric lots, nationwide top-ups."
	},
	{
		slug: "enterprises",
		title: "Enterprises & offices",
		short: "Enterprises",
		kicker: "Reception to the field",
		summary: "Branded workwear for the people who represent you: reception, security, drivers, facilities, and client-facing teams.",
		image: "/images/enterprises.jpg",
		imageAlt: "Corporate lobby staff in navy shirts, cream blazers, and security uniforms",
		roles: [
			"Reception & guest relations",
			"Corporate security",
			"Facilities & janitorial",
			"Drivers & dispatch",
			"Warehouse & stores",
			"Field sales polos",
			"Event & promo crews",
			"Cafeteria staff"
		],
		fabrics: [
			"Pique polos that hold embroidery",
			"Wrinkle-resistant shirts",
			"Tailored security suiting",
			"Caps, tees, and promo layers"
		],
		body: "Your staff are the brand before a slide deck ever opens. We match corporate colours, place logos where they belong, and kit out mixed teams — from a two-person reception to a multi-site facilities roster. Promotional apparel (caps, tees, polos) is part of the same programme, not an afterthought."
	},
	{
		slug: "factories",
		title: "Factories & industry",
		short: "Factories",
		kicker: "Workwear that lasts the floor",
		summary: "Coveralls, labour uniforms, high-visibility pieces, and supervisor kits — cut for Pakistani production floors.",
		image: "/images/factories.jpg",
		imageAlt: "Factory workers in navy coveralls on a manufacturing floor",
		roles: [
			"Coveralls & boilersuits",
			"Labour shirts & trousers",
			"High-visibility wear",
			"Supervisor shirts",
			"Warehouse crews",
			"Canteen & hygiene",
			"Maintenance",
			"Gate & yard security"
		],
		fabrics: [
			"Hard-wearing poly-cotton drills",
			"Reinforced knees and bar-tacks",
			"Reflective piping and tape",
			"FR options on specified programmes"
		],
		body: "Industrial uniforms fail at the seam first. We spec fabrics for abrasion, reinforce stress points, and keep colour lots consistent so a 200-person line still looks like one company six months in. Bulk runs ship from Karachi to sites across Sindh, Punjab, and beyond."
	}
];
function getIndustry(slug) {
	return INDUSTRIES.find((item) => item.slug === slug);
}
var PRODUCTS = [
	{
		id: "hospitality",
		title: "Hospitality uniforms",
		category: "Hospitality",
		image: "/images/hotels.jpg",
		blurb: "Lobby, rooms, and restaurant — one visual language."
	},
	{
		id: "scrubs",
		title: "Medical scrubs",
		category: "Healthcare",
		image: "/images/scrubs.jpg",
		blurb: "Stretch sets in department colours, built for the wash."
	},
	{
		id: "chef",
		title: "Chef whites",
		category: "Hospitality",
		image: "/images/chef.jpg",
		blurb: "Coats, aprons, and kitchen kit that stay composed on the pass."
	},
	{
		id: "housekeeping",
		title: "Housekeeping",
		category: "Hospitality",
		image: "/images/housekeeping.jpg",
		blurb: "Tunics with pockets that work a full floor."
	},
	{
		id: "workwear",
		title: "Industrial workwear",
		category: "Industrial",
		image: "/images/workwear.jpg",
		blurb: "Coveralls, reinforced trousers, high-vis piping."
	},
	{
		id: "factory-floor",
		title: "Factory programmes",
		category: "Industrial",
		image: "/images/factories.jpg",
		blurb: "Bulk labour uniforms with consistent lots."
	},
	{
		id: "enterprise",
		title: "Enterprise staff",
		category: "Enterprise",
		image: "/images/enterprises.jpg",
		blurb: "Reception, security, and facilities, colour-matched."
	},
	{
		id: "hospital-teams",
		title: "Hospital teams",
		category: "Healthcare",
		image: "/images/hospitals.jpg",
		blurb: "Scrubs, coats, and support staff as one programme."
	}
];
var LOOKBOOK_FILTERS = [
	"All",
	"Hospitality",
	"Healthcare",
	"Industrial",
	"Enterprise"
];
var PROCESS = [
	{
		step: "01",
		title: "Brief",
		text: "Roles, headcount, colours, logos, and the sites you need dressed. A sample of what you wear now helps."
	},
	{
		step: "02",
		title: "Design",
		text: "We spec fabric, cut, and branding — embroidery, woven labels, or heat transfer — and share a clear quote."
	},
	{
		step: "03",
		title: "Sample",
		text: "A wearable sample for fit and wash. Adjust before you commit the full run."
	},
	{
		step: "04",
		title: "Produce",
		text: "Cut and stitch in Karachi with consistent lots, so replacements match six months later."
	},
	{
		step: "05",
		title: "Deliver",
		text: "Packed by size and department, dispatched nationwide. Repeat orders stay on the same spec."
	}
];
var PRINCIPLES = [
	{
		title: "Workplaces only",
		text: "Hotels, hospitals, factories, enterprises, and workwear. We do not make school or college uniforms."
	},
	{
		title: "Cut for this climate",
		text: "Breathable cloth for Karachi summers, layering that still looks composed in the north."
	},
	{
		title: "Branding that sits right",
		text: "Crests, names, and department codes placed like a garment, not a sticker."
	},
	{
		title: "One programme, one lot",
		text: "Colour and fabric stay consistent when you add a new wing or a second shift."
	}
];
var FAQ = [
	{
		q: "Do you make school or college uniforms?",
		a: "No. MGN UNIFORMS is a workplace uniform house — hotels, hospitals, factories, enterprises, scrubs, and industrial workwear. We do not produce school or college uniforms."
	},
	{
		q: "What is the minimum order?",
		a: "Custom programmes typically start at 25 pieces per style. Full property or factory runs can be several hundred to several thousand. Tell us the headcount — we will shape the run."
	},
	{
		q: "Where do you deliver?",
		a: "From our Karachi atelier to sites across Pakistan: Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, and beyond."
	},
	{
		q: "Can you match our existing uniforms?",
		a: "Yes. Send a sample or clear photographs. We match colour, fabric weight, and branding placement, then lock the spec for reorders."
	},
	{
		q: "Do you embroider logos and names?",
		a: "Embroidery, woven labels, printed marks, and heat transfer. Department colour-coding is standard on hospital and hotel programmes."
	},
	{
		q: "How long does a programme take?",
		a: "Sampling is typically one to two weeks after the brief is locked. Production depends on quantity and fabric — we confirm dates on the quote."
	}
];
var CITIES = [
	"Karachi",
	"Lahore",
	"Islamabad",
	"Rawalpindi",
	"Faisalabad",
	"Multan",
	"Peshawar",
	"Quetta",
	"Hyderabad",
	"Sialkot",
	"Other"
];
var INDUSTRY_OPTIONS = [
	{
		value: "hotels",
		label: "Hotels & hospitality"
	},
	{
		value: "hospitals",
		label: "Hospitals & clinics"
	},
	{
		value: "enterprises",
		label: "Enterprises & offices"
	},
	{
		value: "factories",
		label: "Factories & industry"
	},
	{
		value: "other",
		label: "Other workplace (describe below)"
	}
];
var ROLES = [
	"Owner / director",
	"General manager",
	"Procurement",
	"HR / admin",
	"Operations",
	"Other"
];
var QTY = [
	"25–50",
	"51–150",
	"151–400",
	"401–1,000",
	"1,000+"
];
var MARQUEE = [
	"Concierge",
	"Housekeeping",
	"Food & beverage",
	"Chef whites",
	"Scrubs",
	"Lab coats",
	"Nursing tunics",
	"Coveralls",
	"High-vis",
	"Labour uniforms",
	"Security",
	"Reception",
	"Facilities",
	"Promotional polos",
	"Caps & tees"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
export { LOOKBOOK_FILTERS as a, PRINCIPLES as c, QTY as d, ROLES as f, getIndustry as h, INDUSTRY_OPTIONS as i, PROCESS as l, cn as m, FAQ as n, MARQUEE as o, SITE as p, INDUSTRIES as r, NAV as s, CITIES as t, PRODUCTS as u };
