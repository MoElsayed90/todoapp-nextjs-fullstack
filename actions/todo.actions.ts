'use server'
import { todoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodoListAction = async () => {
return await prisma.todo.findMany()
};
export const createTodoAction = async ({title , body,completed}:todoFormValues) => {
  return await prisma.todo.create({
    data:{
      title,
      body,
      completed
    }
  })
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
