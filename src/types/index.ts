export interface TranslationRequest {
    text: string;
    targetLanguage: string;
}

export interface TranslationResponse {
    translatedText: string;
    originalText: string;
    targetLanguage: string;
}