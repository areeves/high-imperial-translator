import OpenAI from 'openai';

export const fetchTranslation = async (inputText: string, apiKey: string): Promise<string> => {
    try {
        const openai = new OpenAI({ apiKey });
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: inputText }],
        });
        const translatedText = response.choices[0].message?.content || '';
        return translatedText;
    } catch (error) {
        console.error('Error fetching translation:', error);
        throw new Error('Failed to fetch translation');
    }
};