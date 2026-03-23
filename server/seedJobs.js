import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "./models/Job.js";
import Company from "./models/Company.js";

// Load env vars
dotenv.config();

// Connect to DB
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

const jobsData = [
    {
        title: "Security Guard",
        location: "Sehore",
        level: "Entry Level",
        description: "<p>We are looking for a responsible and alert Security Guard to protect premises, assets, and people.</p>",
        salary: 15000,
        date: Date.now(),
        category: "Security Guard",
    },
    {
        title: "Cook",
        location: "Aashta",
        level: "Intermediate Level",
        description: "<p>We are hiring an experienced Cook to prepare traditional and local dishes.</p>",
        salary: 12000,
        date: Date.now(),
        category: "Cook",
    },
    {
        title: "Electrician",
        location: "Ichhawar",
        level: "Skilled Labor",
        description: "<p>Looking for an experienced Electrician to install, maintain, and repair electrical systems.</p>",
        salary: 18000,
        date: Date.now(),
        category: "Electrician",
    },
    {
        title: "Store Helper",
        location: "Kothri-Kalan",
        level: "Entry Level",
        description: "<p>Seeking a Store Helper to assist in daily shop operations.</p>",
        salary: 10000,
        date: Date.now(),
        category: "Store Helper",
    },
    {
        title: "Maid",
        location: "Amlaha",
        level: "Entry Level",
        description: "<p>Reliable maid needed for household work.</p>",
        salary: 8000,
        date: Date.now(),
        category: "Maid",
    },
    {
        title: "Driver",
        location: "JataKheda",
        level: "Skilled",
        description: "<p>Experienced Driver required for commercial vehicle.</p>",
        salary: 16000,
        date: Date.now(),
        category: "Driver",
    },
    {
        title: "Plumber",
        location: "Shujalpur",
        level: "Skilled Labor",
        description: "<p>Expert Plumber needed for installations and repairs.</p>",
        salary: 17000,
        date: Date.now(),
        category: "Plumber",
    },
    {
        title: "Mechanic",
        location: "Sehore",
        level: "Skilled Labor",
        description: "<p>Mechanic needed for two-wheeler and four-wheeler repairs.</p>",
        salary: 14500,
        date: Date.now(),
        category: "Mechanic",
    }
];

const seedDB = async () => {
    await connectDB();

    try {
        console.log("Clearing old jobs...");
        await Job.deleteMany();

        console.log("Looking for GraminMitra default company...");
        let company = await Company.findOne({ email: "admin@graminmitra.com" });

        if (!company) {
            console.log("Creating default company...");
            company = await Company.create({
                name: "GraminMitra Default Source",
                email: "admin@graminmitra.com",
                image: "https://cdn-icons-png.flaticon.com/512/3616/3616957.png",
                password: "hashedpasswordorsometthing", // We won't log in with this
            });
        }

        console.log("Seeding rural jobs...");
        const jobsToInsert = jobsData.map((job) => ({
            ...job,
            companyId: company._id,
            visible: true
        }));

        await Job.insertMany(jobsToInsert);

        console.log("Database seeded successfully with rural jobs.");
        process.exit();
    } catch (error) {
        console.error("Error seeding DB:", error);
        process.exit(1);
    }
};

seedDB();
