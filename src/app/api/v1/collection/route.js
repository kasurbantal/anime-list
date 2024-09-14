import prisma from "@/libs/prisma";

export async function POST(request) {
  console.log("masuk bosss");
  try {
    const { anime_mal_id, user_email, anime_image, anime_title } =
      await request.json();
    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const createCollection = await prisma.collections.create({ data });

    return new Response(JSON.stringify({ status: 200, isCreated: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating collection:", error);
    return new Response(JSON.stringify({ status: 500, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
