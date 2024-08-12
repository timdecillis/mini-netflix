"use server"
import { revalidatePath } from "next/cache";
import { MovieSearchProps, DetailsProps } from "./omdbTypes";
import db from "@/utils/db";

export const fetchMovies = async (
  term: string
): Promise<MovieSearchProps[]> => {
  const key = process.env.API_KEY;

  const res = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=${key}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movies");
  }
  return data.Search || [];
};
export const fetchDetails = async (id: string): Promise<DetailsProps> => {
  const key = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${key}&plot=full`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error("There was an error fetching the movie details");
  }
  return data || [];
};

export const getData = async () => {
  return await db.user.findMany({});
};

export const saveName = async (name: string) => {
  try {
    await db.user.create({
      data: {
        name,
      },
    });
    revalidatePath("/account");
  } catch (err) {
    console.error(`There was an error saving to the database: ${err}`);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await db.user.delete({
      where: { id },
    });
    revalidatePath("/account");
  } catch (err) {
    console.error(`There was an error deleting the user: ${err}`);
  }
};
