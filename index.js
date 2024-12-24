require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function consultarTienda(preguntaUsuario) {
  try {
    const completion = await openai.chat.completions.create({
      model: "ft:gpt-3.5-turbo-0125:seba-y-daro-org:hotelmodelseba:AhwE3v3M", // Tu modelo fine-tuned
      messages: [
        {
          role: "user",
          content: preguntaUsuario,
        },
      ],
    });

    console.log("\nRespuesta de la tienda:");
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Prueba el modelo
consultarTienda("Hola, ¿que horario es el check in? ");
