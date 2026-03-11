import {
  PrismaClient,
  Role,
  CourtType,
  Status,
  BookingStatus,
} from "@prisma/client";
import * as crypto from "crypto";

const prisma = new PrismaClient();

// Simple password hash (in production you'd use bcrypt)
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

async function main() {
  console.log("🌱 Starting database seed...");

  // ─── Cleanup ────────────────────────────────────────────────────────────────
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.slot.deleteMany();
  await prisma.court.deleteMany();
  await prisma.owner.deleteMany();
  await prisma.user.deleteMany();
  console.log("🧹 Cleared existing data");

  // ─── Admin User ─────────────────────────────────────────────────────────────
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@smashit.com",
      name: "Super Admin",
      password: hashPassword("Admin@123"),
      role: Role.ADMIN,
      phoneNumber: "+91 9800000000",
    },
  });
  console.log(`✅ Admin created: ${adminUser.email}`);

  // ─── Owner Users ─────────────────────────────────────────────────────────────
  const owner1User = await prisma.user.create({
    data: {
      email: "raj@smashit.com",
      name: "Rajesh Sharma",
      password: hashPassword("Owner@123"),
      role: Role.OWNER,
      phoneNumber: "+91 9812345678",
    },
  });

  const owner2User = await prisma.user.create({
    data: {
      email: "priya@smashit.com",
      name: "Priya Mehta",
      password: hashPassword("Owner@123"),
      role: Role.OWNER,
      phoneNumber: "+91 9823456789",
    },
  });

  // ─── Player Users ─────────────────────────────────────────────────────────
  const player1 = await prisma.user.create({
    data: {
      email: "arjun@smashit.com",
      name: "Arjun Kapoor",
      password: hashPassword("Player@123"),
      role: Role.PLAYER,
      phoneNumber: "+91 9834567890",
    },
  });

  const player2 = await prisma.user.create({
    data: {
      email: "sneha@smashit.com",
      name: "Sneha Patil",
      password: hashPassword("Player@123"),
      role: Role.PLAYER,
      phoneNumber: "+91 9845678901",
    },
  });

  const player3 = await prisma.user.create({
    data: {
      email: "vikram@smashit.com",
      name: "Vikram Nair",
      password: hashPassword("Player@123"),
      role: Role.PLAYER,
      phoneNumber: "+91 9856789012",
    },
  });
  console.log("✅ 2 owners and 3 players created");

  // ─── Owner Profiles ──────────────────────────────────────────────────────────
  const owner1 = await prisma.owner.create({ data: { userId: owner1User.id } });
  const owner2 = await prisma.owner.create({ data: { userId: owner2User.id } });

  // ─── Courts ──────────────────────────────────────────────────────────────────
  const court1 = await prisma.court.create({
    data: {
      name: "Smash Arena - Badminton",
      description:
        "Premium badminton courts with professional wooden flooring, good lighting, and air-conditioning.",
      location: "Bandra, Mumbai",
      address: "12 Turner Road, Bandra West, Mumbai - 400050",
      latitude: 19.0596,
      longitude: 72.8295,
      type: CourtType.BADMINTON,
      status: Status.ACTIVE,
      facilities: ["Parking", "WiFi", "Water", "Locker Room", "Cafeteria"],
      pricePerHour: 600,
      mainImage:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800",
      ownerId: owner1.id,
    },
  });

  const court2 = await prisma.court.create({
    data: {
      name: "Ace Tennis Club",
      description:
        "Two professional clay tennis courts with floodlights for evening games.",
      location: "Powai, Mumbai",
      address: "5 Hiranandani Gardens, Powai, Mumbai - 400076",
      latitude: 19.1176,
      longitude: 72.906,
      type: CourtType.TENNIS,
      status: Status.ACTIVE,
      facilities: [
        "Parking",
        "Coaching Available",
        "Equipment Rental",
        "Shower",
      ],
      pricePerHour: 1200,
      mainImage:
        "https://images.unsplash.com/photo-1551773188-0801da12ddae?w=800",
      ownerId: owner1.id,
    },
  });

  const court3 = await prisma.court.create({
    data: {
      name: "CricZone Nets",
      description:
        "Indoor cricket nets with bowling machines available. Great for practice sessions.",
      location: "Andheri East, Mumbai",
      address: "88 Andheri Sports Complex, Andheri East, Mumbai - 400069",
      latitude: 19.1136,
      longitude: 72.8697,
      type: CourtType.CRICKET,
      status: Status.ACTIVE,
      facilities: ["Parking", "Bowling Machine", "Equipment Rental", "Water"],
      pricePerHour: 800,
      mainImage:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800",
      ownerId: owner2.id,
    },
  });

  const court4 = await prisma.court.create({
    data: {
      name: "Squash Zone Pro",
      description:
        "Fully air-conditioned squash courts with glass back wall for spectators.",
      location: "Juhu, Mumbai",
      address: "34 Juhu Scheme, Juhu, Mumbai - 400049",
      latitude: 19.0969,
      longitude: 72.8268,
      type: CourtType.SQUASH,
      status: Status.ACTIVE,
      facilities: ["Parking", "Air Conditioning", "Water", "Locker Room"],
      pricePerHour: 700,
      mainImage:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800",
      ownerId: owner2.id,
    },
  });
  console.log("✅ 4 courts created");

  // ─── Slots ───────────────────────────────────────────────────────────────────
  const timeSlots = [
    { start: "06:00", end: "07:00" },
    { start: "07:00", end: "08:00" },
    { start: "08:00", end: "09:00" },
    { start: "09:00", end: "10:00" },
    { start: "10:00", end: "11:00" },
    { start: "16:00", end: "17:00" },
    { start: "17:00", end: "18:00" },
    { start: "18:00", end: "19:00" },
    { start: "19:00", end: "20:00" },
    { start: "20:00", end: "21:00" },
  ];

  for (const court of [court1, court2, court3, court4]) {
    for (const slot of timeSlots) {
      await prisma.slot.create({
        data: {
          courtId: court.id,
          startTime: slot.start,
          endTime: slot.end,
          isAvailable: true,
        },
      });
    }
  }
  console.log("✅ 40 time slots created (10 per court)");

  // ─── Bookings ────────────────────────────────────────────────────────────────
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const booking1 = await prisma.booking.create({
    data: {
      courtId: court1.id,
      userId: player1.id,
      bookingDate: tomorrow,
      startTime: "07:00",
      endTime: "08:00",
      totalAmount: 600,
      status: BookingStatus.CONFIRMED,
    },
  });

  const booking2 = await prisma.booking.create({
    data: {
      courtId: court1.id,
      userId: player2.id,
      bookingDate: tomorrow,
      startTime: "18:00",
      endTime: "19:00",
      totalAmount: 600,
      status: BookingStatus.PENDING,
    },
  });

  const booking3 = await prisma.booking.create({
    data: {
      courtId: court2.id,
      userId: player1.id,
      bookingDate: yesterday,
      startTime: "08:00",
      endTime: "09:00",
      totalAmount: 1200,
      status: BookingStatus.COMPLETED,
    },
  });

  const booking4 = await prisma.booking.create({
    data: {
      courtId: court3.id,
      userId: player3.id,
      bookingDate: today,
      startTime: "17:00",
      endTime: "18:00",
      totalAmount: 800,
      status: BookingStatus.CONFIRMED,
    },
  });

  await prisma.booking.create({
    data: {
      courtId: court4.id,
      userId: player2.id,
      bookingDate: yesterday,
      startTime: "19:00",
      endTime: "20:00",
      totalAmount: 700,
      status: BookingStatus.COMPLETED,
    },
  });
  console.log(`✅ 5 bookings created`);

  // ─── Reviews ─────────────────────────────────────────────────────────────────
  await prisma.review.createMany({
    data: [
      {
        userId: player1.id,
        courtId: court1.id,
        rating: 5,
        comment:
          "Excellent courts! Very clean and well-maintained. Loved the air conditioning.",
      },
      {
        userId: player2.id,
        courtId: court1.id,
        rating: 4,
        comment: "Great facility, easy to book online. Staff was helpful.",
      },
      {
        userId: player1.id,
        courtId: court2.id,
        rating: 5,
        comment: "Best tennis courts in Mumbai! The clay surface is perfect.",
      },
      {
        userId: player3.id,
        courtId: court3.id,
        rating: 4,
        comment:
          "Good cricket nets, bowling machine worked well. Parking is tight though.",
      },
      {
        userId: player2.id,
        courtId: court4.id,
        rating: 5,
        comment:
          "Top-class squash facility. Glass wall makes it great for watching too.",
      },
    ],
  });
  console.log("✅ 5 reviews created");

  // ─── Summary ──────────────────────────────────────────────────────────────────
  console.log("\n🎉 Seed complete! Demo credentials:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("👑 Admin:  admin@smashit.com  / Admin@123");
  console.log("🏟️  Owner1: raj@smashit.com   / Owner@123");
  console.log("🏟️  Owner2: priya@smashit.com / Owner@123");
  console.log("🏸 Player: arjun@smashit.com  / Player@123");
  console.log("🏸 Player: sneha@smashit.com  / Player@123");
  console.log("🏸 Player: vikram@smashit.com / Player@123");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
