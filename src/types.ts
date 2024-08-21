export interface Question {
    id: number;
    text: string;
    answers: Answer[];
}

export interface Answer {
    text: string;
    character: 'bonobo' | 'porori' | 'nuburi';
}

export interface Result {
    bonobo: number;
    porori: number;
    nuburi: number;
}