import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    const { anime_mal_id, user_email, comment, username, anime_title } =
      await request.json();
    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const createComment = await prisma.comment.create({ data });

    return new Response(JSON.stringify({ status: 200, isCreated: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    return new Response(JSON.stringify({ status: 500, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
