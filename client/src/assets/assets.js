import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import company_icon from "./company_icon.svg";
import microsoft_logo from "./microsoft_logo.png";
import walmart_logo from "./walmart_logo.png";
import accenture_logo from "./accenture_logo.png";
import profile_img from "./profile_img.png";
import app_main_img from "./app_main_img.png";
import cross_icon from './cross_icon.svg';
import location_icon from './location_icon.svg';
import money_icon from './money_icon.svg';
import suitcase_icon from './suitcase_icon.svg';
import person_icon from './person_icon.svg';
import upload_area from './upload_area.svg';
import resume_selected from './resume_selected.svg';
import resume_not_selected from './resume_not_selected.svg';
import play_store from './play_store.svg';
import app_store from './app_store.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import profile_upload_icon from './profile_upload_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import resume_download_icon from './resume_download_icon.svg'
import delete_icon from './delete_icon.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import samsung_logo from './samsung_logo.png'
import adobe_logo from './adobe_logo.png'
import amazon_logo from './amazon_logo.png'

export const assets = {
    logo,
    search_icon,
    cross_icon,
    upload_area,
    company_icon,
    resume_not_selected,
    resume_selected,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    app_main_img,
    play_store,
    app_store,
    back_arrow_icon,
    left_arrow_icon,
    right_arrow_icon,
    location_icon,
    money_icon,
    suitcase_icon,
    person_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    home_icon,
    add_icon,
    person_tick_icon,
    resume_download_icon,
    profile_img,
    delete_icon,
    profile_upload_icon,
    email_icon,
    lock_icon,
    samsung_logo,
    adobe_logo,
    amazon_logo
}

export const JobCategories = [
    "Security Guard",
    "Store Helper",
    "Cook",
    "Maid",
    "Driver",
    "Plumber",
    "Electrician",
    "Mechanic",
]

export const JobLocations = [
    "Sehore",
    "Aashta",
    "Kothri-Kalan",
    "Amlaha",
    "JataKheda",
    "Ichhawar",
    "Shujalpur"
]

// Sample data for Manage Jobs Page
export const manageJobsData = [
    { _id: 1, title: "Security Guard", date: 1729102298497, location: "Sehore", applicants: 20 },
    { _id: 2, title: "Store Helper", date: 1729102298497, location: "Aashta", applicants: 15 },
    { _id: 3, title: "Cook", date: 1729102298497, location: "Kothri-Kalan", applicants: 2 },
    { _id: 4, title: "Electrician", date: 1729102298497, location: "Shujalpur", applicants: 25 }
];

// Sample data for Profile Page
export const jobsApplied = [
    {
        company: 'Local Farm',
        title: 'Farm Worker',
        location: 'Sehore',
        date: '22 Aug, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Construction Site',
        title: 'Mason',
        location: 'Aashta',
        date: '22 Aug, 2024',
        status: 'Rejected',
        logo: company_icon,
    },
    {
        company: 'Household',
        title: 'Maid',
        location: 'Kothri-Kalan',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
    {
        company: 'Transport Service',
        title: 'Driver',
        location: 'Shujalpur',
        date: '15 Oct, 2024',
        status: 'Pending',
        logo: company_icon,
    },
    {
        company: 'Electrical Works',
        title: 'Electrician',
        location: 'Ichhawar',
        date: '25 Sep, 2024',
        status: 'Accepted',
        logo: company_icon,
    },
];

export const viewApplicationsPageData = [
    { _id: 1, name: "Amit Sharma", jobTitle: "Security Guard", location: "Sehore", imgSrc: profile_img },
    { _id: 2, name: "Pooja Verma", jobTitle: "Cook", location: "Aashta", imgSrc: profile_img },
    { _id: 3, name: "Ramesh Yadav", jobTitle: "Driver", location: "Kothri-Kalan", imgSrc: profile_img },
    { _id: 4, name: "Sunita Devi", jobTitle: "Maid", location: "Shujalpur", imgSrc: profile_img },
    { _id: 5, name: "Vikas Kumar", jobTitle: "Electrician", location: "Ichhawar", imgSrc: profile_img },
    { _id: 6, name: "Suman Tiwari", jobTitle: "Plumber", location: "JataKheda", imgSrc: profile_img },
    { _id: 7, name: "Ravi Singh", jobTitle: "Mechanic", location: "Amlaha", imgSrc: profile_img },
    { _id: 8, name: "Meera Patel", jobTitle: "Tailor", location: "Nasrullaganj", imgSrc: profile_img },
    { _id: 9, name: "Harish Thakur", jobTitle: "Carpenter", location: "Rehti", imgSrc: profile_img },
    { _id: 10, name: "Anita Chauhan", jobTitle: "Teacher", location: "Budhni", imgSrc: profile_img }
];

export const jobsData = [
    {
        _id: '1',
        title: "Security Guard",
        location: "Sehore",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Local Security Agency",
            "email": "security@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are looking for a responsible and alert Security Guard to protect premises, assets, and people.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Monitor and patrol premises regularly.</li>
            <li>Check and approve visitor access.</li>
            <li>Respond promptly to alarms and security breaches.</li>
            <li>Report any suspicious behaviors or incidents.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Basic knowledge of security protocols.</li>
            <li>Ability to stay alert and react quickly.</li>
            <li>Good communication and observation skills.</li>
        </ol>`,
        salary: 15000,
        date: Date.now(),
        category: "Security Guard",
    },
    {
        _id: '2',
        title: "Cook",
        location: "Aashta",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Local Dhaba",
            "email": "dhaba@demo.com",
            "image": company_icon,
        },
        description: `
        <p>We are hiring an experienced Cook to prepare traditional and local dishes.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Prepare and cook meals as per orders.</li>
            <li>Maintain hygiene and cleanliness in the kitchen.</li>
            <li>Manage kitchen inventory and ingredients.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Knowledge of regional cuisine.</li>
            <li>Experience in cooking in a professional setting.</li>
            <li>Good time management skills.</li>
        </ol>`,
        salary: 12000,
        date: Date.now(),
        category: "Cook",
    },
    {
        _id: '3',
        title: "Electrician",
        location: "Ichhawar",
        level: "Skilled Labor",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Local Electrical Services",
            "email": "electrical@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Looking for an experienced Electrician to install, maintain, and repair electrical systems.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Install and repair wiring, electrical fixtures, and circuit breakers.</li>
            <li>Ensure electrical safety compliance.</li>
            <li>Diagnose and fix electrical issues.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience in electrical maintenance and installation.</li>
            <li>Knowledge of safety regulations.</li>
            <li>Ability to use electrical tools efficiently.</li>
        </ol>`,
        salary: 18000,
        date: Date.now(),
        category: "Electrician",
    },
    {
        _id: '4',
        title: "Store Helper",
        location: "Kothri-Kalan",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "General Store",
            "email": "store@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Seeking a Store Helper to assist in daily shop operations.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Clean and organize the store.</li>
            <li>Assist customers in finding products.</li>
            <li>Stock shelves and manage inventory.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Basic math skills.</li>
            <li>Hardworking and punctual.</li>
        </ol>`,
        salary: 10000,
        date: Date.now(),
        category: "Store Helper",
    },
    {
        _id: '5',
        title: "Maid",
        location: "Amlaha",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Private Residence",
            "email": "home@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Reliable maid needed for household work.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Sweeping and mopping floors.</li>
            <li>Washing utensils and clothes.</li>
            <li>General house cleaning.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Trustworthy and efficient.</li>
            <li>Previous experience preferred.</li>
        </ol>`,
        salary: 8000,
        date: Date.now(),
        category: "Maid",
    },
    {
        _id: '6',
        title: "Driver",
        location: "JataKheda",
        level: "Skilled",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Logistics Co.",
            "email": "logistics@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Experienced Driver required for commercial vehicle.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Drive goods vehicle safely.</li>
            <li>Ensure timely delivery.</li>
            <li>Maintain vehicle condition.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Valid Commercial Driving License.</li>
            <li>Clean driving record.</li>
        </ol>`,
        salary: 16000,
        date: Date.now(),
        category: "Driver",
    },
    {
        _id: '7',
        title: "Plumber",
        location: "Shujalpur",
        level: "Skilled Labor",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "City Plumbing",
            "email": "plumbing@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Expert Plumber needed for installations and repairs.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Install and repair pipes and fixtures.</li>
            <li>Fix leaks and blockages.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Plumbing certification or experience.</li>
            <li>Problem-solving skills.</li>
        </ol>`,
        salary: 17000,
        date: Date.now(),
        category: "Plumber",
    },
    {
        _id: '8',
        title: "Mechanic",
        location: "Sehore",
        level: "Skilled Labor",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Auto Garage",
            "email": "garage@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Mechanic needed for two-wheeler and four-wheeler repairs.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Engine tuning and servicing.</li>
            <li>Tire changing and brake repairs.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Mechanical knowledge of vehicles.</li>
            <li>Experience with tools.</li>
        </ol>`,
        salary: 14500,
        date: Date.now(),
        category: "Mechanic",
    },
    {
        _id: '9',
        title: "Security Guard",
        location: "Aashta",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Secure Life Agency",
            "email": "securelife@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Guard required for night shift at a warehouse.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Patrol the perimeter every hour.</li>
            <li>Monitor CCTV cameras.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Physical fitness.</li>
            <li>Alertness.</li>
        </ol>`,
        salary: 13500,
        date: Date.now(),
        category: "Security Guard",
    },
    {
        _id: '10',
        title: "Cook",
        location: "Shujalpur",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Taste of India",
            "email": "taste@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Need a cook for a small family restaurant.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Cook breakfast and lunch items.</li>
            <li>Keep the cooking area clean.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with South Indian dishes.</li>
            <li>Speed and hygiene.</li>
        </ol>`,
        salary: 12500,
        date: 1729681667115,
        category: "Cook",
    },
    {
        _id: '11',
        title: "Store Helper",
        location: "JataKheda",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Village Mart",
            "email": "mart@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Helper needed for loading and unloading goods.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Unload delivery trucks.</li>
            <li>Arrange items on shelves.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Physical strength.</li>
            <li>Basic reading skills.</li>
        </ol>`,
        salary: 9500,
        date: 1729681667115,
        category: "Store Helper",
    },
    {
        _id: '12',
        title: "Maid",
        location: "Ichhawar",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Gupta Household",
            "email": "gupta@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Full-time maid for cleaning and cooking assistance.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Daily cleaning of the house.</li>
            <li>Assisting in kitchen work.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Honesty and punctuality.</li>
        </ol>`,
        salary: 9000,
        date: 1729681667115,
        category: "Maid",
    },
    {
        _id: '13',
        title: "Driver",
        location: "Sehore",
        level: "Skilled",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Sharma Travels",
            "email": "sharma@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Taxi driver needed for local trips.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Pick up and drop customers.</li>
            <li>Maintain car cleanliness.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Valid License.</li>
            <li>Knowledge of local routes.</li>
        </ol>`,
        salary: 15500,
        date: 1729681667115,
        category: "Driver",
    },
    {
        _id: '14',
        title: "Plumber",
        location: "Kothri-Kalan",
        level: "Skilled Labor",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Quick Fix Plumbing",
            "email": "quickfix@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Plumber for residential repairs.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Repair leaking taps and pipes.</li>
            <li>Install bathroom fittings.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience in plumbing.</li>
        </ol>`,
        salary: 16500,
        date: 1729681667115,
        category: "Plumber",
    },
    {
        _id: '15',
        title: "Electrician",
        location: "Amlaha",
        level: "Skilled Labor",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Power Solutions",
            "email": "power@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Electrician for wiring new houses.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Plan and install wiring systems.</li>
            <li>Connect switches and sockets.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Safety certified.</li>
            <li>Experience with house wiring.</li>
        </ol>`,
        salary: 18500,
        date: 1729681667115,
        category: "Electrician",
    },
    {
        _id: '16',
        title: "Mechanic",
        location: "Kothri-Kalan",
        level: "Skilled Labor",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Bike Point",
            "email": "bikepoint@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Two-wheeler mechanic needed urgently.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Service bikes and scooters.</li>
            <li>Repair engines and brakes.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Experience with Honda and Hero bikes.</li>
        </ol>`,
        salary: 13000,
        date: 1729681667115,
        category: "Mechanic",
    },
    {
        _id: '17',
        title: "Security Guard",
        location: "Sehore",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "City Mall",
            "email": "citymall@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Mall security guard needed.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Check bags at entrance.</li>
            <li>Guide visitors.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Polite behavior.</li>
            <li>Vigilance.</li>
        </ol>`,
        salary: 14000,
        date: Date.now(),
        category: "Security Guard",
    },
    {
        _id: '18',
        title: "Cook",
        location: "Aashta",
        level: "Intermediate Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Highway Motley",
            "email": "motel@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Cook for a highway restaurant.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Prepare snacks and tea.</li>
            <li>Clean the kitchen.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Fast cooking.</li>
        </ol>`,
        salary: 11000,
        date: Date.now(),
        category: "Cook",
    },
    {
        _id: '19',
        title: "Store Helper",
        location: "Ichhawar",
        level: "Entry Level",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "Medical Store",
            "email": "medical@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Helper for a pharmacy.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Clean the shop.</li>
            <li>Fetch medicines for the pharmacist.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Basic reading (English/Hindi).</li>
        </ol>`,
        salary: 9000,
        date: Date.now(),
        category: "Store Helper",
    },
     {
        _id: '20',
        title: "Driver",
        location: "Aashta",
        level: "Skilled",
        companyId: {
            "_id": "670e4d25ca9fda8f1bf359b9",
            "name": "School Bus Services",
            "email": "schoolbus@demo.com",
            "image": company_icon,
        },
        description: `
        <p>Driver for school bus.</p>
        <h2><strong>Key Responsibilities</strong></h2>
        <ol>
            <li>Pick up and drop children safely.</li>
            <li>Follow traffic rules strictly.</li>
        </ol>
        <h2><strong>Skills Required</strong></h2>
        <ol>
            <li>Heavy Vehicle License.</li>
            <li>Patience and care.</li>
        </ol>`,
        salary: 14000,
        date: Date.now(),
        category: "Driver",
    }
];

// Custom Class names

// .rich-text { font-size: 15px; color: #7A7B7D; }

// .rich-text p { margin-bottom: 16px; }

// .rich-text h1 { font-size: 36px; font-weight: 800; color: #252525; margin: 32px 0; }

// .rich-text h2 { font-size: 22px; font-weight: 700; color: #252525; margin: 24px 0; }

// .rich-text h3 { font-size: 18px; font-weight: 600; color: #333333; margin: 20px 0; }

// .rich-text h4 { font-size: 16px; font-weight: 500; color: #444444; margin: 16px 0; }

// .rich-text h5 { font-size: 14px; font-weight: 400; color: #555555; margin: 12px 0; }

// .rich-text h6 { font-size: 12px; font-weight: 400; color: #666666; margin: 8px 0; }

// .rich-text strong { font-weight: 700; }

// .rich-text ol { margin-left: 30px; list-style-type: decimal; }

// .rich-text ul { margin-left: 30px; list-style-type: disc; }

// .rich-text li { margin-bottom: 8px; }