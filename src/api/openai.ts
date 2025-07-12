import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY; // Ensure you set your OpenAI API key in your environment variables

export const fetchTranslation = async (inputText: string): Promise<string> => {
    try {
        const response = await axios.post(OPENAI_API_URL, {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: inputText }],
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const translatedText = response.data.choices[0].message.content;
        return translatedText;
    } catch (error) {
        console.error('Error fetching translation:', error);
        throw new Error('Failed to fetch translation');
    }
};