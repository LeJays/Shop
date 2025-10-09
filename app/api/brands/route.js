import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {title} = await request.json();

        const brand = {title};
        console.log(brand);
        return NextResponse.json(brand);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error, message: "Erreur pendant la création de la marque"}, {status: 500});
    }
}