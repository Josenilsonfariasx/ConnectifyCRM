import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        try {
        const user = await prismaClient.client.findFirst({
            where: {
            id: user_id,
            },
            select: {
            id: true,
            nomeCompleto: true,
            email: true,
            communications: true,
            contacts:true,
            dataRegistro:true,
            telefone:true,
            _count:true
            },
        });

        if (!user) {
            throw new Error("User not found");
        }

        return user;
        } catch (error) {
        throw new Error("Failed to fetch user details: " + error.message);
        }
    }
}

export { DetailUserService };