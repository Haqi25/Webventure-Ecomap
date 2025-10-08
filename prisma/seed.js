import prisma from "../src/db/index.js"
import  {createUser}  from "./seeds/users.js"
import { createBusinesses } from "./seeds/business.js";
import {createSustainabilityPractices } from "./seeds/sustainability.js"

async function main(){
    console.log(" Starting seeding...");
  await createUser();
  await createBusinesses();
  await createSustainabilityPractices();

    console.log(" Seeding completed successfully!");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(0)
  })

// run in terminal
  //node prisma/seed.js