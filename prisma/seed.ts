import { PrismaClient } from '@prisma/client'
import { create } from 'domain'
import {faker} from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  await prisma.todo.createMany({
    //* Generate fake data for Todo Model *//
    data: Array.from({length:25},()=>{
      return{
        title:faker.lorem.words({min:3, max:7}),
        
        }
        })
      //* Generate fake data for User Model *//
    // data: Array.from({length:25},()=>{
    //   return{
    //     email:faker.internet.email(),
    //     name:faker.internet.userName(),
    //     address:{
    //       street:faker.location.street(),
    //       city:faker.location.city(),
    //       state:faker.location.state(),
    //       zip:faker.location.zipCode()
    //     }
    //   }
    // })
  })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })