
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFinancialInsights = async (context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Aja como um analista financeiro experiente. Analise os seguintes dados de simulação e forneça 3 dicas práticas e uma breve conclusão sobre a viabilidade ou impacto financeiro. Use português brasileiro.

Dados da Simulação:
${context}`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Não foi possível gerar insights no momento.";
  } catch (error) {
    console.error("Error fetching Gemini insights:", error);
    return "Ocorreu um erro ao consultar o especialista de IA. Verifique sua conexão.";
  }
};
