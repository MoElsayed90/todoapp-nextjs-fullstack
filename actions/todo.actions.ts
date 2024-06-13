import { title } from 'process';
'use server'
import { ITodo } from "@/interfaces";
import { todoFormValues } from "@/schema";
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodoListAction = async ({userId}:{userId:string|null}) => {
const getTodos = await prisma.todo.findMany({
  where:{
    user_id:userId ?? ""  
  },
  orderBy:{
    createdAt:"desc"
  }
})
return getTodos
};
export const createTodoAction = async ({title , body,completed,userId}:{title:string ; body?:string | undefined ; completed:boolean ; userId:string|null}) => {
  const createdTodo = await prisma.todo.create({
    data:{
      title,
      body,
      completed,
      user_id:userId as string
    }
  })
revalidatePath("/")
return createdTodo;

};
export const updateTodoAction = async ({id,title,body,completed}:ITodo) => {
  const updateTodo = await prisma.todo.update({
    where:{
      id
    },
    data:{
      title,
      body,
      completed
    }
  })
  revalidatePath("/")
  return updateTodo
};
export const deleteTodoAction = async ({id}:{id:string}) => {
  const deletedTodo = await prisma.todo.delete({
    where:{
      id
    }
    })
  revalidatePath("/")
  return deletedTodo
};
