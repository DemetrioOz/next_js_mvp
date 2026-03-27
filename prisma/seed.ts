import "dotenv/config";
import { PrismaClient, UserRoles } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
async function main() {
  // const locations = await prisma.location.createMany({
  //   data: [
  //     { name: 'Matriz', room: '101' },
  //     { name: 'Filial A', room: '202' },
  //     { name: 'Filial B', room: '303' },
  //   ],
  //   skipDuplicates: true,
  // })
  const allLocations = await prisma.location.findMany()

  const matriz = allLocations.find(l => l.name === 'Matriz')
  const filialA = allLocations.find(l => l.name === 'Filial A')
  const filialB = allLocations.find(l => l.name === 'Filial B')
  if (!matriz || !filialA || !filialB) {
    throw new Error('Locations não foram criadas corretamente')
  }

  await prisma.user.createMany({
    data: [
      {
        name: 'Pele Edson Arantes do Nascimento',
        email: 'admin@email.com',
        role: UserRoles.ADMIN,
        locationId: matriz.id,
      },
      {
        name: 'Ronaldo Nazario',
        email: 'analist@email.com',
        role: UserRoles.ANALIST,
        locationId: filialA.id,
      },
      {
        name: 'Neymar Junior',
        email: 'assets@email.com',
        role: UserRoles.ASSETS,
        locationId: filialA.id,
      },
      {
        name: 'Field Desk User',
        email: 'fielddesk@email.com',
        role: UserRoles.FIELD_DESK,
        locationId: matriz.id,
      },
      {
        name: 'Default User',
        email: 'user@email.com',
        role: UserRoles.USER,
        locationId: matriz.id,
      },
    ],
    skipDuplicates: true,
  })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });