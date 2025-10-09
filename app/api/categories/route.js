import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {title, description} = await request.json();

        const Category = {title, description};
        console.log(Category);
        return NextResponse.json(Category);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error, message: "Erreur pendant la création de la Catégorie"}, {status: 500});
    }
}